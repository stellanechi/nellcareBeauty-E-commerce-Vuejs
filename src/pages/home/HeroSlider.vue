<template>
  <div class="relative w-full h-[500px] overflow-hidden bg-gray-100">
    <!-- Slides Container -->
    <div
      class="flex transition-transform duration-500 ease-in-out h-full"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <!-- Slide 1 - Lighting -->
      <div class="min-w-full h-full flex items-center justify-center relative">
        <div class="absolute inset-0 bg-[#d8dcc9]"></div>
        <div
          class="max-w-7xl mx-auto px-16 w-full grid grid-cols-2 gap-16 items-center relative z-10"
        >
          <!-- Left Content -->
          <div class="space-y-8">
            <p
              class="text-[#8fa67e] text-xs font-semibold tracking-widest uppercase"
            >
              ACCESSORIES
            </p>
            <h2 class="text-6xl font-bold text-gray-900 leading-tight">
              Bottle Grinder,<br />
              Small, 2-Piecehe
            </h2>
            <button
              class="bg-[#3a3a3a] text-white px-10 py-4 hover:bg-gray-700 transition-colors font-medium text-sm tracking-wider"
            >
              SHOP NOW
            </button>
          </div>

          <!-- Right Image -->
          <div class="flex items-center justify-center">
            <img
              src="https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-1_900x.jpg?v=1613746686"
              alt="Bottle Grinder"
              class="max-w-full h-auto"
            />
          </div>
        </div>

        <!-- Large Background Text -->
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <p class="text-[280px] font-black text-white/40 leading-none">
            Lighting
          </p>
        </div>
      </div>

      <!-- Slide 2 - Decor -->
      <div class="min-w-full h-full flex items-center justify-center relative">
        <div class="absolute inset-0 bg-[#f0e8e4]"></div>
        <div
          class="max-w-7xl mx-auto px-16 w-full grid grid-cols-2 gap-16 items-center relative z-10"
        >
          <!-- Left Content -->
          <div class="space-y-8">
            <p
              class="text-[#c4a89a] text-xs font-semibold tracking-widest uppercase"
            >
              ACCESSORIES
            </p>
            <h2 class="text-6xl font-bold text-gray-900 leading-tight">
              Bottle Grinder,<br />
              Small, 2-Piecehe
            </h2>
            <button
              class="bg-[#3a3a3a] text-white px-10 py-4 hover:bg-gray-700 transition-colors font-medium text-sm tracking-wider"
            >
              SHOP NOW
            </button>
          </div>

          <!-- Right Image -->
          <div class="flex items-center justify-center">
            <img
              src="https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-2_900x.jpg?v=1613746686"
              alt="Decor"
              class="max-w-full h-auto"
            />
          </div>
        </div>

        <!-- Large Background Text -->
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <p class="text-[280px] font-black text-[#f5d5d0]/50 leading-none">
            Decor
          </p>
        </div>
      </div>

      <!-- Slide 3 - Accessories -->
      <div class="min-w-full h-full relative">
        <!-- <div class="absolute inset-0 bg-[#dde6f0]"></div> -->
        <!-- <div
          class="max-w-7xl mx-auto px-16 w-full grid grid-cols-2 gap-16 items-center relative"
        > -->

        <!-- Left Content -->
        <!-- <div class="space-y-8">
            <p
              class="text-[#7aa5c9] text-xs font-semibold tracking-widest uppercase"
            >
              ACCESSORIES
            </p>
            <h2 class="text-6xl font-bold text-gray-900 leading-tight">
              Bottle Grinder,<br />
              Small, 2-Piecehe
            </h2>
            <button
              class="bg-[#3a3a3a] text-white px-10 py-4 hover:bg-gray-700 transition-colors font-medium text-sm tracking-wider"
            >
              SHOP NOW
            </button>
          </div> -->

        <!-- Right Image -->
        <div class="flex items-center justify-center">
          <img
            src="https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-3_900x.jpg?v=1613746686"
            alt="Accessories"
            class="max-w-full h-auto"
          />
          <div
            class="absolute inset-0 bg-black/40 flex items-center justify-center"
          >
            <h3 class="text-white text-lg font-semibold">Hybrid Events</h3>
          </div>
          <!-- </div> -->
        </div>

        <!-- Large Background Text -->
        <!-- <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <p class="text-[280px] font-black text-[#b8d4e8]/60 leading-none">
            Accessories
          </p>
        </div> -->
      </div>
    </div>

    <!-- Previous Button -->
    <button
      @click="previousSlide"
      class="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-300 hover:text-gray-500 transition-colors z-20"
    >
      <svg
        class="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-300 hover:text-gray-500 transition-colors z-20"
    >
      <svg
        class="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>

    <!-- Dots Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      <button
        v-for="(slide, index) in 3"
        :key="index"
        @click="currentSlide = index"
        class="h-2 rounded-full transition-all"
        :class="currentSlide === index ? 'bg-gray-700 w-10' : 'bg-gray-400 w-2'"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
let autoPlayInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3;
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1;
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 5000);
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
};

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>
