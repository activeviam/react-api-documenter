import { apiConstructorForTests } from "../__test_resources__/apiConstructorForTests";
import { apiFunctionForTests } from "../__test_resources__/apiFunctionForTests";
import { getArgumentNames } from "./getArgumentNames";
import { getArgumentTypes } from "./getArgumentTypes";

describe("getArgumentTypes", () => {
  it("returns the types of the arguments of an ApiFunction", () => {
    const argumentNames = getArgumentNames(apiFunctionForTests);
    const types = getArgumentTypes(
      apiFunctionForTests.excerptTokens,
      argumentNames,
      "@activeviam/activeui-sdk"
    );

    expect(types).toMatchInlineSnapshot(`
      Object {
        "axisName": Object {
          "isOptional": true,
          "typeName": "[AxisName](./types#!axisname)",
        },
        "cube": Object {
          "isOptional": false,
          "typeName": "[Cube](./types#!cube)",
        },
        "dimensionName": Object {
          "isOptional": false,
          "typeName": "[DimensionName](./types#!dimensionname)",
        },
        "hierarchyName": Object {
          "isOptional": false,
          "typeName": "[HierarchyName](./types#!hierarchyname)",
        },
        "indexOnAxis": Object {
          "isOptional": true,
          "typeName": "number",
        },
        "levelName": Object {
          "isOptional": false,
          "typeName": "[LevelName](./types#!levelname)",
        },
        "mdx": Object {
          "isOptional": false,
          "typeName": "[MdxSelect](./types#!mdxselect)",
        },
        "shouldCreateNonEmptyAxis": Object {
          "isOptional": true,
          "typeName": "boolean",
        },
      }
    `);
  });

  it("returns the types of the arguments of a Constructor", () => {
    const argumentNames = getArgumentNames(apiConstructorForTests);
    const types = getArgumentTypes(
      apiConstructorForTests.excerptTokens,
      argumentNames,
      "@activeviam/activeui-sdk"
    );

    expect(types).toMatchInlineSnapshot(`
      Object {
        "options": Object {
          "isOptional": false,
          "typeName": "{
              url: string;
              version: [ServiceVersion](./types#!serviceversion);
          }",
        },
      }
    `);
  });
});
