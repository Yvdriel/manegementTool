import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";

const requireAuth = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

const noRequireAuth = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const logout = (to, from, next) => {
  store.dispatch("AUTH_LOGOUT", {}).then(() => {
    setTimeout(() => {
      next("/login");
    }, 1000);
  });
};

const routes = [
  {
    path: "/",
    name: "Home",
    beforeEnter: requireAuth,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/shift/:id",
    name: "shift",
    alias: "/shift",
    beforeEnter: requireAuth,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shift.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    beforeEnter: logout,
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: noRequireAuth,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
