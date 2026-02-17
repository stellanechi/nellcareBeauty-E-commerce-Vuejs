<template>
  <div>
    <NavigationBar />
  </div>
  <div class="min-[2rem] bg-white">
    <!-- Breadcrumb -->
    <div class="bg-gray-50 border-b border-gray-200 py-4 px-6 lg:px-16">
      <p class="text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-800 transition-colors"
          >Home</router-link
        >
        <span class="mx-2">/</span>
        <span class="text-gray-800">Wishlist</span>
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-16 py-16">
      <!-- Loading State -->
      <div v-if="wishlistStore.loading" class="py-20">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <div v-for="n in 4" :key="n" class="animate-pulse">
            <div class="bg-gray-100 rounded aspect-square mb-3" />
            <div class="h-4 bg-gray-100 rounded w-3/4 mb-2" />
            <div class="h-4 bg-gray-100 rounded w-1/3" />
          </div>
        </div>
      </div>

      <!-- Empty Wishlist State -->
      <div v-else-if="!wishlistStore.wishlistItems.length" class="py-20">
        <h1 class="text-4xl font-light text-gray-800 mb-3">
          Your wishlist is currently empty!
        </h1>
        <p class="text-gray-500 text-sm">
          Continue browsing
          <router-link
            to="/shop"
            class="font-semibold text-gray-800 hover:text-gray-600 transition-colors underline underline-offset-2"
          >
            here </router-link
          >.
        </p>
      </div>

      <!-- Populated Wishlist -->
      <div v-else>
        <div class="flex items-center justify-between mb-10">
          <h1 class="text-3xl font-light text-gray-800">
            My Wishlist
            <span class="text-lg text-gray-400 font-normal ml-2">
              ({{ wishlistStore.wishlistCount }} item{{
                wishlistStore.wishlistCount !== 1 ? "s" : ""
              }})
            </span>
          </h1>
          <button
            @click="clearAll"
            class="text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            Clear all
          </button>
        </div>

        <!-- Wishlist Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          <div
            v-for="item in wishlistItems"
            :key="item.id"
            class="group relative flex flex-col"
          >
            <!-- Remove Button -->
            <button
              @click="removeItem(item.product_id ?? item.id)"
              class="absolute top-3 right-3 z-10 w-7 h-7 bg-white rounded-full shadow flex items-center justify-center text-gray-400 hover:text-red-500 hover:shadow-md transition-all opacity-0 group-hover:opacity-100"
              title="Remove from wishlist"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Product Image -->
            <div
              class="bg-[#f2f2f2] rounded-lg overflow-hidden aspect-square mb-4 relative cursor-pointer"
              @click="goToProduct(item)"
            >
              <img
                :src="item.image || placeholder"
                :alt="item.name || item.title"
                class="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                @error="(e) => (e.target.src = placeholder)"
              />
            </div>

            <!-- Product Info -->
            <div class="flex flex-col flex-1">
              <h3
                class="text-sm font-medium text-gray-800 mb-1 line-clamp-2 cursor-pointer hover:text-gray-600 transition-colors"
                @click="goToProduct(item)"
              >
                {{ item.name || item.title }}
              </h3>

              <p class="text-base font-bold text-gray-900 mb-3">
                ${{ parseFloat(item.price).toFixed(2) }}
              </p>

              <!-- Add to Cart -->
              <button
                @click="handleAddToCart(item)"
                :disabled="cartStore.loading"
                class="mt-auto w-full py-2.5 px-4 bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium tracking-widest uppercase rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ cartStore.loading ? "Adding..." : "Add to Cart" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";
import { useAuthStore } from "@/stores/authStore";
import NavigationBar from "@/components/navbar/NavigationBar.vue";

const router = useRouter();
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const authStore = useAuthStore();

const placeholder = "https://via.placeholder.com/400x400?text=Product";

// Normalize wishlist items — API may nest product under item.product or flat
const wishlistItems = computed(() =>
  wishlistStore.wishlistItems.map((item) => {
    const product = item.product ?? item;
    return {
      id: item.id,
      product_id: item.product_id ?? product.id,
      name: product.name ?? product.title,
      price: product.price,
      image: product.image,
      category: product.category,
    };
  }),
);

const removeItem = async (productId) => {
  try {
    await wishlistStore.removeFromWishlist(productId);
  } catch (error) {
    console.error("Failed to remove from wishlist:", error);
  }
};

const clearAll = async () => {
  for (const item of wishlistItems.value) {
    await wishlistStore.removeFromWishlist(item.product_id);
  }
};

const handleAddToCart = async (item) => {
  if (!authStore.isAuthenticated) {
    router.push({ name: "login", query: { redirect: "/wishlist" } });
    return;
  }
  try {
    await cartStore.addToCart(item.product_id, 1);
  } catch (error) {
    console.error("Failed to add to cart:", error);
  }
};

const goToProduct = (item) => {
  router.push(`/product/${item.product_id}`);
};

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await wishlistStore.getWishlist();
  }
});
</script>
