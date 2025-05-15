import * as components from "./components";
import "@test-ui/theme-chalk/index.less"

const FUNCTION_COMP = ["TMessage"];
const DIRECTIVE_COMP = ["TLoading"];

export default {
  install(app) {
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMP.includes(key)) app.component(key, value)
      if (DIRECTIVE_COMP.includes(key)) app.use(value)
    });
  }
}

export const TMessage = components.TMessage;
export const TLoading = components.TLoading;