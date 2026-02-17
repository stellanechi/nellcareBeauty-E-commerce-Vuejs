<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-[#f3f3f3] rounded-lg shadow-sm p-8 w-full max-w-md">
      <h1 class="text-3xl font-light text-center mb-2">Create Account</h1>
      <p class="text-gray-600 text-center mb-8">
        Please Register using account detail below.
      </p>

      <form @submit.prevent="handleCreate">
        <div class="mb-4">
          <label
            for="firstName"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            First Name
          </label>
          <input
            id="firstName"
            v-model="formData.firstName"
            type="text"
            placeholder="First Name"
            required
            :disabled="authStore.loading"
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div class="mb-4">
          <label
            for="lastName"
            class="block text-sm font-medium text-gray-700 mb-2"
          >
            Last Name
          </label>
          <input
            id="lastName"
            v-model="formData.lastName"
            type="text"
            placeholder="Last Name"
            required
            :disabled="authStore.loading"
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

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

        <div class="mb-6">
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
            {{ authStore.loading ? "CREATING..." : "CREATE" }}
          </button>
        </div>

        <router-link
          to="/auth/login"
          class="text-gray-700 hover:text-gray-900 text-sm"
        >
          Return to Store
        </router-link>
      </form>

      <div v-if="message" class="mt-4 p-3 rounded" :class="messageClass">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const formData = ref({
  firstName: "",
  lastName: "",
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

const handleCreate = async () => {
  // Basic validation (keep your original checks)
  if (
    !formData.value.firstName ||
    !formData.value.lastName ||
    !formData.value.email ||
    !formData.value.password
  ) {
    message.value = "Please fill in all fields";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  // Password strength check (keep your original check)
  if (formData.value.password.length < 6) {
    message.value = "Password must be at least 6 characters long";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  message.value = "";

  try {
    // Combine first and last name for the API's `name` field
    await authStore.register({
      name: `${formData.value.firstName} ${formData.value.lastName}`,
      email: formData.value.email,
      password: formData.value.password,
      // API requires these fields — using safe defaults if not collected
      phone_number: "",
      address: "",
    });

    // Success — same UX as your original
    message.value = "Account created successfully!";
    messageClass.value = "bg-green-100 text-green-700";

    setTimeout(() => {
      formData.value.firstName = "";
      formData.value.lastName = "";
      formData.value.email = "";
      formData.value.password = "";
      router.push("/auth/login");
    }, 2000);
  } catch (error) {
    console.error("Registration error:", error);
  }
};
</script>
