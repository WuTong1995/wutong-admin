import { createApp } from "vue";
import App from "./App.vue";
import { PluginFac } from "./plugins/PluginFac";

const app = createApp(App);
let pluginFac = new PluginFac();
pluginFac.CreatePlugin("naiveui").LoadPlugin(app);

app.mount("#app");
