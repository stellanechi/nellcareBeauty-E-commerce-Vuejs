<template>
  <div class="px-16">
    <!-- Loading Skeleton -->
    <div
      v-if="productStore.loading"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10"
    >
      <div v-for="n in 6" :key="n" class="flex flex-col animate-pulse">
        <div class="rounded-lg bg-[#f2f2f2] w-full" style="padding: 8rem 5rem">
          <div class="aspect-square bg-gray-300 rounded" />
        </div>
        <div class="mt-4 space-y-2 px-1">
          <div class="h-4 bg-gray-200 rounded w-3/4" />
          <div class="h-4 bg-gray-200 rounded w-1/3" />
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="productStore.error"
      class="flex flex-col items-center justify-center py-20 text-center"
    >
      <svg
        class="w-12 h-12 text-gray-300 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p class="text-gray-500 mb-4">{{ productStore.error }}</p>
      <button
        @click="loadProducts"
        class="text-sm text-gray-700 underline hover:text-gray-900 transition-colors"
      >
        Try again
      </button>
    </div>

    <!-- Product Cards -->
    <div
      v-else
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
import { computed, onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";
import ProductCard from "@/pages/home/product/ProductCard.vue";

const emit = defineEmits(["product-selected"]);

const productStore = useProductStore();

const handleViewProduct = (product) => {
  emit("product-selected", product);
};

const loadProducts = async () => {
  await productStore.getProducts();
};

// API returns: { id, name, description, price, stock, image, hover_image, category }
// Map to exactly what ProductCard expects: { id, title, image, price, originalPrice, onSale, discount, badge }
const products = computed(() =>
  productStore.products.map((item) => ({
    id: item.id,
    title: item.name,
    description: item.description,
    image: item.image,
    hoverImage: item.hover_image,
    category: item.category,
    stock: item.stock,
    price: parseFloat(item.price),
    // API doesn't return sale fields yet — defaults below keep the card working
    originalPrice: null,
    onSale: false,
    discount: null,
    badge: null,
  })),
);

onMounted(() => {
  loadProducts();
});
</script>
