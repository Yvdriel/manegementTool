import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

const noRequireAuth = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

const requireAuth = (to, from, next) => {
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
    component: Home,
    beforeEnter: requireAuth,
  },
  {
    path: "/about",
    name: "About",
    beforeEnter: requireAuth,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
