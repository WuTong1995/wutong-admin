import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../layout/Index.vue";

const routes = [{ path: "/", component: Layout }];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
