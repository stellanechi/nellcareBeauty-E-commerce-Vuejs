<template>
  <!-- Backdrop -->
  <Transition
    enter-active-class="transition-opacity ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      @click="close"
      class="fixed inset-0 z-40"
      style="background-color: rgba(0, 0, 0, 0.5)"
    />
  </Transition>

  <!-- Sidebar -->
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="isOpen"
      class="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between px-6 py-4 border-b border-gray-200"
      >
        <h2 class="text-xl font-light text-gray-900">Cart</h2>
        <button
          @click="close"
          class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            class="w-6 h-6"
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
      </div>

      <!-- Breadcrumb -->
      <div class="px-6 py-3 bg-gray-50 border-b border-gray-200">
        <p class="text-xs text-gray-500">
          <router-link
            to="/"
            class="hover:text-gray-800 transition-colors underline"
            >Home</router-link
          >
          <span class="mx-1">/</span>
          <span class="text-gray-800">Cart</span>
        </p>
      </div>

      <!-- Cart Items -->
      <div class="flex-1 overflow-y-auto px-6 py-4">
        <!-- Loading State -->
        <div v-if="cartStore.loading" class="space-y-4">
          <div v-for="n in 2" :key="n" class="flex gap-4 animate-pulse">
            <div class="w-20 h-20 bg-gray-100 rounded" />
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-gray-100 rounded w-3/4" />
              <div class="h-4 bg-gray-100 rounded w-1/4" />
            </div>
          </div>
        </div>

        <!-- Empty Cart -->
        <div v-else-if="!cartStore.cartItems.length" class="text-center py-12">
          <svg
            class="w-16 h-16 mx-auto text-gray-300 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <p class="text-gray-500 mb-4">Your cart is empty</p>
          <button
            @click="close"
            class="text-sm text-gray-800 underline hover:text-gray-600"
          >
            Continue shopping
          </button>
        </div>

        <!-- Cart Items List -->
        <div v-else class="space-y-4">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
          >
            <!-- Remove Button -->
            <button
              @click="handleRemove(item.id)"
              class="self-start text-gray-400 hover:text-red-500 transition-colors"
              title="Remove item"
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
            <div class="w-20 h-20 bg-gray-50 rounded flex-shrink-0">
              <img
                :src="item.image || placeholder"
                :alt="item.name"
                class="w-full h-full object-contain p-2"
                @error="(e) => (e.target.src = placeholder)"
              />
            </div>

            <!-- Product Info -->
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                {{ item.product_number }}. {{ item.name }}
              </h3>
              <p class="text-sm text-gray-500 mb-2">
                {{ item.quantity }} x
                <span class="font-semibold text-gray-900"
                  >${{ parseFloat(item.price).toFixed(2) }}</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        v-if="cartStore.cartItems.length"
        class="border-t border-gray-200 px-6 py-4 space-y-4"
      >
        <!-- Total -->
        <div class="flex items-center justify-between text-lg">
          <span class="font-medium text-gray-900">Total:</span>
          <span class="font-bold text-gray-900"
            >${{ cartStore.cartTotal.toFixed(2) }}</span
          >
        </div>

        <!-- Terms Checkbox -->
        <div class="flex items-start gap-2">
          <input
            v-model="agreedToTerms"
            type="checkbox"
            id="cart-terms"
            class="mt-1 w-4 h-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
          />
          <label for="cart-terms" class="text-xs text-gray-600 cursor-pointer">
            I agree with the terms and conditions
          </label>
        </div>

        <!-- Checkout Button -->
        <button
          @click="handleCheckout"
          :disabled="!agreedToTerms || !authStore.isAuthenticated"
          class="w-full bg-[#ef9a9a] hover:bg-[#e57373] text-white py-3 rounded font-medium tracking-wider uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Checkout
        </button>

        <!-- View Cart Button -->
        <button
          @click="goToCart"
          class="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded font-medium tracking-wider uppercase transition-colors"
        >
          View Cart
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cartStore";
import { useAuthStore } from "@/stores/authStore";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const router = useRouter();
const cartStore = useCartStore();
const authStore = useAuthStore();

const agreedToTerms = ref(false);
const placeholder = "https://via.placeholder.com/100x100?text=Product";

// Load cart whenever sidebar opens
watch(
  () => props.isOpen,
  async (isOpen) => {
    if (isOpen && authStore.isAuthenticated) {
      try {
        await cartStore.getCart();
      } catch (error) {
        console.error("Failed to load cart:", error);
      }
    }
  },
  { immediate: true },
);

const cartItems = computed(() =>
  cartStore.cartItems.map((item) => {
    const product = item.product ?? item;
    return {
      id: item.id,
      product_id: item.product_id ?? product.id,
      product_number: item.product_id ?? product.id,
      name: product.name ?? product.title,
      price: product.price,
      quantity: item.quantity,
      image: product.image,
    };
  }),
);

const close = () => {
  emit("close");
};

const handleRemove = async (cartItemId) => {
  try {
    await cartStore.removeFromCart(cartItemId);
  } catch (error) {
    console.error("Failed to remove item:", error);
  }
};

const handleCheckout = () => {
  if (!authStore.isAuthenticated) {
    close();
    router.push({ name: "login", query: { redirect: "/checkout" } });
    return;
  }
  close();
  router.push("/checkout");
};

const goToCart = () => {
  close();
  router.push("/cart");
};
</script>
