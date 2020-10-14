import { apiFunctionForTests } from "../__test_resources__/apiFunctionForTests";
import { docCommentForTests } from "../__test_resources__/docCommentForTests";
import { getArgumentDescriptions } from "./getArgumentDescriptions";
import { getArgumentNames } from "./getArgumentNames";
import { getDocComment } from "./getDocComment";

describe("getArgumentDescriptions", () => {
  it("returns the descriptions of each argument of the function", () => {
    const argumentNames = getArgumentNames(apiFunctionForTests);

    const argumentDescriptions = getArgumentDescriptions(
      argumentNames,
      docCommentForTests
    );

    expect(argumentDescriptions).toMatchInlineSnapshot(`
      Object {
        "dimensionName": "the name of the dimension containing the added level.",
        "hierarchyName": "the name of the hierarchy containing the added level.",
        "levelName": "the name of the added level.",
        "mdx": "the mdx on which the level should be added.",
      }
    `);
  });
});
