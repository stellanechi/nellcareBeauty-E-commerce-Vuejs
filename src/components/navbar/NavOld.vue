<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link
          to="/"
          class="text-2xl font-semibold tracking-wider text-[#343434] hover:text-gray-600 transition-colors"
        >
          NELLCARE BEAUTY
        </router-link>

        <!-- Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-gray-400 hover:text-gray-600 transition-colors text-base"
          >
            Home
          </router-link>

          <router-link
            to="/shop"
            class="text-gray-400 hover:text-gray-600 transition-colors text-base"
          >
            Shop
          </router-link>

          <!-- Catalog  -->
          <catalog />

          <!-- Blog -->
          <Blog />

          <!-- Pages  -->
          <Pages />
        </nav>

        <!-- Right Icons -->
        <Icons />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Icons from "@/components/navbar/Icons.vue";
import Catalog from "./Catalog.vue";
import Blog from "./Blog.vue";
import Pages from "./Pages.vue";

const showCatalogMenu = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
