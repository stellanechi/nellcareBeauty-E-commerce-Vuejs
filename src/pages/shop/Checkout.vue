<template>
  <div class="min-h-screen bg-white">
    <NavigationBar />

    <!-- Breadcrumb -->
    <!-- <div class="container mx-auto py-6">
      <nav class="text-sm text-gray-500" aria-label="Breadcrumb">
        <ol class="list-reset flex items-center gap-2">
          <li>
            <router-link to="/" class="text-blue-600 hover:text-blue-800"
              >Home</router-link
            >
          </li>
          <li>
            <span class="mx-2 text-gray-400">›</span>
          </li>
          <li class="text-gray-900">Checkout</li>
        </ol>
      </nav>
    </div> -->

    <!-- Main Content -->
    <div>
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <!-- Left Column: Form -->
          <div class="px-6 lg:px-16 py-8 lg:py-12 border-r border-gray-200">
            <!-- Breadcrumb -->
            <div class="flex items-center gap-2 text-sm mb-8">
              <router-link to="/cart" class="text-blue-600 hover:text-blue-800"
                >Cart</router-link
              >
              <span class="text-gray-400">›</span>
              <span class="text-gray-900">Information</span>
              <span class="text-gray-400">›</span>
              <span class="text-gray-400">Shipping</span>
              <span class="text-gray-400">›</span>
              <span class="text-gray-400">Payment</span>
            </div>

            <!-- Contact Section -->
            <div class="mb-8">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-lg font-medium text-gray-900">Contact</h2>
                <router-link
                  v-if="!authStore.isAuthenticated"
                  to="/auth/login"
                  class="text-sm text-blue-600 hover:text-blue-800"
                >
                  Sign in
                </router-link>
              </div>

              <div v-if="authStore.isAuthenticated" class="mb-4">
                <input
                  type="text"
                  :value="authStore.user?.email"
                  disabled
                  class="w-full px-4 py-3 border border-gray-300 rounded bg-gray-50 text-gray-700"
                />
              </div>
              <div v-else>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Email or mobile phone number"
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div class="mt-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    v-model="form.emailNewsOffers"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span class="text-sm text-gray-700"
                    >Email me with news and offers</span
                  >
                </label>
              </div>
            </div>

            <!-- Delivery Section -->
            <div class="mb-8">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Delivery</h2>

              <!-- Country/Region -->
              <div class="mb-4">
                <select
                  v-model="form.country"
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Country/Region</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="South Africa">South Africa</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>

              <!-- First Name & Last Name -->
              <div class="grid grid-cols-2 gap-4 mb-4">
                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="First name (optional)"
                  class="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Last name"
                  class="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <!-- Address -->
              <div class="mb-4">
                <input
                  v-model="form.address"
                  type="text"
                  placeholder="Address"
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <!-- Apartment -->
              <div class="mb-4">
                <input
                  v-model="form.apartment"
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <!-- City, State, Postal Code -->
              <div class="grid grid-cols-3 gap-4 mb-4">
                <input
                  v-model="form.city"
                  type="text"
                  placeholder="City"
                  class="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <select
                  v-model="form.state"
                  class="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">State</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                </select>
                <input
                  v-model="form.postalCode"
                  type="text"
                  placeholder="Postal code (optional)"
                  class="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <!-- Save Info Checkbox -->
              <div class="mt-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    v-model="form.saveInfo"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span class="text-sm text-gray-700"
                    >Save this information for next time</span
                  >
                </label>
              </div>
            </div>

            <!-- Shipping Method Section -->
            <div v-if="showShipping" class="mb-8">
              <h2 class="text-lg font-medium text-gray-900 mb-4">
                Shipping method
              </h2>

              <div
                class="border-2 border-gray-800 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                @click="form.shippingMethod = 'international'"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-5 h-5 rounded-full border-2 border-gray-800 flex items-center justify-center"
                  >
                    <div
                      v-if="form.shippingMethod === 'international'"
                      class="w-3 h-3 rounded-full bg-gray-800"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-900"
                    >International Shipping</span
                  >
                </div>
                <span class="text-sm font-medium text-gray-900">$20.00</span>
              </div>
            </div>

            <!-- Payment Section -->
            <div v-if="showPayment" class="mb-8">
              <h2 class="text-lg font-medium text-gray-900 mb-2">Payment</h2>
              <p class="text-sm text-gray-500 mb-4">
                All transactions are secure and encrypted.
              </p>

              <!-- Credit Card Option -->
              <div class="border-2 border-gray-800 rounded-t-lg">
                <div
                  class="p-4 flex items-center justify-between cursor-pointer"
                  @click="form.paymentMethod = 'credit_card'"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-5 h-5 rounded-full border-2 border-gray-800 flex items-center justify-center"
                    >
                      <div
                        v-if="form.paymentMethod === 'credit_card'"
                        class="w-3 h-3 rounded-full bg-gray-800"
                      ></div>
                    </div>
                    <span class="text-sm font-medium text-gray-900"
                      >Credit card</span
                    >
                  </div>
                  <div class="flex items-center gap-1">
                    <div
                      class="w-8 h-6 bg-yellow-400 rounded flex items-center justify-center"
                    >
                      <span class="text-white font-bold text-xs">B</span>
                    </div>
                  </div>
                </div>

                <!-- Credit Card Fields -->
                <div
                  v-if="form.paymentMethod === 'credit_card'"
                  class="p-4 bg-gray-50 border-t border-gray-300 space-y-4"
                >
                  <div class="relative">
                    <input
                      v-model="form.cardNumber"
                      type="text"
                      placeholder="Card number"
                      maxlength="19"
                      class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      @input="formatCardNumber"
                    />
                    <svg
                      class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <input
                      v-model="form.expirationDate"
                      type="text"
                      placeholder="Expiration date (MM / YY)"
                      maxlength="7"
                      class="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      @input="formatExpiryDate"
                    />
                    <div class="relative">
                      <input
                        v-model="form.securityCode"
                        type="text"
                        placeholder="Security code"
                        maxlength="4"
                        class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <input
                    v-model="form.nameOnCard"
                    type="text"
                    placeholder="Name on card"
                    class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      v-model="form.useShippingAsBilling"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span class="text-sm text-gray-700"
                      >Use shipping address as billing address</span
                    >
                  </label>
                </div>
              </div>

              <!-- Cash on Delivery Option -->
              <div class="border-2 border-gray-300 border-t-0 rounded-b-lg">
                <div
                  class="p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                  @click="form.paymentMethod = 'cod'"
                >
                  <div
                    class="w-5 h-5 rounded-full border-2 border-gray-800 flex items-center justify-center"
                  >
                    <div
                      v-if="form.paymentMethod === 'cod'"
                      class="w-3 h-3 rounded-full bg-gray-800"
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-900"
                    >Cash on Delivery (COD)</span
                  >
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center justify-between pt-6">
              <router-link
                to="/cart"
                class="text-sm text-blue-600 hover:text-blue-800"
              >
                ‹ Return to cart
              </router-link>

              <button
                v-if="!showShipping"
                @click="continueToShipping"
                class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium text-sm transition-colors"
              >
                Continue to shipping
              </button>

              <button
                v-else-if="!showPayment"
                @click="continueToPayment"
                class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium text-sm transition-colors"
              >
                Continue to payment
              </button>

              <button
                v-else
                @click="handlePayNow"
                :disabled="processing"
                class="px-8 py-3 bg-gray-900 hover:bg-black text-white rounded font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ processing ? "Processing..." : "Pay now" }}
              </button>
            </div>
          </div>

          <!-- Right Column: Order Summary -->
          <div class="px-6 lg:px-16 py-8 lg:py-12 bg-gray-50">
            <!-- Cart Items -->
            <div class="space-y-4 mb-6">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="flex items-center gap-4"
              >
                <div class="relative flex-shrink-0">
                  <div
                    class="w-16 h-16 bg-white rounded border border-gray-200 p-1"
                  >
                    <img
                      :src="item.image || placeholder"
                      :alt="item.name"
                      class="w-full h-full object-contain"
                      @error="(e) => (e.target.src = placeholder)"
                    />
                  </div>
                  <span
                    class="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center"
                  >
                    {{ item.quantity }}
                  </span>
                </div>

                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">
                    {{ item.product_number }}. {{ item.name }}
                  </p>
                </div>

                <p class="text-sm font-medium text-gray-900">
                  ${{ (parseFloat(item.price) * item.quantity).toFixed(2) }}
                </p>
              </div>
            </div>

            <!-- Pricing Summary -->
            <div class="border-t border-gray-200 pt-4 space-y-3">
              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Subtotal</span>
                <span class="font-medium text-gray-900"
                  >${{ cartStore.cartTotal.toFixed(2) }}</span
                >
              </div>

              <div class="flex items-center justify-between text-sm">
                <span class="text-gray-600">Shipping</span>
                <span class="font-medium text-gray-900">$20.00</span>
              </div>
            </div>

            <!-- Total -->
            <div class="border-t border-gray-200 mt-4 pt-4">
              <div class="flex items-center justify-between">
                <span class="text-lg font-medium text-gray-900">Total</span>
                <div class="text-right">
                  <span class="text-xs text-gray-500 block">USD</span>
                  <span class="text-2xl font-semibold text-gray-900">
                    ${{ (cartStore.cartTotal + 20).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>
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

const showShipping = ref(false);
const showPayment = ref(false);
const processing = ref(false);

const form = ref({
  email: "",
  emailNewsOffers: false,
  country: "Nigeria",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  state: "Rivers",
  postalCode: "",
  saveInfo: false,
  shippingMethod: "international",
  paymentMethod: "credit_card",
  cardNumber: "",
  expirationDate: "",
  securityCode: "",
  nameOnCard: "",
  useShippingAsBilling: true,
});

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

const formatCardNumber = (e) => {
  let value = e.target.value.replace(/\s/g, "");
  let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
  form.value.cardNumber = formattedValue;
};

const formatExpiryDate = (e) => {
  let value = e.target.value.replace(/\s/g, "").replace("/", "");
  if (value.length >= 2) {
    form.value.expirationDate = value.slice(0, 2) + " / " + value.slice(2, 4);
  } else {
    form.value.expirationDate = value;
  }
};

const continueToShipping = () => {
  // Validate delivery form
  if (
    !form.value.country ||
    !form.value.lastName ||
    !form.value.address ||
    !form.value.city ||
    !form.value.state
  ) {
    alert("Please fill in all required fields");
    return;
  }
  showShipping.value = true;
};

const continueToPayment = () => {
  showPayment.value = true;
};

const handlePayNow = async () => {
  // Validate payment form
  if (form.value.paymentMethod === "credit_card") {
    if (
      !form.value.cardNumber ||
      !form.value.expirationDate ||
      !form.value.securityCode ||
      !form.value.nameOnCard
    ) {
      alert("Please fill in all payment fields");
      return;
    }
  }

  processing.value = true;

  try {
    // Here you would integrate with your payment processor
    // For now, we'll simulate a successful payment
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart and redirect to success page
    await cartStore.clearCart();
    router.push("/order-success");
  } catch (error) {
    console.error("Payment failed:", error);
    alert("Payment failed. Please try again.");
  } finally {
    processing.value = false;
  }
};

onMounted(async () => {
  if (!authStore.isAuthenticated) {
    router.push({ name: "login", query: { redirect: "/checkout" } });
    return;
  }

  if (cartStore.cartItems.length === 0) {
    await cartStore.getCart();
    if (cartStore.cartItems.length === 0) {
      router.push("/cart");
    }
  }

  // Pre-fill email if authenticated
  if (authStore.user?.email) {
    form.value.email = authStore.user.email;
  }
});
</script>
