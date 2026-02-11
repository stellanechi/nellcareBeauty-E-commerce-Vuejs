<template>
  <div class="product-card">
    <!-- Badges -->
    <div class="badges">
      <span v-if="product.onSale" class="badge">SALE</span>
      <span v-if="hasDiscount" class="badge">-{{ discountPercent }}%</span>
      <span v-if="product.badge" class="badge">{{ product.badge }}</span>
    </div>

    <!-- Image Container -->
    <div class="image-container">
      <div v-if="!imageLoaded" class="loading-spinner">
        <div class="spinner"></div>
      </div>
      <img
        :src="product.image || placeholderImage"
        :alt="product.title"
        :class="{ loaded: imageLoaded }"
        @load="imageLoaded = true"
        @error="handleImageError"
      />
    </div>

    <!-- Product Info -->
    <div v-if="product.title || product.price" class="product-info">
      <h3 class="product-title">{{ product.number }}. {{ product.title }}</h3>
      <div v-if="product.price" class="price-container">
        <span class="current-price">${{ product.price.toFixed(2) }}</span>
        <span
          v-if="product.originalPrice && product.originalPrice > product.price"
          class="original-price"
        >
          ${{ product.originalPrice.toFixed(2) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      image: "",
      title: "Product Name",
      number: 1,
      price: null,
      originalPrice: null,
      discount: null,
      badge: null,
      onSale: false,
    }),
  },
});

const imageLoaded = ref(false);
const placeholderImage =
  "https://via.placeholder.com/400x400?text=Product+Image";

const hasDiscount = computed(() => {
  return (
    props.product.discount ||
    (props.product.price &&
      props.product.originalPrice &&
      props.product.price < props.product.originalPrice)
  );
});

const discountPercent = computed(() => {
  if (props.product.discount) return props.product.discount;

  if (props.product.price && props.product.originalPrice) {
    return Math.round(
      ((props.product.originalPrice - props.product.price) /
        props.product.originalPrice) *
        100,
    );
  }

  return 0;
});

const handleImageError = (event) => {
  event.target.src = placeholderImage;
  imageLoaded.value = true;
};
</script>

<style scoped>
.product-card {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
}

.product-card:hover {
  transform: translateY(-2px);
}

.badges {
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.badge {
  background-color: #7dd3c0;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
  width: fit-content;
}

.image-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.loading-spinner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 4px solid #7dd3c0;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  opacity: 0;
  transition:
    transform 0.4s ease,
    opacity 0.3s ease;
  padding: 3rem;
}

.image-container img.loaded {
  opacity: 1;
}

.product-card:hover .image-container img {
  transform: scale(1.05);
}

.product-info {
  padding: 0;
  background-color: transparent;
}

.product-title {
  color: #2d2d2d;
  font-weight: 400;
  font-size: 0.9375rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.current-price {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
}

.original-price {
  font-size: 0.9375rem;
  color: #a0a0a0;
  text-decoration: line-through;
  font-weight: 400;
}
</style>
