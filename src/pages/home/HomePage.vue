<template>
  <div class="min-h-screen">
    <NavigationBar />
    <HeroSlider />

    <!-- HEADER TITLE WITH CLICKABLE TABS -->
    <div class="container mx-auto py-22">
      <h2 class="text-5xl text-center">
        <button
          @click="activeTab = 'new'"
          :class="[
            'transition-colors duration-200 hover:text-gray-800 cursor-pointer',
            activeTab === 'new' ? 'text-gray-900' : 'text-[#c6c6c5]',
          ]"
        >
          New
        </button>
        <span class="mx-2">&nbsp;</span>
        <button
          @click="activeTab = 'popular'"
          :class="[
            'transition-colors duration-200 hover:text-gray-800 cursor-pointer',
            activeTab === 'popular' ? 'text-gray-900' : 'text-[#c6c6c5]',
          ]"
        >
          Popular
        </button>
        <span class="mx-2">&nbsp;</span>
        <button
          @click="activeTab = 'sale'"
          :class="[
            'transition-colors duration-200 hover:text-gray-800 cursor-pointer',
            activeTab === 'sale' ? 'text-gray-900' : 'text-[#c6c6c5]',
          ]"
        >
          Sale
        </button>
      </h2>
    </div>

    <!-- PRODUCTS WITH ACTIVE TAB -->
    <Products :active-tab="activeTab" />

    <div class="py-22 flex items-center justify-center">
      <div>
        <img
          src="https://lezada-demo.myshopify.com/cdn/shop/files/cabinet_900x.jpg?v=1613765140"
          alt="table"
        />
      </div>
    </div>

    <!-- section -->
    <div class="container mx-auto pb-16">
      <h2 class="text-[1.2rem] text-center">
        <div class="flex items-center justify-center gap-4">
          <router-link
            to="/summer"
            class="text-[#a39eaa] hover:underline transition-all duration-200"
          >
            #summer
          </router-link>
          <router-link
            to="/shelf"
            class="text-[#a39eaa] hover:underline transition-all duration-200"
          >
            #shelf
          </router-link>
          <router-link
            to="/sales"
            class="text-[#a39eaa] hover:underline transition-all duration-200"
          >
            Sale
          </router-link>
        </div>
      </h2>
    </div>

    <!-- section -->
    <div class="container mx-auto py-4">
      <h2 class="text-5xl text-center">
        Up To 40% Off Final Sale Items. Caught <br />
        in the moment!
      </h2>
    </div>
    <div class="flex items-center justify-center py-14">
      <Button label="SHOP NOW" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavigationBar from "@/components/navbar/NavigationBar.vue";
import HeroSlider from "@/pages/home/HeroSlider.vue";
import Products from "@/pages/home/product/Products.vue";
import Button from "@/components/Button.vue";

// Active tab state - defaults to 'new'
const activeTab = ref<"new" | "popular" | "sale">("new");
</script>

<style scoped lang="scss"></style>
