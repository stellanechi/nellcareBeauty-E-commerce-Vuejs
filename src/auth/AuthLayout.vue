<template>
  <div>
    <navigation-bar />
    <router-view />
  </div>
</template>

<script setup>
import NavigationBar from "@/components/navbar/NavigationBar.vue";

// You can add any layout-specific logic here
// For example, checking authentication, analytics, etc.
</script>
