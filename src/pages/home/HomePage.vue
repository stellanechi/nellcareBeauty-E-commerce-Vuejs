<template>
  <div class="min-h-screen">
    <NavigationBar />
    <HeroSlider />
    <!-- HEADER TITLE -->
    <div class="container mx-auto py-22">
      <h2 class="text-5xl text-center">
        <span>New &nbsp; </span>
        <span class="text-[#c6c6c5]">Popular &nbsp; Sale </span>
      </h2>
    </div>
    <Products />
    <div class="py-22 flex items-center justify-center">
      <div>
        <img
          src="https://lezada-demo.myshopify.com/cdn/shop/files/cabinet_900x.jpg?v=1613765140"
          alt="table"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/navbar/NavigationBar.vue";
import HeroSlider from "@/pages/home/HeroSlider.vue";
import Products from "@/pages/home/product/Products.vue";
</script>

<style scoped lang="scss"></style>
