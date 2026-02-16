import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

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

    // AUTH ROUTES (NESTED)
    {
      path: "/auth",
      component: () => import("@/auth/AuthLayout.vue"),
      meta: { guest: true },
      children: [
        {
          path: "",
          redirect: "/auth/login",
        },
        {
          path: "login",
          name: "login",
          component: () => import("@/auth/Login.vue"),
        },
        {
          path: "create-account",
          name: "createAccount",
          component: () => import("@/auth/CreateAccount .vue"),
        },
        {
          path: "reset-password",
          name: "resetPassword",
          component: () => import("@/auth/ResetPassword.vue"),
        },
      ],
    },
    // OTHER NAV BAR PAGES
    {
      path: "/shop",
      name: "shop",
      component: () => import("@/components/navbar/shop/Shop.vue"),
    },
  ],
});

// route guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({
      name: "login",
      query: { redirect: to.fullPath },
    });
  } else if (to.meta.guest && isAuthenticated) {
    next({ name: "home" });
  } else {
    next();
  }
});
export default router;
