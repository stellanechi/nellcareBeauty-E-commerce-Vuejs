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
            >First Name</label
          >
          <input
            id="firstName"
            v-model="formData.firstName"
            type="text"
            placeholder="First Name"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

        <div class="mb-4">
          <label
            for="lastName"
            class="block text-sm font-medium text-gray-700 mb-2"
            >Last Name</label
          >
          <input
            id="lastName"
            v-model="formData.lastName"
            type="text"
            placeholder="Last Name"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />
        </div>

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

        <div class="mb-6">
          <button
            type="submit"
            class="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded transition-colors"
          >
            CREATE
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const message = ref("");
const messageClass = ref("");

const handleCreate = async () => {
  // Basic validation
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

  // Password strength check
  if (formData.value.password.length < 6) {
    message.value = "Password must be at least 6 characters long";
    messageClass.value = "bg-red-100 text-red-700";
    return;
  }

  try {
    // TODO: Replace with your actual API call
    console.log("Create account:", formData.value);

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
    message.value = "An error occurred. Please try again.";
    messageClass.value = "bg-red-100 text-red-700";
    console.error("Registration error:", error);
  }
};
</script>
