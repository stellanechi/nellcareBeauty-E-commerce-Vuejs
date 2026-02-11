<template>
  <div>
    <!-- Blog -->
    <div
      class="relative"
      @mouseenter="showBlogMenu = true"
      @mouseleave="showBlogMenu = false"
    >
      <router-link
        to="/blog"
        class="text-gray-400 hover:text-gray-600 transition-colors text-sm inline-flex items-center"
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

      <!-- Blog Dropdown Menu -->
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
  </div>
</template>

<script setup>
import { ref } from "vue";

const showBlogMenu = ref(false);
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
