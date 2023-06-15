import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/main/index.vue";
import Login from "@/views/login/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
