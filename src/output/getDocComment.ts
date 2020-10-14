import { ApiItem } from "@microsoft/api-extractor-model";

/**
 * Return the `item`'s docComment
 */
export const getDocComment = (item: ApiItem) => {
  const serializedItem: any = {};
  item.serializeInto(serializedItem);
  return serializedItem.docComment;
};
