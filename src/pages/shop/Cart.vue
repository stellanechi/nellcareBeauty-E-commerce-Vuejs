<template>
  <div class="min-h-screen bg-white">
    <NavigationBar />

    <!-- Breadcrumb -->
    <div class="bg-gray-50 border-b border-gray-200 py-4 px-6 lg:px-16">
      <p class="text-sm text-gray-500">
        <router-link to="/" class="hover:text-gray-800 transition-colors"
          >Home</router-link
        >
        <span class="mx-2">/</span>
        <span class="text-gray-800">Your Shopping Cart</span>
      </p>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-16 py-16">
      <!-- Loading State -->
      <div v-if="cartStore.loading" class="py-20">
        <div class="animate-pulse space-y-4">
          <div class="h-4 bg-gray-200 rounded w-1/4"></div>
          <div class="h-32 bg-gray-100 rounded"></div>
          <div class="h-32 bg-gray-100 rounded"></div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-else-if="!cartStore.cartItems.length" class="py-20 text-center">
        <svg
          class="w-24 h-24 mx-auto text-gray-300 mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h2 class="text-2xl font-light text-gray-900 mb-4">
          Your cart is empty
        </h2>
        <p class="text-gray-500 mb-8">Add some products to get started</p>
        <router-link
          to="/shop"
          class="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded font-medium tracking-wider uppercase text-sm transition-colors"
        >
          Continue Shopping
        </router-link>
      </div>

      <!-- Cart Table -->
      <div v-else>
        <!-- Cart Items Table -->
        <div class="overflow-x-auto mb-8">
          <table class="w-full border border-gray-200">
            <thead class="bg-white border-b border-gray-200">
              <tr>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  class="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  Total
                </th>
                <th class="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="item in cartItems"
                :key="item.id"
                class="bg-white hover:bg-gray-50 transition-colors"
              >
                <!-- Product -->
                <td class="px-6 py-6">
                  <div class="flex items-center gap-4">
                    <div class="w-24 h-24 bg-gray-50 rounded flex-shrink-0">
                      <img
                        :src="item.image || placeholder"
                        :alt="item.name"
                        class="w-full h-full object-contain p-2"
                        @error="(e) => (e.target.src = placeholder)"
                      />
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">
                        {{ item.product_number }}. {{ item.name }}
                      </p>
                    </div>
                  </div>
                </td>

                <!-- Price -->
                <td class="px-6 py-6 text-sm font-medium text-gray-900">
                  ${{ parseFloat(item.price).toFixed(2) }}
                </td>

                <!-- Quantity -->
                <td class="px-6 py-6">
                  <div class="flex items-center justify-center gap-3">
                    <button
                      @click="decreaseQuantity(item)"
                      :disabled="item.quantity <= 1 || updatingItem === item.id"
                      class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      −
                    </button>
                    <input
                      :value="item.quantity"
                      type="number"
                      min="1"
                      class="w-16 text-center border-t border-b border-gray-300 py-1 focus:outline-none"
                      readonly
                    />
                    <button
                      @click="increaseQuantity(item)"
                      :disabled="updatingItem === item.id"
                      class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      +
                    </button>
                  </div>
                </td>

                <!-- Total -->
                <td class="px-6 py-6 text-sm font-bold text-gray-900">
                  ${{ (parseFloat(item.price) * item.quantity).toFixed(2) }}
                </td>

                <!-- Remove -->
                <td class="px-6 py-6 text-right">
                  <button
                    @click="handleRemove(item.id)"
                    :disabled="removingItem === item.id"
                    class="text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                    title="Remove from cart"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12"
        >
          <button
            @click="handleUpdateCart"
            :disabled="cartStore.loading"
            class="px-8 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded font-medium tracking-wider uppercase text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ cartStore.loading ? "Updating..." : "Update Cart" }}
          </button>

          <div class="flex gap-4">
            <router-link
              to="/shop"
              class="px-8 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded font-medium tracking-wider uppercase text-sm transition-colors"
            >
              Continue Shopping
            </router-link>

            <button
              @click="handleClearCart"
              :disabled="cartStore.loading"
              class="px-8 py-3 bg-white border border-gray-300 hover:bg-red-50 hover:border-red-500 hover:text-red-600 text-gray-800 rounded font-medium tracking-wider uppercase text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <!-- Cart Totals -->
        <div class="max-w-md ml-auto">
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-6">
              Cart Totals
            </h3>

            <div class="space-y-4 mb-6">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-semibold text-gray-900"
                  >${{ cartStore.cartTotal.toFixed(2) }}</span
                >
              </div>

              <div
                class="flex items-center justify-between text-sm border-t border-gray-200 pt-4"
              >
                <span class="text-gray-600">Shipping</span>
                <span class="font-semibold text-gray-900">$20.00</span>
              </div>

              <div
                class="flex items-center justify-between text-base border-t border-gray-200 pt-4"
              >
                <span class="font-semibold text-gray-900">Total</span>
                <span class="text-2xl font-bold text-gray-900"
                  >${{ (cartStore.cartTotal + 20).toFixed(2) }}</span
                >
              </div>
            </div>

            <router-link
              to="/checkout"
              class="block w-full text-center px-8 py-3 bg-gray-900 hover:bg-black text-white rounded font-medium tracking-wider uppercase text-sm transition-colors"
            >
              Proceed to Checkout
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cartStore";
import { useAuthStore } from "@/stores/authStore";
import NavigationBar from "@/components/navbar/NavigationBar.vue";

const router = useRouter();
const cartStore = useCartStore();
const authStore = useAuthStore();

const placeholder = "https://via.placeholder.com/100x100?text=Product";
const updatingItem = ref(null);
const removingItem = ref(null);

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

const increaseQuantity = async (item) => {
  updatingItem.value = item.id;
  try {
    await cartStore.updateCartItem(item.id, "increment");
  } catch (error) {
    console.error("Failed to update quantity:", error);
  } finally {
    updatingItem.value = null;
  }
};

const decreaseQuantity = async (item) => {
  if (item.quantity <= 1) return;

  updatingItem.value = item.id;
  try {
    await cartStore.updateCartItem(item.id, "decrement");
  } catch (error) {
    console.error("Failed to update quantity:", error);
  } finally {
    updatingItem.value = null;
  }
};

const handleRemove = async (cartItemId) => {
  if (!confirm("Remove this item from cart?")) return;

  removingItem.value = cartItemId;
  try {
    await cartStore.removeFromCart(cartItemId);
  } catch (error) {
    console.error("Failed to remove item:", error);
  } finally {
    removingItem.value = null;
  }
};

const handleUpdateCart = async () => {
  try {
    await cartStore.getCart();
  } catch (error) {
    console.error("Failed to update cart:", error);
  }
};

const handleClearCart = async () => {
  if (!confirm("Are you sure you want to clear your cart?")) return;

  try {
    // Remove all items one by one
    for (const item of cartItems.value) {
      await cartStore.removeFromCart(item.id);
    }
  } catch (error) {
    console.error("Failed to clear cart:", error);
  }
};

onMounted(async () => {
  if (!authStore.isAuthenticated) {
    router.push({ name: "login", query: { redirect: "/cart" } });
    return;
  }

  await cartStore.getCart();
});
</script>
