import {
  ApiConstructor,
  ExcerptTokenKind,
} from "@microsoft/api-extractor-model";

// @ts-expect-error
export const apiConstructorForTests = new ApiConstructor({
  excerptTokens: [
    {
      kind: "Content" as ExcerptTokenKind,
      text: "constructor(options: ",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: "{\n        url: string;\n        version: ",
    },
    {
      kind: "Reference" as ExcerptTokenKind,
      text: "ServiceVersion",
      canonicalReference: "@activeviam/activeui-sdk!ServiceVersion:interface",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: ";\n    }",
    },
    {
      kind: "Content" as ExcerptTokenKind,
      text: ");",
    },
  ],
  overloadIndex: 1,
  parameters: [
    {
      parameterName: "options",
      parameterTypeTokenRange: {
        startIndex: 1,
        endIndex: 4,
      },
    },
  ],
});
