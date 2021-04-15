import doT from "dot";
import mapValues from "lodash/mapValues";
import isString from "lodash/isString";
import keys from "lodash/keys";

import { Scripts } from "../../types/types";

type StringTree = { [key: string]: string | StringTree };

doT.templateSettings.interpolate = /\{([\s\S]+?)\}/g;
doT.templateSettings.strip = false;

export function evalScripts(scripts: Scripts, params: { [key: string]: Object }): Scripts {
  const param_names = keys(params);
  const paramList = param_names.map((name) => params[name]);
  doT.templateSettings.varname = param_names.join(",");
  function evalScriptsRec(tree: StringTree) {
    return mapValues(tree, (child) => {
      if (isString(child)) {
        try {
          return doT.template(child)(...paramList);
        } catch (error) {
          console.error(`Invalid template: ${child}`);
          return child;
        }
      }
      return evalScriptsRec(child);
    });
  }
  return evalScriptsRec(scripts);
}
