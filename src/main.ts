import { createApp } from "vue";
import App from "./App.vue";
import { Naiveui } from "./plugins/Naiveui";
import Router from "./router/Index";

const app = createApp(App);
const naiveui = new Naiveui();
naiveui.LoadComponent(app);
app.use(Router);
app.mount("#app");
