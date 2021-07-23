import { ApiItems } from "../api/getApiItems";

/**
 * Returns `true` if the name denotes a props type `FooProps` for which there exist a component `<Foo />`.
 */
export function isPropsTypeWithMatchingComponent(
  name: string,
  items: ApiItems
) {
  const matcherResult = name.match(/(?<componentName>.*)Props$/);
  return (
    matcherResult &&
    matcherResult.groups.componentName &&
    items.components[matcherResult.groups.componentName]
  );
}
