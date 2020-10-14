import { ApiConstructor, ApiFunction } from "@microsoft/api-extractor-model";

/**
 * Returns the names of `item`'s arguments.
 */
export const getArgumentNames = (item: ApiFunction | ApiConstructor) => {
  return item.parameters.reduce((acc, parameter) => {
    if (parameter.name.includes("{")) {
      return [
        ...acc,
        ...parameter.name.replace(/{ /, "").replace(/, }/, "").split(", "),
      ];
    }
    return [...acc, parameter.name];
  }, []);
};
