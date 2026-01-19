<template>
  <div>
    <div class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8">
        <router-link to="/" class="text-gray-700 hover:underline text-sm"
          >Home</router-link
        >
        <span class="mx-2 text-gray-700">/</span>
        <span class="text-gray-500 text-sm">Search</span>
      </div>
    </div>
    <div class="min-h-[50vh] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <h1 class="text-center text-gray-800 text-2xl font-light mb-12">
          Search for products on our site
        </h1>

        <!-- Search Input -->
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search our store"
            class="w-full px-0 py-3 text-gray-700 placeholder-gray-400 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-500 transition-colors"
            @keyup.enter="handleSearch"
          />

          <!-- Search Icon -->
          <button
            @click="handleSearch"
            class="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <!-- Search Results  -->
        <div v-if="hasSearched" class="mt-12">
          <div v-if="searchQuery" class="text-gray-600 text-sm mb-6">
            Showing results for "{{ searchQuery }}"
          </div>

          <!--  search results here -->
          <div class="text-gray-500 text-center py-12">No results found</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const hasSearched = ref(false);

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    hasSearched.value = true;
    // search logic here
    console.log("Searching for:", searchQuery.value);
  }
};
</script>
