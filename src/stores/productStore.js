// src/stores/productStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/utils/api";

export const useProductStore = defineStore("product", () => {
  // State
  const products = ref([]);
  const currentProduct = ref(null);
  const loading = ref(false);
  const error = ref(null);

  // Actions

  /**
   * Get all products
   * @param {string} tab - Filter tab (e.g., 'sale', 'new', 'featured')
   */
  const getProducts = async (tab = null) => {
    loading.value = true;
    error.value = null;

    try {
      const params = tab ? { tab } : {};
      const response = await api.get("/products", { params });
      products.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to fetch products";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Get single product by ID
   * @param {number} productId
   */
  const getProduct = async (productId) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get(`/products/${productId}`);
      currentProduct.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to fetch product";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Create a new product (Admin only)
   * @param {Object} productData
   */
  const createProduct = async (productData) => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.post("/products", productData);
      products.value.push(response.data);
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to create product";
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
    products,
    currentProduct,
    loading,
    error,

    // Actions
    getProducts,
    getProduct,
    createProduct,
    clearError,
  };
});
