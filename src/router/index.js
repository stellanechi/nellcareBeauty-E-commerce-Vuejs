import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home/HomePage.vue"),
    },
    // FOOTER SECTION ROUTES
    {
      path: "/search",
      name: "search",
      component: () => import("@/components/footer/footerpages/Search.vue"),
    },
    // sales
    {
      path: "/summer",
      name: "summer",
      component: () => import("@/pages/home/Summer.vue"),
    },
    {
      path: "/shelf",
      name: "shelf",
      component: () => import("@/pages/home/Shelf.vue"),
    },
    {
      path: "/sales",
      name: "sales",
      component: () => import("@/pages/home/Sales.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/auth/AuthLayout.vue"),
    },
  ],
});

export default router;
