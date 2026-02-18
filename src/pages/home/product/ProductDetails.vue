<template>
  <div class="min-h-screen bg-white">
    <!-- Breadcrumb -->
    <div class="bg-gray-50 border-b border-gray-200 py-4 px-6 lg:px-16">
      <p class="text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-800 transition-colors"
          >Home</router-link
        >
        <span class="mx-2">/</span>
        <router-link to="/shop" class="hover:text-gray-800 transition-colors"
          >Shop</router-link
        >
        <span class="mx-2">/</span>
        <span class="text-gray-800">{{ product?.title || "Product" }}</span>
      </p>
    </div>

    <!-- Loading State -->
    <div
      v-if="productStore.loading"
      class="max-w-7xl mx-auto px-6 lg:px-16 py-16"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
        <div class="aspect-square bg-gray-100 rounded-lg" />
        <div class="space-y-6">
          <div class="h-8 bg-gray-100 rounded w-3/4" />
          <div class="h-6 bg-gray-100 rounded w-1/4" />
          <div class="h-12 bg-gray-100 rounded w-1/3" />
          <div class="h-24 bg-gray-100 rounded" />
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="productStore.error"
      class="max-w-7xl mx-auto px-6 lg:px-16 py-20 text-center"
    >
      <p class="text-gray-500 mb-4">{{ productStore.error }}</p>
      <router-link
        to="/shop"
        class="text-gray-800 underline hover:text-gray-600"
      >
        Back to shop
      </router-link>
    </div>

    <!-- Product Detail -->
    <div v-else-if="product" class="max-w-7xl mx-auto px-6 lg:px-16 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left: Product Image -->
        <div class="relative">
          <div
            class="sticky top-24 bg-gray-50 rounded-lg p-8 flex items-center justify-center aspect-square"
          >
            <img
              :src="currentImage"
              :alt="product.title"
              class="w-full h-full object-contain"
              @error="handleImageError"
            />
          </div>

          <!-- Thumbnail Images (if hover image exists) -->
          <div v-if="product.hoverImage" class="flex gap-4 mt-4">
            <button
              @click="currentImage = product.image"
              :class="[
                'w-20 h-20 border-2 rounded-lg overflow-hidden transition-all',
                currentImage === product.image
                  ? 'border-gray-800'
                  : 'border-gray-200 hover:border-gray-400',
              ]"
            >
              <img
                :src="product.image"
                :alt="product.title"
                class="w-full h-full object-cover"
              />
            </button>
            <button
              @click="currentImage = product.hoverImage"
              :class="[
                'w-20 h-20 border-2 rounded-lg overflow-hidden transition-all',
                currentImage === product.hoverImage
                  ? 'border-gray-800'
                  : 'border-gray-200 hover:border-gray-400',
              ]"
            >
              <img
                :src="product.hoverImage"
                :alt="product.title"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Right: Product Info -->
        <div class="space-y-6">
          <!-- Title with Number -->
          <h1 class="text-3xl font-light text-gray-900">
            <span class="text-gray-400">{{ productNumber }}.</span>
            {{ product.title }}
          </h1>

          <!-- Availability -->
          <div class="flex items-center gap-2 text-sm">
            <span class="text-gray-600">Availability:</span>
            <span
              :class="
                product.stock > 0 ? 'text-red-500 font-medium' : 'text-gray-400'
              "
            >
              {{
                product.stock > 0 ? `${product.stock} In Stock` : "Out of Stock"
              }}
            </span>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-3">
            <span class="text-4xl font-light text-gray-900"
              >${{ product.price.toFixed(2) }}</span
            >
            <span
              v-if="
                product.originalPrice && product.originalPrice > product.price
              "
              class="text-xl text-gray-400 line-through"
            >
              ${{ product.originalPrice.toFixed(2) }}
            </span>
          </div>

          <!-- Shipping & Ask -->
          <div class="flex items-center gap-6 text-sm text-gray-600">
            <button
              class="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              Shipping
            </button>
            <button
              class="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Ask About This Product
            </button>
          </div>

          <!-- Quantity Selector -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3"
              >Quantity:</label
            >
            <div class="flex items-center gap-4">
              <button
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
                class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                −
              </button>
              <input
                v-model.number="quantity"
                type="number"
                min="1"
                :max="product.stock"
                class="w-20 h-10 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                @click="increaseQuantity"
                :disabled="quantity >= product.stock"
                class="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>

          <!-- Add to Cart & Wishlist -->
          <div class="flex gap-3">
            <button
              @click="handleAddToCart"
              :disabled="product.stock === 0 || cartStore.loading"
              class="flex-1 bg-[#343434] hover:bg-gray-800 text-white py-3 px-6 rounded font-medium tracking-wider uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ cartStore.loading ? "Adding..." : "Add to Cart" }}
            </button>
            <button
              @click="handleToggleWishlist"
              :disabled="wishlistStore.loading"
              class="w-12 h-12 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              :title="isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'"
            >
              <svg
                class="w-6 h-6"
                :fill="isInWishlist ? '#e53e3e' : 'none'"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          <!-- Terms Checkbox -->
          <div class="flex items-start gap-2">
            <input
              v-model="agreedToTerms"
              type="checkbox"
              id="terms"
              class="mt-1 w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
            />
            <label for="terms" class="text-sm text-gray-600 cursor-pointer">
              I agree with the terms and conditions
            </label>
          </div>

          <!-- Buy It Now -->
          <button
            :disabled="!agreedToTerms || product.stock === 0"
            class="w-full bg-[#f5e6b3] hover:bg-[#f0d98e] text-gray-800 py-3 px-6 rounded font-medium tracking-wider uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Buy It Now
          </button>

          <!-- Payment Icons -->
          <div>
            <p class="text-sm text-gray-600 mb-3">Guaranteed safe checkout</p>
            <div class="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                alt="Visa"
                class="h-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                class="h-8"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                alt="Amex"
                class="h-8"
              />
            </div>
          </div>

          <!-- Product Description -->
          <div v-if="product.description" class="pt-6 border-t border-gray-200">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Description</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/cartStore";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useAuthStore } from "@/stores/authStore";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const authStore = useAuthStore();

