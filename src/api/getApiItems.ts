import {
  ApiClass,
  ApiFunction,
  ApiInterface,
  ApiItem,
  ApiPackage,
  ApiTypeAlias,
  ApiVariable,
} from "@microsoft/api-extractor-model";

import { isInterpretedAsError } from "./isInterpretedAsError";
import { isInterpretedAsHook } from "./isInterpretedAsHook";
import { isInterpretedAsComponent } from "./isInterpretedAsComponent";
import { isInterpretedAsProps } from "./isInterpretedAsProps";
import { isInterpretedAsContextProvider } from "./isInterpretedAsContextProvider";
import { isClass } from "./isClass";
import { isFunction } from "./isFunction";
import { isVariable } from "./isVariable";
import { isInterface } from "./isInterface";
import { isTypeAlias } from "./isTypeAlias";

export interface ApiItems {
  classes: { [name: string]: ApiClass };
  errors: { [name: string]: ApiClass };
  functions: { [name: string]: ApiFunction };
  components: { [name: string]: ApiFunction | ApiVariable };
  contextProviders: { [name: string]: ApiFunction | ApiVariable };
  hooks: { [name: string]: ApiFunction };
  types: { [name: string]: ApiInterface | ApiTypeAlias };
  variables: { [name: string]: ApiVariable };
  props: { [name: string]: ApiInterface };
}

const accumulate = (acc: ApiItems, item: ApiItem, ignorePattern: RegExp) => {
  // The interesting items all have a `name` property.
  const name = (item as any).name;

  if (name && !name.match(ignorePattern)) {
    if (isClass(item)) {
      if (isInterpretedAsError(item)) {
        acc.errors[item.name] = item;
      } else {
        acc.classes[item.name] = item;
      }
    } else if (isFunction(item)) {
      if (isInterpretedAsHook(item)) {
        acc.hooks[item.name] = item;
      } else {
        acc.functions[item.name] = item;
      }
    } else if (isVariable(item)) {
      if (isInterpretedAsContextProvider(item)) {
        acc.contextProviders[item.name] = item;
      } else if (isInterpretedAsComponent(item)) {
        acc.components[item.name] = item;
      } else {
        acc.variables[item.name] = item;
      }
    } else if (isInterface(item)) {
      if (isInterpretedAsProps(item)) {
        acc.props[item.name.slice(0, -5)] = item;
      } else {
        acc.types[item.name] = item;
      }
    } else if (isTypeAlias(item)) {
      acc.types[item.name] = item;
    }
  }

  if (item.members) {
    item.members.forEach((child) => {
      accumulate(acc, child, ignorePattern);
    });
  }
};

export const getApiItems = (
  api: ApiPackage,
  ignorePattern: RegExp
): ApiItems => {
  const acc: ApiItems = {
    classes: {},
    errors: {},
    functions: {},
    components: {},
    contextProviders: {},
    hooks: {},
    types: {},
    variables: {},
    props: {},
  };

  accumulate(acc, api, ignorePattern);

  return acc;
};
