import Vue from "vue";
import VueRouter from 'vue-router';
import Router from "VueRouter";
import HellowWorld from "../components/HellowWorld.vue"
const commonRoutes = [
    {name: "",
     path: "/home",
     meta: {tile: "主页"},
     component: HellowWorld},
     {name: "",
      path: "/login",
      meta: {tile: "主页"},
      component: HellowWorld},
]
export default router = new Router(commonRoutes)