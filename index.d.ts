import Vue, { PluginFunction } from 'vue'
import Rollbar from "rollbar";

declare const install: PluginFunction<Rollbar.Configuration>;
export default install;

declare module "vue/types/vue" {
  interface Vue {
    $rollbar: Rollbar;
  }

  interface VueConstructor {
    rollbar: Rollbar
  }
}
