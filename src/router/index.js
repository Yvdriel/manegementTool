import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: requireAuth,
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

function requireAuth() {
  console.log("Nee");
  if (store.getters.isAuthenticated) {
    console.log("hoi");
  }
}

export default router;
