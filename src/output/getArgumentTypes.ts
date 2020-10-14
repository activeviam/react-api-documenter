import { ExcerptToken } from "@microsoft/api-extractor-model";
import { getFullExcerpt } from "./getFullExcerpt";

/**
 * Returns the first index after the match, if found. Throws otherwise.
 */
const getIndexAfter = (fullExcerpt: string, toMatch: string): number => {
  const index = fullExcerpt.indexOf(toMatch);
  if (index === -1) {
    throw new Error(`Couldn't find "${toMatch}" in "${fullExcerpt}"`);
  }
  return index + toMatch.length;
};

/**
 * Returns the names and the canonical references of the types of an ApiFunction's arguments.
 */
export const getArgumentTypes = (
  excerptTokens: readonly ExcerptToken[],
  argumentNames: string[],
  packageCanonicalReference: string
): {
  [argumentName: string]: {
    isOptional: boolean;
    typeName: string;
  };
} => {
  const argumentTypes: {
    [argumentName: string]: {
      isOptional: boolean;
      typeName: string;
    };
  } = {};

  const fullExcerpt = getFullExcerpt(excerptTokens, packageCanonicalReference);

  let index = getIndexAfter(fullExcerpt, "(");
  let numberOfOpeningParenthesis = 1;
  let argumentIndex = 0;

  while (index < fullExcerpt.length && argumentIndex < argumentNames.length) {
    const argumentName = argumentNames[argumentIndex];
    let isOptional = false;

    try {
      index = getIndexAfter(fullExcerpt, `${argumentName}: `);
    } catch (error) {
      try {
        index = getIndexAfter(fullExcerpt, `${argumentName}?: `);
      } catch (error) {
        break;
      }
      isOptional = true;
    }

    let numberOfOpeningBraces = 0;
    let lookAheadIndex = index;
    while (lookAheadIndex < fullExcerpt.length) {
      const char = fullExcerpt[lookAheadIndex];
      if (char === "(") {
        numberOfOpeningParenthesis++;
      } else if (char === ")") {
        numberOfOpeningParenthesis--;
        if (numberOfOpeningParenthesis === 0) {
          break;
        }
      }

      if (char === "{") {
        numberOfOpeningBraces++;
      } else if (char === "}") {
        numberOfOpeningBraces--;
      } else if (
        (char === "," || char === ";") &&
        numberOfOpeningBraces === 0
      ) {
        break;
      }
      lookAheadIndex++;
    }

    argumentTypes[argumentName] = {
      isOptional,
      typeName: fullExcerpt.slice(index, lookAheadIndex),
    };

    argumentIndex++;
    index = lookAheadIndex;
  }

  return argumentTypes;
};
