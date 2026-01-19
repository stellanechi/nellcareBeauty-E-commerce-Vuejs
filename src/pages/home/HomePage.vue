<template>
  <div class="min-h-screen">
    <NavigationBar />
    <HeroSlider />
    <Products />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from "@/components/navbar/NavigationBar.vue";
import HeroSlider from "@/pages/home/HeroSlider.vue";
import Products from "@/pages/home/product/Products.vue";
</script>

<style scoped lang="scss"></style>
