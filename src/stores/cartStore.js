import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/utils/api";

export const useCartStore = defineStore("cart", () => {
  // State
  const cartItems = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const cartCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
  });

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  });

  // Actions

  /**
   * Get user's cart
   */
  const getCart = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get("/cart");
      cartItems.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to fetch cart";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Add product to cart
   * @param {number} productId
   * @param {number} quantity
   */
  const addToCart = async (productId, quantity = 1) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.post("/cart/add", {
        product_id: productId,
        quantity: quantity,
      });

      // Refresh cart after adding
      await getCart();
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to add to cart";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Update cart item quantity
   * @param {number} cartItemId
   * @param {string} type - 'increment' or 'decrement'
   */
  const updateCartItem = async (cartItemId, type = "increment") => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.put(`/cart/${cartItemId}`, {
        type: type,
      });

      // Refresh cart after updating
      await getCart();
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to update cart";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Remove item from cart
   * @param {number} cartItemId
   */
  const removeFromCart = async (cartItemId) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.delete(`/cart/${cartItemId}`);

      // Remove from local state
      cartItems.value = cartItems.value.filter(
        (item) => item.id !== cartItemId,
      );
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to remove from cart";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Clear all cart items
   */
  const clearCart = () => {
    cartItems.value = [];
  };

  /**
   * Clear error
   */
  const clearError = () => {
    error.value = null;
  };

  return {
    // State
    cartItems,
    loading,
    error,

    // Getters
    cartCount,
    cartTotal,

    // Actions
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    clearError,
  };
});
