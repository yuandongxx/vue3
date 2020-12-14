
import VueRouter from 'vue-router';
import HelloWorld from "../components/HelloWorld.vue"
const commonRoutes = [
    {name: "",
     path: "/home",
     meta: {tile: "主页"},
     component: HelloWorld},
    {name: "",
    path: "/login",
    meta: {tile: "主页"},
    component: HelloWorld},
]
const router = new VueRouter({routes: commonRoutes})
export default router;