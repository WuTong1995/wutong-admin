import { App } from "vue";
import { IPlugin } from "./IPlugin";
import { create, NButton, NRadio, NSwitch } from "naive-ui";

export class Naiveui implements IPlugin {
  public LoadPlugin(app: App): void {
    let naiveComs = create({ components: [NButton, NRadio, NSwitch] });
    app.use(naiveComs);
  }
}
