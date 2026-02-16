import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/utils/api";

export const useOrderStore = defineStore("order", () => {
  // State
  const orders = ref([]);
  const currentOrder = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Actions

  /**
   * Get user's orders
   */
  const getOrders = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get("/orders");
      orders.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to fetch orders";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Checkout and create order
   * @param {Object} checkoutData
   */
  const checkout = async (checkoutData) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.post("/orders/checkout", {
        payment_method: checkoutData.payment_method,
        shipping_address: checkoutData.shipping_address,
      });

      currentOrder.value = response.data;
      orders.value.unshift(response.data);
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Checkout failed";
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
    orders,
    currentOrder,
    loading,
    error,

    // Actions
    getOrders,
    checkout,
    clearError,
  };
});
