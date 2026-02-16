<template>
  <div>
    <!-- Desktop Version -->
    <div
      v-if="!isMobile"
      class="relative"
      @mouseenter="showBlogMenu = true"
      @mouseleave="showBlogMenu = false"
    >
      <router-link
        to="/blog"
        class="text-gray-400 hover:text-gray-600 transition-colors text-base inline-flex items-center"
      >
        Blog
        <svg
          class="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </router-link>

      <!-- Desktop Dropdown Menu -->
      <transition name="fade">
        <div
          v-show="showBlogMenu"
          class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64"
        >
          <div
            class="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden"
          >
            <ul class="py-2">
              <li>
                <router-link
                  to="/blog/standard-layout"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  Standard Layout
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/blog/grid-layout"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  Grid layout
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/blog/list-layout"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  List Layout
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/blog/masonry-layout"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  Masonry Layout
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </router-link>
              </li>
              <li>
                <router-link
                  to="/blog/single-post-layout"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  Single Post Layout
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>

    <!-- Mobile Version -->
    <div v-else class="w-full">
      <button
        @click="toggleMobileBlog"
        class="w-full text-left text-gray-600 hover:text-gray-900 transition-colors text-base flex items-center justify-between py-1"
      >
        Blog
        <svg
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': showMobileBlog }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <!-- Mobile Submenu -->
      <transition name="slide-down">
        <ul v-if="showMobileBlog" class="mt-2 ml-4 space-y-1">
          <li>
            <router-link
              to="/blog/standard-layout"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Standard Layout
            </router-link>
          </li>
          <li>
            <router-link
              to="/blog/grid-layout"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Grid layout
            </router-link>
          </li>
          <li>
            <router-link
              to="/blog/list-layout"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              List Layout
            </router-link>
          </li>
          <li>
            <router-link
              to="/blog/masonry-layout"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Masonry Layout
            </router-link>
          </li>
          <li>
            <router-link
              to="/blog/single-post-layout"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Single Post Layout
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const showBlogMenu = ref(false);
const showMobileBlog = ref(false);

const toggleMobileBlog = () => {
  showMobileBlog.value = !showMobileBlog.value;
};

const handleMobileClick = () => {
  emit("close");
};
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

.slide-down-enter-active {
  transition: all 0.3s ease-out;
}

.slide-down-leave-active {
  transition: all 0.2s ease-in;
}

.slide-down-enter-from {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.slide-down-enter-to {
  opacity: 1;
  max-height: 500px;
}

.slide-down-leave-from {
  opacity: 1;
  max-height: 500px;
}

.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>
