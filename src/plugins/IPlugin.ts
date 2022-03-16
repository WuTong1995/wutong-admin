import { App } from "vue";

export interface IPlugin {
  LoadPlugin(app: App): void;
}
