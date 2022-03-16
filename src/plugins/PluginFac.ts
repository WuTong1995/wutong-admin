import { IPlugin } from "./IPlugin";
import { Naiveui } from "./Naiveui";

export class PluginFac {
  public CreatePlugin(pluginName: string): IPlugin {
    switch (pluginName.trim().toLowerCase()) {
      case "naiveui":
        return new Naiveui();
      default:
        return new Naiveui();
    }
  }
}
