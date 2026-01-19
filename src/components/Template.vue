<template>
  <div>
    <h1 class="bg-blue-400 p-4 text-white">Welcome to the Home Page</h1>
    <p>Counter: {{ counter }}</p>
    <button
      @click="updateCount"
      class="bg-green-500 text-white px-4 py-2 rounded"
    >
      Increment Counter
    </button>
    <p class="mt-4">Name: {{ name }}</p>
    <button
      @click="updateName"
      class="bg-purple-500 text-white px-4 py-2 rounded"
    >
      Update Name
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { watch } from "vue";

const counter = ref(0);
const name = ref("stella");

const updateCount = () => {
  counter.value++;
};

const updateName = () => {
  name.value = "Stella Eneh";
};

watch(counter, (newVal) => {
  console.log(`Counter changed to: ${newVal}`);
});
watch(name, (newVal) => {
  console.log(`Name changed to: ${newVal}`);
});
</script>

<style lang="scss" scoped></style>
