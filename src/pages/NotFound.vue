<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-6">
    <div class="max-w-2xl w-full text-center">
      <!-- 404 Large Number -->
      <div class="mb-8">
        <h1
          class="text-[6rem] md:text-[6rem] font-light text-gray-200 leading-none select-none"
        >
          404
        </h1>
      </div>

      <!-- Error Message -->
      <div class="mb-8">
        <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          The page you're looking is under development.
        </h2>
        <!-- <p class="text-gray-500 text-lg max-w-md mx-auto">
          The page you're looking is under development.
        </p> -->
      </div>

      <!-- Illustration -->
      <div class="mb-12">
        <svg
          class="w-28 h-28 mx-auto text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          @click="goBack"
          class="px-8 py-3 bg-white border-2 border-gray-800 text-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors font-medium tracking-wide uppercase text-sm"
        >
          Go Back
        </button>
        <router-link
          to="/"
          class="px-8 py-3 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors font-medium tracking-wide uppercase text-sm"
        >
          Back to Home
        </router-link>
      </div>

      <!-- Helpful Links -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-500 mb-4">You might be looking for:</p>
        <div class="flex flex-wrap gap-4 justify-center text-sm">
          <router-link
            to="/shop"
            class="text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-2"
          >
            Shop
          </router-link>
          <router-link
            to="/wishlist"
            class="text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-2"
          >
            Wishlist
          </router-link>
          <router-link
            to="/search"
            class="text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-2"
          >
            Search
          </router-link>
          <router-link
            to="/sales"
            class="text-gray-600 hover:text-gray-900 transition-colors underline underline-offset-2"
          >
            Sales
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  if (window.history.length > 2) {
    router.back();
  } else {
    router.push("/");
  }
};
</script>
