import { ApiItems } from "./api/getApiItems";
import { isPropsTypeWithMatchingComponent } from "./output/isPropsTypeWithMatchingComponent";
import { kebabCase } from "lodash";

const fileNames = [
  "classes",
  "errors",
  "functions",
  "components",
  "contextProviders",
  "hooks",
  "types",
  "variables",
];

export const getLinkPath = (
  name: string,
  items: ApiItems
): string | undefined => {
  const fileName = fileNames.find((kind) => items[kind][name] !== undefined);
  if (!fileName) {
    return undefined;
  }

  if (fileName === "types") {
    if (isPropsTypeWithMatchingComponent(name, items)) {
      // Found a matching component where the props are documented, hence linking to the components file.
      return `./components#${name.toLowerCase()}`;
    } else {
      return `./types#${name.toLowerCase()}`;
    }
  }
  return `./${kebabCase(fileName)}#${name.toLowerCase()}`;
};
