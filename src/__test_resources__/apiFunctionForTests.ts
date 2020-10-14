import { ApiFunction, ExcerptTokenKind } from "@microsoft/api-extractor-model";

// @ts-expect-error
export const apiFunctionForTests = new ApiFunction({
  excerptTokens: [
    {
      kind: "Content" as ExcerptTokenKind,
      text: "export declare function addLevel(mdx: ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "MdxSelect",
      canonicalReference: "@activeviam/activeui-sdk!MdxSelect:interface",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text:
        ", { dimensionName, hierarchyName, levelName, axisName, indexOnAxis, shouldCreateNonEmptyAxis, }: ",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: "{\n    dimensionName: ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "DimensionName",
      canonicalReference: "@activeviam/activeui-sdk!DimensionName:type",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: ";\n    hierarchyName: ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "HierarchyName",
      canonicalReference: "@activeviam/activeui-sdk!HierarchyName:type",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: ";\n    levelName: ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "LevelName",
      canonicalReference: "@activeviam/activeui-sdk!LevelName:type",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: ";\n    axisName?: ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "AxisName",
      canonicalReference: "@activeviam/activeui-sdk!AxisName:type",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text:
        ";\n    indexOnAxis?: number;\n    shouldCreateNonEmptyAxis?: boolean;\n}",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: ", \ncube: ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "Cube",
      canonicalReference: "@activeviam/activeui-sdk!Cube:interface",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: "): ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "MdxSelect",
      canonicalReference: "@activeviam/activeui-sdk!MdxSelect:interface",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: ";",
    },
  ],
  returnTypeTokenRange: {
    startIndex: 15,
    endIndex: 16,
  },
  overloadIndex: 1,
  parameters: [
    {
      parameterName: "mdx",
      parameterTypeTokenRange: {
        startIndex: 1,
        endIndex: 2,
      },
    },
    {
      parameterName:
        "{ dimensionName, hierarchyName, levelName, axisName, indexOnAxis, shouldCreateNonEmptyAxis, }",
      parameterTypeTokenRange: {
        startIndex: 3,
        endIndex: 12,
      },
    },
    {
      parameterName: "cube",
      parameterTypeTokenRange: {
        startIndex: 13,
        endIndex: 14,
      },
    },
  ],
  name: "addLevel",
});
