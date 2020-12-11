import { createApp } from "vue";
import App from "./App.vue";
import { Layout, Menu, Switch } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
const app = createApp(App);
app.use(Layout);
app.use(Menu);
app.use(Switch);
app.mount("#app");
