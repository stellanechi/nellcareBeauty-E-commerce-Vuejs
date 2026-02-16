// src/main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Initialize auth state before mounting
import { useAuthStore } from "./stores/authStore";
const authStore = useAuthStore();
authStore.initAuth();

app.mount("#app");

// import { createApp } from "vue";
// import { createPinia } from "pinia";

// import App from "./App.vue";
// import router from "./router";

// const app = createApp(App);
// app.use(router);
// app.mount("#app");
// app.use(createPinia());
