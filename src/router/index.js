import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // NAV BAR PAGES
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home/HomePage.vue"),
    },

    {
      path: "/shop",
      name: "shop",
      component: () => import("@/pages/shop/Shop.vue"),
    },
    {
      path: "/product/:id",
      name: "productDetails",
      component: () => import("@/pages/home/product/ProductDetails.vue"),
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
          meta: { guest: true },
        },
        {
          path: "create-account",
          name: "createAccount",
          component: () => import("@/auth/CreateAccount .vue"),
          meta: { guest: true },
        },
        {
          path: "reset-password",
          name: "resetPassword",
          component: () => import("@/auth/ResetPassword.vue"),
          meta: { guest: true },
        },
      ],
    },

    // PAGES
    {
      path: "/wishlist",
      name: "wishlist",
      component: () => import("@/pages/wishlist/WishList.vue"),
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
    // 404 NOT FOUND - MUST BE LAST!
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/pages/NotFound.vue"),
    },
  ],
  // scroll behavior to scroll to top on route change
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
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
