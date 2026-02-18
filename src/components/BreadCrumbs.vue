<template>
  <div class="w-full bg-[#f6f6f6] py-10">
    <div class="max-w-container mx-auto px-6 lg:px-16">
      <h1
        v-if="title"
        class="mb-4 text-4xl font-semibold text-[#333333] capitalize md:text-4xl"
      >
        {{ title }}
      </h1>
      <div class="flex w-full items-center gap-1.5">
        <template v-for="(link, i) in breadcrumbs" :key="i">
          <component
            :is="link.path ? 'RouterLink' : 'span'"
            :to="link.path"
            :class="[
              'text-xs tracking-wide',
              link.path
                ? 'text-[#444444] underline underline-offset-2 hover:text-[#222222]'
                : 'text-[#999999]',
            ]"
            >{{ link.label }}</component
          >
          <span v-if="i < breadcrumbs.length - 1" class="text-[#999999] text-xs"
            >/</span
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
});
</script>

<!-- usage
 
1. Import 

2. Add to script 
const breadcrumbs = [
  {
    path: "/",
    label: "Home",
  },
  {
    label: "Shop",
  },
];


3. Use  <BreadCrumbs :breadcrumbs="breadcrumbs" />-->
