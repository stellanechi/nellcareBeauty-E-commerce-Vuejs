<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
      <h1 class="text-3xl font-light text-center mb-2">Login</h1>
      <p class="text-gray-600 text-center mb-8">
        Please login using account detail below.
      </p>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Email</label
          >
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Password</label
          >
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="Password"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

        <div class="flex items-center justify-between mb-6">
          <button
            type="submit"
            class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded transition-colors"
          >
            SIGN IN
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

      <div v-if="message" class="mt-4 p-3 rounded" :class="messageClass">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  email: "",
  password: "",
});

const message = ref("");
const messageClass = ref("");

const handleLogin = async () => {
  // Basic validation
  if (!formData.value.email || !formData.value.password) {
    message.value = "Please fill in all fields";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  try {
    // TODO: Replace with your actual API call
    console.log("Login attempt:", formData.value);

    // Simulate successful login
    message.value = "Login successful!";
    messageClass.value = "bg-green-100 text-green-700";

    setTimeout(() => {
      formData.value.email = "";
      formData.value.password = "";
      router.push("/"); // Redirect to home page
    }, 1000);
  } catch (error) {
    message.value = "An error occurred. Please try again.";
    messageClass.value = "bg-red-100 text-red-700";
    console.error("Login error:", error);
  }
};
</script>

<!-- <template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
      <h1 class="text-3xl font-light text-center mb-2">Login</h1>
      <p class="text-gray-600 text-center mb-8">
        Please login using account detail below.
      </p>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Email</label
          >
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

        <div class="mb-6">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Password</label
          >
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="Password"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

        <div class="flex items-center justify-between mb-6">
          <button
            type="submit"
            class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded transition-colors"
          >
            SIGN IN
          </button>

          <a
            href="#"
            @click.prevent="$emit('navigate', 'reset')"
            class="text-gray-600 hover:text-gray-900 text-sm"
          >
            Forgot your password?
          </a>
        </div>

        <a
          href="#"
          @click.prevent="$emit('navigate', 'create')"
          class="text-gray-700 hover:text-gray-900 text-sm"
        >
          Create account
        </a>
      </form>

      <div v-if="message" class="mt-4 p-3 rounded" :class="messageClass">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["navigate", "login"]);

const formData = ref({
  email: "",
  password: "",
});

const message = ref("");
const messageClass = ref("");

const handleLogin = () => {
  // Basic validation
  if (!formData.value.email || !formData.value.password) {
    message.value = "Please fill in all fields";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  // Emit login event with form data
  emit("login", { ...formData.value });

  message.value = "Login successful!";
  messageClass.value = "bg-green-100 text-green-700";

  // Clear form
  setTimeout(() => {
    formData.value.email = "";
    formData.value.password = "";
    message.value = "";
  }, 2000);
};
</script> -->
