<template>
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link
          to="/"
          class="text-sm sm:text-2xl font-semibold tracking-wider text-[#343434] hover:text-gray-600 transition-colors"
        >
          NELLCARE BEAUTY
        </router-link>

        <!-- Desktop Navigation -->
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

        <!-- Right Icons & Mobile Menu Button -->
        <div class="flex items-center gap-4">
          <Icons />

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
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
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden border-t border-gray-200 bg-white"
      >
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
          <router-link
            to="/"
            @click="closeMobileMenu"
            class="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-base"
          >
            Home
          </router-link>

          <router-link
            to="/shop"
            @click="closeMobileMenu"
            class="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-base"
          >
            Shop
          </router-link>

          <!-- Mobile Catalog -->
          <div class="px-4 py-3">
            <catalog :is-mobile="true" @close="closeMobileMenu" />
          </div>

          <!-- Mobile Blog -->
          <div class="px-4 py-3">
            <Blog :is-mobile="true" @close="closeMobileMenu" />
          </div>

          <!-- Mobile Pages -->
          <div class="px-4 py-3">
            <Pages :is-mobile="true" @close="closeMobileMenu" />
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Icons from "@/components/navbar/Icons.vue";
import Catalog from "./Catalog.vue";
import Blog from "./Blog.vue";
import Pages from "./Pages.vue";

const isMobileMenuOpen = ref(false);
const route = useRoute();

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Close mobile menu on route change
watch(
  () => route.path,
  () => {
    closeMobileMenu();
  },
);
</script>

<style scoped>
/* Fade transition for desktop menus */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide and fade transition for mobile menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>
