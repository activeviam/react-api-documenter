import { ApiItems } from "./api/getApiItems";

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

  return `./${fileName}#${name.toLowerCase()}`;
};
