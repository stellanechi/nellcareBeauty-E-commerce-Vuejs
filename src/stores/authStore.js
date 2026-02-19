import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/utils/api";
import { useCartStore } from "@/stores/cartStore";

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref(null);
  const token = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const isAuthenticated = computed(() => !!token.value);
  const currentUser = computed(() => user.value);

  // Actions

  /**
   * Initialize auth state from localStorage
   */
  const initAuth = () => {
    const storedToken = localStorage.getItem("auth_token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      token.value = storedToken;
      user.value = JSON.parse(storedUser);
    }
  };

  /**
   * Register a new user
   */
  const register = async (userData) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.post("/register", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phone_number: userData.phone_number,
        address: userData.address,
      });

      // Store auth data
      if (response.data.token) {
        token.value = response.data.token;
        user.value = response.data.user;

        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Registration failed";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Login user
   */
  const login = async (email, password) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      // Store auth data
      if (response.data.token) {
        token.value = response.data.token;
        user.value = response.data.user;

        localStorage.setItem("auth_token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Login failed";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Logout user
   */
  const logout = async () => {
    loading.value = true;
    error.value = null;

    try {
      await api.post("/logout");
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      // Clear cart items
      const cartStore = useCartStore();
      cartStore.clearCart();

      // Clear auth data regardless of API response
      token.value = null;
      user.value = null;

      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
      loading.value = false;
    }
  };

  /**
   * Get user profile
   */
  const getUserProfile = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get("/user");
      user.value = response.data;
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (err) {
      error.value =
        err.response?.data?.message || "Failed to fetch user profile";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Clear error
   */
  const clearError = () => {
    error.value = null;
  };

  return {
    // State
    user,
    token,
    loading,
    error,

    // Getters
    isAuthenticated,
    currentUser,

    // Actions
    initAuth,
    register,
    login,
    logout,
    getUserProfile,
    clearError,
  };
});
