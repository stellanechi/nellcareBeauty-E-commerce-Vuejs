<template>
  <div class="px-16">
    <!-- Product Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @click="handleViewProduct(product)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "@/pages/home/product/ProductCard.vue";

// emits
const emit = defineEmits(["product-selected"]);

// state
const baseUrl = "https://fakestoreapi.com/products";
const products = ref([]);

// Define sales per product ID: { [id]: discountPercent }
const SALE_CONFIG = {
  1: 15, // 15% off
  4: 30, // 30% off
  5: 20, // 20% off
};

// methods
const handleViewProduct = (product) => {
  emit("product-selected", product);
};

const applyDiscount = (price, discountPercent) => {
  return parseFloat((price - (price * discountPercent) / 100).toFixed(2));
};

const fetchProducts = async (limit = null) => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    products.value = (limit ? data.slice(0, limit) : data).map((item) => {
      const discountPercent = SALE_CONFIG[item.id] ?? null;
      const onSale = discountPercent !== null;

      return {
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image,
        category: item.category,
        price: onSale ? applyDiscount(item.price, discountPercent) : item.price,
        originalPrice: onSale ? item.price : null,
        onSale,
        discount: discountPercent,
      };
    });
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

// lifecycle
onMounted(() => {
  fetchProducts(6);
});
</script>
