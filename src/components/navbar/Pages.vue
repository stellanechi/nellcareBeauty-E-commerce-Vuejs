<template>
  <div>
    <!-- Desktop Version -->
    <div
      v-if="!isMobile"
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

      <!-- Desktop Dropdown Menu -->
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

    <!-- Mobile Version -->
    <div v-else class="w-full">
      <button
        @click="toggleMobilePages"
        class="w-full text-left text-gray-600 hover:text-gray-900 transition-colors text-base flex items-center justify-between py-1"
      >
        Pages
        <svg
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': showMobilePages }"
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
        <ul v-if="showMobilePages" class="mt-2 ml-4 space-y-1">
          <li>
            <router-link
              to="/pages/brand"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm flex items-center gap-2"
            >
              Brand
              <span class="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded"
                >NEW</span
              >
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/about-us"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              About Us
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/about-us-2"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              About Us 2
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/contact-us"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Contact Us
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/faq"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Faq
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/team"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Team
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/icon-box"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Icon Box
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/mailchimp"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Mailchimp
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/typography"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              Typography
            </router-link>
          </li>
          <li>
            <router-link
              to="/pages/404"
              @click="handleMobileClick"
              class="block px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm"
            >
              404
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

const showPagesMenu = ref(false);
const showMobilePages = ref(false);

const toggleMobilePages = () => {
  showMobilePages.value = !showMobilePages.value;
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
  max-height: 600px;
}

.slide-down-leave-from {
  opacity: 1;
  max-height: 600px;
}

.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>
