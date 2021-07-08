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

const accumulate = (acc: ApiItems, item: ApiItem, ignorePattern?: RegExp) => {
  // The interesting items all have a `name` property.
  const name = (item as any).name;

  if (name && (ignorePattern === undefined || !name.match(ignorePattern))) {
    // Avoid "_2" appended at the end of a name when it is a reserved keyword.
    const effectiveName = name.replace(/_[0-9]+$/, "");

    if (isClass(item)) {
      if (isInterpretedAsError(item)) {
        acc.errors[effectiveName] = item;
      } else {
        acc.classes[effectiveName] = item;
      }
    } else if (isFunction(item)) {
      if (isInterpretedAsHook(item)) {
        acc.hooks[effectiveName] = item;
      } else {
        acc.functions[effectiveName] = item;
      }
    } else if (isVariable(item)) {
      if (isInterpretedAsContextProvider(item)) {
        acc.contextProviders[effectiveName] = item;
      } else if (isInterpretedAsComponent(item)) {
        acc.components[effectiveName] = item;
      } else {
        acc.variables[effectiveName] = item;
      }
    } else if (isInterface(item)) {
      if (isInterpretedAsProps(item)) {
        acc.props[effectiveName] = item;
      } else {
        acc.types[effectiveName] = item;
      }
    } else if (isTypeAlias(item)) {
      acc.types[effectiveName] = item;
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
  ignorePattern?: RegExp
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
