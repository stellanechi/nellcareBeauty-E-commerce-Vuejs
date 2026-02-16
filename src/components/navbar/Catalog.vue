<template>
  <div>
    <!-- Desktop Version -->
    <div
      v-if="!isMobile"
      class="relative"
      @mouseenter="showCatalogMenu = true"
      @mouseleave="showCatalogMenu = false"
    >
      <router-link
        to="/catalog"
        class="relative text-gray-400 hover:text-gray-600 transition-colors text-base inline-flex items-center"
      >
        <!-- SALE badge -->
        <span
          class="absolute -top-3 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-teal-400 text-white text-[10px] rounded"
        >
          SALE
        </span>

        <!-- Catalog text -->
        <span>Catalog</span>

        <!-- Dropdown icon -->
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

      <!-- Desktop Mega Menu -->
      <transition name="fade">
        <div
          v-show="showCatalogMenu"
          class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-5xl"
        >
          <div class="bg-white border border-gray-200 shadow-lg rounded-lg p-8">
            <div class="grid grid-cols-4 gap-8">
              <!-- Column 1: Popular -->
              <div>
                <h3 class="text-gray-800 font-medium mb-4">Popular</h3>
                <ul class="space-y-3">
                  <li>
                    <router-link
                      to="/catalog/causal"
                      class="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-2"
                    >
                      Causal
                      <span
                        class="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded"
                        >NEW</span
                      >
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/exclusive"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Exclusive
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/aligori"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Aligori
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/churidar"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Churidar
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/shalwar"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Shalwar
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/jeans"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Jeans
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/dress"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Dress
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- Column 2: Best Selling -->
              <div>
                <h3 class="text-gray-800 font-medium mb-4">Best Selling</h3>
                <ul class="space-y-3">
                  <li>
                    <router-link
                      to="/catalog/sandals"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Sandals
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/bast-shoe"
                      class="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-2"
                    >
                      Bast shoe
                      <span
                        class="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded"
                        >New</span
                      >
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/blucher-shoe"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Blucher shoe
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/boat-shoe"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Boat shoe
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/brogan"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Brogan
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/chelsea-boot"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Chelsea boot
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/brothel-creeper"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Brothel creeper
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- Column 3: New Product -->
              <div>
                <h3 class="text-gray-800 font-medium mb-4">New Product</h3>
                <ul class="space-y-3">
                  <li>
                    <router-link
                      to="/catalog/belt"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Belt
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/wallets"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Wallets
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/card-holders"
                      class="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-2"
                    >
                      Card Holders
                      <span
                        class="px-1.5 py-0.5 bg-teal-400 text-white text-xs rounded"
                        >SALE</span
                      >
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/bags"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Bags
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/executive-bag"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Executive bag
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/cufflinks"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Cufflinks
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/catalog/cap"
                      class="text-gray-400 hover:text-gray-600 text-sm"
                    >
                      Cap
                    </router-link>
                  </li>
                </ul>
              </div>

              <!-- Column 4: Product Image -->
              <div>
                <div class="bg-gray-50 rounded-lg p-6 text-center">
                  <div
                    class="w-32 h-32 md:w-55 md:h-55 mx-auto bg-white rounded-lg flex items-center justify-center mb-4"
                  >
                    <img
                      src="https://lezada-demo.myshopify.com/cdn/shop/products/per1_360x.jpg?v=1551249474"
                      alt="Organic Moon Fruit"
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <h4 class="text-gray-800 text-sm font-medium mb-2">
                    Organic Moon Fruit
                  </h4>
                  <div class="flex items-center justify-center gap-2">
                    <span class="text-gray-900 font-semibold">$39.00</span>
                    <span class="text-gray-400 line-through text-sm"
                      >$69.00</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Mobile Version -->
    <div v-else class="w-full">
      <button
        @click="toggleMobileCatalog"
        class="w-full text-left text-gray-600 hover:text-gray-900 transition-colors text-base flex items-center justify-between relative py-1"
      >
        <span class="flex items-center gap-2">
          Catalog
          <span
            class="px-1.5 py-0.5 bg-teal-400 text-white text-[10px] rounded"
          >
            SALE
          </span>
        </span>
        <svg
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': showMobileCatalog }"
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

      <!-- Mobile Accordion Menu -->
      <transition name="slide-down">
        <div v-if="showMobileCatalog" class="mt-3 space-y-4">
          <!-- Popular Section -->
          <div>
            <button
              @click="toggleSection('popular')"
              class="w-full text-left text-gray-700 font-medium text-sm flex items-center justify-between py-2"
            >
              Popular
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeSection === 'popular' }"
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
            <transition name="slide-down">
              <ul
                v-if="activeSection === 'popular'"
                class="ml-4 mt-2 space-y-2"
              >
                <li>
                  <router-link
                    to="/catalog/causal"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-2 py-1"
                  >
                    Causal
                    <span
                      class="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded"
                      >NEW</span
                    >
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/exclusive"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Exclusive
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/aligori"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Aligori
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/churidar"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Churidar
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/shalwar"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Shalwar
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/jeans"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Jeans
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/dress"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Dress
                  </router-link>
                </li>
              </ul>
            </transition>
          </div>

          <!-- Best Selling Section -->
          <div>
            <button
              @click="toggleSection('bestselling')"
              class="w-full text-left text-gray-700 font-medium text-sm flex items-center justify-between py-2"
            >
              Best Selling
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeSection === 'bestselling' }"
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
            <transition name="slide-down">
              <ul
                v-if="activeSection === 'bestselling'"
                class="ml-4 mt-2 space-y-2"
              >
                <li>
                  <router-link
                    to="/catalog/sandals"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Sandals
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/bast-shoe"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-2 py-1"
                  >
                    Bast shoe
                    <span
                      class="px-1.5 py-0.5 bg-red-500 text-white text-xs rounded"
                      >New</span
                    >
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/blucher-shoe"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Blucher shoe
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/boat-shoe"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Boat shoe
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/brogan"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Brogan
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/chelsea-boot"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Chelsea boot
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/brothel-creeper"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Brothel creeper
                  </router-link>
                </li>
              </ul>
            </transition>
          </div>

          <!-- New Product Section -->
          <div>
            <button
              @click="toggleSection('newproduct')"
              class="w-full text-left text-gray-700 font-medium text-sm flex items-center justify-between py-2"
            >
              New Product
              <svg
                class="w-4 h-4 transition-transform"
                :class="{ 'rotate-180': activeSection === 'newproduct' }"
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
            <transition name="slide-down">
              <ul
                v-if="activeSection === 'newproduct'"
                class="ml-4 mt-2 space-y-2"
              >
                <li>
                  <router-link
                    to="/catalog/belt"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Belt
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/wallets"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Wallets
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/card-holders"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-2 py-1"
                  >
                    Card Holders
                    <span
                      class="px-1.5 py-0.5 bg-teal-400 text-white text-xs rounded"
                      >SALE</span
                    >
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/bags"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Bags
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/executive-bag"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Executive bag
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/cufflinks"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Cufflinks
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/catalog/cap"
                    @click="handleMobileClick"
                    class="text-gray-500 hover:text-gray-700 text-sm block py-1"
                  >
                    Cap
                  </router-link>
                </li>
              </ul>
            </transition>
          </div>

          <!-- Featured Product (Mobile) -->
          <div class="bg-gray-50 rounded-lg p-4 text-center mt-4">
            <div
              class="w-24 h-24 mx-auto bg-white rounded-lg flex items-center justify-center mb-3"
            >
              <img
                src="https://lezada-demo.myshopify.com/cdn/shop/products/per1_360x.jpg?v=1551249474"
                alt="Organic Moon Fruit"
                class="w-full h-full object-contain"
              />
            </div>
            <h4 class="text-gray-800 text-sm font-medium mb-2">
              Organic Moon Fruit
            </h4>
            <div class="flex items-center justify-center gap-2">
              <span class="text-gray-900 font-semibold text-sm">$39.00</span>
              <span class="text-gray-400 line-through text-xs">$69.00</span>
            </div>
          </div>
        </div>
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

const showCatalogMenu = ref(false);
const showMobileCatalog = ref(false);
const activeSection = ref(null);

const toggleMobileCatalog = () => {
  showMobileCatalog.value = !showMobileCatalog.value;
  if (!showMobileCatalog.value) {
    activeSection.value = null;
  }
};

const toggleSection = (section) => {
  activeSection.value = activeSection.value === section ? null : section;
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
  max-height: 1000px;
}

.slide-down-leave-from {
  opacity: 1;
  max-height: 1000px;
}

.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>
