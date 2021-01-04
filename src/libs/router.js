import { createRouter, createWebHistory } from "vue-router";
import Items from "./menu";

const routes = Items.map(item => ({
  path: item.path,
  name: item.name,
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import("../components/"+item.name+"/index.vue")
}));


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