const quantity = ref(1);
const agreedToTerms = ref(false);
const currentImage = ref("");

const productId = computed(() => parseInt(route.params.id));
const productNumber = computed(() => productId.value);

const product = computed(() => {
  const raw = productStore.currentProduct;
  if (!raw) return null;

  const basePrice = parseFloat(raw.price);
  return {
    id: raw.id,
    title: raw.name,
    description: raw.description,
    image: raw.image,
    hoverImage: raw.hover_image,
    category: raw.category,
    stock: raw.stock,
    price: basePrice,
    originalPrice: raw.original_price ? parseFloat(raw.original_price) : null,
    onSale: !!raw.on_sale,
    discount: raw.discount,
  };
});

const isInWishlist = computed(() =>
  wishlistStore.isInWishlist(productId.value),
);

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const increaseQuantity = () => {
  if (product.value && quantity.value < product.value.stock) {
    quantity.value++;
  }
};

const handleImageError = (e) => {
  e.target.src = "https://via.placeholder.com/600x600?text=Product+Image";
};

const handleAddToCart = async () => {
  if (!authStore.isAuthenticated) {
    router.push({ name: "login", query: { redirect: route.fullPath } });
    return;
  }
  try {
    await cartStore.addToCart(productId.value, quantity.value);
    // Optional: show success message
  } catch (error) {
    console.error("Failed to add to cart:", error);
  }
};

const handleToggleWishlist = async () => {
  if (!authStore.isAuthenticated) {
    router.push({ name: "login", query: { redirect: route.fullPath } });
    return;
  }
  try {
    if (isInWishlist.value) {
      await wishlistStore.removeFromWishlist(productId.value);
    } else {
      await wishlistStore.addToWishlist(productId.value);
    }
  } catch (error) {
    console.error("Failed to update wishlist:", error);
  }
};

onMounted(async () => {
  await productStore.getProduct(productId.value);
  if (product.value) {
    currentImage.value = product.value.image;
  }

  if (authStore.isAuthenticated) {
    wishlistStore.getWishlist().catch(() => {});
  }
});
</script>
