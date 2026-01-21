<template>
  <button
    :disabled="disabled"
    class="px-10 py-3 bg-[#2f2f2f] text-white text-sm font-medium tracking-widest uppercase transition-all duration-200 hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "SHOW NOW",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
