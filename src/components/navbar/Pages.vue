<template>
  <div>
    <!-- Pages -->
    <div
      class="relative"
      @mouseenter="showPagesMenu = true"
      @mouseleave="showPagesMenu = false"
    >
      <router-link
        to="/pages"
        class="text-gray-400 hover:text-gray-600 transition-colors text-base inline-flex items-center"
      >
        Pages
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

      <!-- Pages Dropdown Menu -->
      <transition name="fade">
        <div
          v-show="showPagesMenu"
          class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64"
        >
          <div
            class="bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden"
          >
            <ul class="py-2">
              <li>
                <router-link
                  to="/pages/brand"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  Brand
                  <span
                    class="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded"
                    >NEW</span
                  >
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/about-us"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm block hover:bg-gray-50 transition-colors"
                >
                  About Us
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/about-us-2"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm block hover:bg-gray-50 transition-colors"
                >
                  About Us 2
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/contact-us"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm block hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/faq"
                  class="px-6 py-3 text-gray-600 hover:text-gray-900 text-sm block hover:bg-gray-50 transition-colors"
                >
                  Faq
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/team"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm block hover:bg-gray-50 transition-colors"
                >
                  Team
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/icon-box"
                  class="px-6 py-3 text-gray-600 hover:text-gray-900 text-sm block hover:bg-gray-50 transition-colors"
                >
                  Icon Box
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/mailchimp"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm block hover:bg-gray-50 transition-colors"
                >
                  Mailchimp
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/typography"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm block hover:bg-gray-50 transition-colors"
                >
                  Typography
                </router-link>
              </li>
              <li>
                <router-link
                  to="/pages/404"
                  class="px-6 py-3 text-gray-400 hover:text-gray-600 text-sm block hover:bg-gray-50 transition-colors"
                >
                  404
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

const showPagesMenu = ref(false);
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
