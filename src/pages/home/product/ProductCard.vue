<template>
  <div class="product-card">
    <div>
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
        <h3 class="product-title">{{ product.title }}</h3>
        <div v-if="product.price" class="price-container">
          <span class="current-price">${{ product.price }}</span>
          <span
            v-if="
              product.originalPrice && product.originalPrice > product.price
            "
            class="original-price"
          >
            ${{ product.originalPrice }}
          </span>
        </div>
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
        100
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
  /* background-color: #f9fafb; */
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  padding: 2rem;
  background-color: #f2f2f2;
}

.product-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.badge {
  background-color: #5eead4;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
}

.image-container {
  /* position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: red; */
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
  border: 4px solid #5eead4;
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
  width: auto;
  height: auto;
  object-fit: cover;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.image-container img.loaded {
  opacity: 1;
}

.product-card:hover .image-container img {
  transform: scale(1.05);
}

.product-info {
  padding: 1rem;
}

.product-title {
  color: #1f2937;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.current-price {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
}

.original-price {
  font-size: 0.875rem;
  color: #6b7280;
  text-decoration: line-through;
}
</style>
