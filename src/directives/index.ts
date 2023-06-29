import { App } from "vue";
import type { Directive } from "vue";
import copy from "./modules/copy";

const directivesList: { [key: string]: Directive } = {
  copy
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach(key => {
      app.directive(key, directivesList[key]);
    });
  }
};

export default directives;
