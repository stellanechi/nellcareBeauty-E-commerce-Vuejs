<template>
  <div
    class="product-wrapper"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Badges — on wrapper so overflow:hidden on card doesn't clip them -->
    <div class="badges">
      <span v-if="product.onSale" class="badge">SALE</span>
      <span v-if="hasDiscount" class="badge">-{{ discountPercent }}%</span>
      <span v-if="product.badge" class="badge">{{ product.badge }}</span>
    </div>

    <div class="product-card">
      <!-- Action Icons (visible on hover) -->
      <div class="action-icons" :class="{ visible: isHovered }">
        <button class="icon-btn" title="Add to wishlist">
          <Heart :size="18" :stroke-width="1.5" />
        </button>
        <button class="icon-btn" title="Compare">
          <ArrowLeftRight :size="18" :stroke-width="1.5" />
        </button>
        <button class="icon-btn" title="Quick view">
          <ZoomIn :size="18" :stroke-width="1.5" />
        </button>
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
    </div>

    <!-- Product Info -->
    <div v-if="product.title || product.price" class="product-info">
      <!-- Add to cart: shown on hover, hidden by default -->
      <div class="add-to-cart-row" :class="{ visible: isHovered }">
        <button class="add-to-cart-btn">+ Add to cart</button>
      </div>

      <!-- Title: hidden on hover -->
      <h3 class="product-title" :class="{ hidden: isHovered }">
        {{ product.title }}
      </h3>

      <div v-if="product.price" class="price-container">
        <span class="current-price">${{ product.price }}</span>
        <span
          v-if="product.originalPrice && product.originalPrice > product.price"
          class="original-price"
        >
          ${{ product.originalPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Heart, ArrowLeftRight, ZoomIn } from "lucide-vue-next";

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
const isHovered = ref(false);
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
.product-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}

.product-card {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  padding: 8rem 5rem;
  background-color: #f2f2f2;
}

.product-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* ── Badges ── */
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
  background-color: #97d8ca;
  color: #ebffff;
  font-size: 0.875rem;
  font-weight: 500;
  /* new */
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Action Icons ── */
.action-icons {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  opacity: 0;
  transform: translateX(8px);
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
  pointer-events: none;
}

.action-icons.visible {
  opacity: 1;
  transform: translateX(0);
  pointer-events: all;
}

.icon-btn {
  width: 2.2rem;
  height: 2.2rem;
  background: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #374151;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.icon-btn:hover {
  background: #111827;
  color: white;
  transform: scale(1.1);
}

/* ── Image ── */
.image-container {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.image-container img.loaded {
  opacity: 1;
}

.product-card:hover .image-container img {
  transform: scale(1.05);
}

/* ── Product Info ── */
.product-info {
  padding: 1rem 0.25rem 0.5rem;
}

/* Add to cart — hidden by default, slides in on hover */
.add-to-cart-row {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  margin-bottom: 0;
}

.add-to-cart-row.visible {
  max-height: 3rem;
  opacity: 1;
  margin-bottom: 0.35rem;
}

.add-to-cart-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: #e53e3e;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;
}

.add-to-cart-btn:hover {
  color: #c53030;
}

/* Title — visible by default, fades out on hover */
.product-title {
  color: #1f2937;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 3rem;
  opacity: 1;
  transition:
    max-height 0.3s ease,
    opacity 0.25s ease,
    margin 0.3s ease;
}

.product-title.hidden {
  max-height: 0;
  opacity: 0;
  margin-bottom: 0;
  overflow: hidden;
}

/* ── Price ── */
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
