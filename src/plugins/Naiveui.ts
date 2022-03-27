import { App } from "vue";
import {
  create,
  NButton,
  NRadio,
  NSwitch,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider
} from "naive-ui";

export class Naiveui {
  public LoadComponent(app: App<Element>): void {
    let naiveComs = create({
      components: [NButton, NRadio, NSwitch, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter, NLayoutSider]
    });
    app.use(naiveComs);
  }
}
