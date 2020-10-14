import { apiFunctionForTests } from "../__test_resources__/apiFunctionForTests";
import { getArgumentNames } from "./getArgumentNames";

describe("getArgumentNames", () => {
  it("returns the name of each argument of the function", () => {
    const argumentNames = getArgumentNames(apiFunctionForTests);

    expect(argumentNames).toMatchInlineSnapshot(`
      Array [
        "mdx",
        "dimensionName",
        "hierarchyName",
        "levelName",
        "axisName",
        "indexOnAxis",
        "shouldCreateNonEmptyAxis",
        "cube",
      ]
    `);
  });
});
