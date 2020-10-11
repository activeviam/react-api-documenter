import { isError } from "./isError";
import { isHook } from "./isHook";
import { isComponent } from "./isComponent";
import { isProp } from "./isProp";
import { isFunction } from "./isFunction";
import { isContextProvider } from "./isContextProvider";

const accumulate = (acc, member, ignorePattern: RegExp) => {
  if (member.name && !member.name.match(ignorePattern)) {
    switch (member.kind) {
      case "Class": {
        if (isError(member)) {
          acc.errors.push(member);
        } else {
          acc.classes.push(member);
        }
        break;
      }
      case "Function": {
        if (isHook(member)) {
          acc.hooks.push(member);
        } else if (isComponent(member)) {
          acc.components.push(member);
        } else {
          acc.functions.push(member);
        }
        break;
      }
      case "Variable": {
        if (isContextProvider(member)) {
          acc.contextProviders.push(member);
        } else if (isHook(member)) {
          acc.hooks.push(member);
        } else if (isComponent(member)) {
          acc.components.push(member);
        } else if (isFunction(member)) {
          acc.functions.push(member);
        } else {
          acc.variables.push(member);
        }
        break;
      }
      case "Interface": {
        if (isProp(member)) {
          acc.props[member.name.slice(0, -5)] = member;
        } else {
          acc.types.push(member);
        }
      }
      default:
        break;
    }
  }

  if (member.members) {
    member.members.forEach((child) => {
      accumulate(acc, child, ignorePattern);
    });
  }
};

export const getApiItems = (api, ignorePattern: RegExp) => {
  const acc = {
    classes: [],
    errors: [],
    functions: [],
    components: [],
    contextProviders: [],
    hooks: [],
    types: [],
    variables: [],
    props: {},
  };

  accumulate(acc, api, ignorePattern);

  return acc;
};
