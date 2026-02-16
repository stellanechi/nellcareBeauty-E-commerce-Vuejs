import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/utils/api";

export const useWishlistStore = defineStore("wishlist", () => {
  // State
  const wishlistItems = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const wishlistCount = computed(() => wishlistItems.value.length);

  // Actions

  /**
   * Get user's wishlist
   */
  const getWishlist = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get("/wishlist");
      wishlistItems.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to fetch wishlist";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Add product to wishlist
   * @param {number} productId
   */
  const addToWishlist = async (productId) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.post("/wishlist/add", {
        product_id: productId,
      });

      // Refresh wishlist
      await getWishlist();
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to add to wishlist";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Remove product from wishlist
   * @param {number} productId
   */
  const removeFromWishlist = async (productId) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.delete(`/wishlist/${productId}`);

      // Remove from local state
      wishlistItems.value = wishlistItems.value.filter(
        (item) => item.product_id !== productId,
      );
      return response.data;
    } catch (err) {
      error.value =
        err.response?.data?.message || "Failed to remove from wishlist";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Check if product is in wishlist
   * @param {number} productId
   */
  const isInWishlist = (productId) => {
    return wishlistItems.value.some((item) => item.product_id === productId);
  };

  /**
   * Clear error
   */
  const clearError = () => {
    error.value = null;
  };

  return {
    // State
    wishlistItems,
    loading,
    error,

    // Getters
    wishlistCount,

    // Actions
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearError,
  };
});
