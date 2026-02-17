<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-[#f3f3f3] rounded-lg shadow-sm p-8 w-full max-w-lg">
      <h1 class="text-3xl font-light text-center mb-2">Login</h1>
      <p class="text-gray-600 text-center mb-8">
        Please login using account detail below.
      </p>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Email"
            required
            :disabled="authStore.loading"
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="Password"
            required
            :disabled="authStore.loading"
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div class="flex items-center justify-between mb-6">
          <button
            type="submit"
            :disabled="authStore.loading"
            class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg
              v-if="authStore.loading"
              class="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {{ authStore.loading ? "SIGNING IN..." : "SIGN IN" }}
          </button>

          <router-link
            to="/auth/reset-password"
            class="text-gray-600 hover:text-gray-900 text-sm"
          >
            Forgot your password?
          </router-link>
        </div>

        <router-link
          to="/auth/create-account"
          class="text-gray-700 hover:text-gray-900 text-sm"
        >
          Create account
        </router-link>
      </form>

      <!-- Message (success or error) -->
      <div v-if="message" class="mt-4 p-3 rounded" :class="messageClass">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { useCartStore } from "@/stores/cartStore";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const cartStore = useCartStore();

const formData = ref({
  email: "",
  password: "",
});

const message = ref("");
const messageClass = ref("");

// Mirror store errors into the existing message/messageClass pattern
watch(
  () => authStore.error,
  (error) => {
    if (error) {
      message.value = error;
      messageClass.value = "bg-red-100 text-red-700";
    }
  },
);

onMounted(() => {
  authStore.clearError();
  message.value = "";
});

onUnmounted(() => {
  authStore.clearError();
});

const handleLogin = async () => {
  // Basic validation (keep your original check)
  if (!formData.value.email || !formData.value.password) {
    message.value = "Please fill in all fields";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  message.value = "";

  try {
    await authStore.login(formData.value.email, formData.value.password);

    message.value = "Login successful!";
    messageClass.value = "bg-green-100 text-green-700";

    // Load cart in background without blocking redirect
    cartStore.getCart().catch(() => {});

    setTimeout(() => {
      formData.value.email = "";
      formData.value.password = "";
      // Redirect to intended page if coming from a protected route, otherwise home
      const redirect = route.query.redirect || "/";
      router.push(redirect);
    }, 1000);
  } catch (error) {
    // authStore.error is already set — the watcher above will display it
    console.error("Login error:", error);
  }
};
</script>
