import { ApiFunction, ApiVariable } from "@microsoft/api-extractor-model";
import { isFunction } from "./isFunction";

/**
 * Returns whether `item` is interpreted as a Component.
 */
export const isInterpretedAsComponent = (item: ApiFunction | ApiVariable) => {
  // Variable explicitely typed as a Component
  const isComponent = item.excerptTokens.some(
    (token) =>
      token.text === "FC" ||
      token.text === "Component" ||
      token.text === "ComponentType" ||
      token.text === "MemoExoticComponent" ||
      token.text === "ForwardRefExoticComponent"
  );
  
  if (isComponent) {
    return true;
  }

  if (item.excerptTokens.length > 0) {
    const excerptTokensExcludingDefaultProps = item.excerptTokens.filter(token => token.text.indexOf("defaultProps") === -1);
    const lastToken = excerptTokensExcludingDefaultProps[excerptTokensExcludingDefaultProps.length - 1];
    // Function returning a JSX.Element or ReactElement
    return lastToken && (lastToken.text === "JSX.Element" || lastToken.text === "ReactElement");
  }

  return false;
};