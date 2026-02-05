<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
      <h1 class="text-3xl font-light text-center mb-2">Reset Your Password</h1>
      <p class="text-gray-600 text-center mb-8">
        We will send you an email to reset your password.
      </p>

      <form @submit.prevent="handleReset">
        <div class="mb-6">
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

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded transition-colors"
          >
            SUBMIT
          </button>

          <router-link
            to="/auth/login"
            class="text-gray-600 hover:text-gray-900 text-sm"
          >
            Cancel
          </router-link>
        </div>
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
});

const message = ref("");
const messageClass = ref("");

const handleReset = async () => {
  // Basic validation
  if (!formData.value.email) {
    message.value = "Please enter your email address";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email)) {
    message.value = "Please enter a valid email address";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  try {
    // TODO: Replace with your actual API call
    console.log("Reset password for:", formData.value);

    message.value = "Password reset email sent! Check your inbox.";
    messageClass.value = "bg-green-100 text-green-700";

    setTimeout(() => {
      formData.value.email = "";
      router.push("/auth/login");
    }, 3000);
  } catch (error) {
    message.value = "An error occurred. Please try again.";
    messageClass.value = "bg-red-100 text-red-700";
    console.error("Reset password error:", error);
  }
};
</script>

<!-- <template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4">
    <div class="bg-white rounded-lg shadow-sm p-8 w-full max-w-md">
      <h1 class="text-3xl font-light text-center mb-2">Reset Your Password</h1>
      <p class="text-gray-600 text-center mb-8">
        We will send you an email to reset your password.
      </p>

      <form @submit.prevent="handleReset">
        <div class="mb-6">
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

        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded transition-colors"
          >
            SUBMIT
          </button>

          <a
            href="#"
            @click.prevent="$emit('navigate', 'login')"
            class="text-gray-600 hover:text-gray-900 text-sm"
          >
            Cancel
          </a>
        </div>
      </form>

      <div v-if="message" class="mt-4 p-3 rounded" :class="messageClass">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["navigate", "reset"]);

const formData = ref({
  email: "",
});

const message = ref("");
const messageClass = ref("");

const handleReset = () => {
  // Basic validation
  if (!formData.value.email) {
    message.value = "Please enter your email address";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email)) {
    message.value = "Please enter a valid email address";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  // Emit reset event with form data
  emit("reset", { ...formData.value });

  message.value = "Password reset email sent! Check your inbox.";
  messageClass.value = "bg-green-100 text-green-700";

  // Clear form
  setTimeout(() => {
    formData.value.email = "";
    message.value = "";
    emit("navigate", "login");
  }, 3000);
};
</script> -->
