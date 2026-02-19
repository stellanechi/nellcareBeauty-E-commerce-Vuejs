<template>
  <div>
    <NavigationBar />
    <BreadCrumbs :breadcrumbs="breadcrumbs" title="Products" />
    <div class="container mx-auto py-8">
      <Products />
    </div>
  </div>

  <p>checking out bag</p>
</template>

<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import NavigationBar from "@/components/navbar/NavigationBar.vue";
import Products from "@/pages/home/product/Products.vue";

const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Shop",
  },
];
</script>

<style lang="scss" scoped></style>
