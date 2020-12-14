import { createApp } from "vue";
import App from "./App.vue";
import router from "./Routers"
import { Layout, Menu, Switch } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const app = createApp(App);
app.use(router)
app.use(Layout);
app.use(Menu);
app.use(Switch);
app.mount("#app");
