<template>
  <div>
    <NavigationBar />
    <BreadCrumbs :breadcrumbs="breadcrumbs" title="Products" />
  </div>

  <p>checking out bag</p>
</template>

<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import NavigationBar from "@/components/navbar/NavigationBar.vue";

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
