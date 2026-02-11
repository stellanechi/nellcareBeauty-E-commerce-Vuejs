<template>
  <div class="px-16">
    <!-- Product Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10"
    >
      <ProductCard
        v-for="event in events"
        :key="event.id"
        :product="event"
        @click="handleViewEvent(event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "@/pages/home/product/ProductCard.vue";

// emits
const emit = defineEmits(["event-selected"]);

// state
const baseUrl = "https://fakestoreapi.com/products";
const events = ref([]);

// methods
const handleViewEvent = (event) => {
  emit("event-selected", event);
};

const fetchEvents = async (limit = null) => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();

    events.value = (limit ? data.slice(0, limit) : data).map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      price: item.price, // Changed from template literal to number
      category: item.category,
      // Optional: Add these if you want sale badges
      // originalPrice: item.price * 1.3, // Example: show 30% off
      // onSale: true,
      // discount: 30
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

// lifecycle
onMounted(() => {
  fetchEvents(6);
});
</script>
