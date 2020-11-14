import { StandardTags, TSDocConfiguration } from "@microsoft/tsdoc";
import { DocEmphasisSpan } from "@microsoft/api-documenter/lib/nodes/DocEmphasisSpan";
import { DocHeading } from "@microsoft/api-documenter/lib/nodes/DocHeading";
import { DocNoteBox } from "@microsoft/api-documenter/lib/nodes/DocNoteBox";
import { DocTable } from "@microsoft/api-documenter/lib/nodes/DocTable";
import { DocTableCell } from "@microsoft/api-documenter/lib/nodes/DocTableCell";
import { DocTableRow } from "@microsoft/api-documenter/lib/nodes/DocTableRow";

export const initConfiguration = (): TSDocConfiguration => {
  const configuration = new TSDocConfiguration();

  configuration.setSupportForTags(
    [
      StandardTags.alpha,
      StandardTags.beta,
      StandardTags.defaultValue,
      StandardTags.deprecated,
      StandardTags.eventProperty,
      StandardTags.example,
      StandardTags.inheritDoc,
      StandardTags.internal,
      StandardTags.link,
      StandardTags.override,
      StandardTags.packageDocumentation,
      StandardTags.param,
      StandardTags.privateRemarks,
      StandardTags.public,
      StandardTags.readonly,
      StandardTags.remarks,
      StandardTags.returns,
      StandardTags.sealed,
      StandardTags.throws,
      StandardTags.virtual,
    ],
    true
  );

  configuration.docNodeManager.registerDocNodes("@micrososft/api-documenter", [
    {
      docNodeKind: "EmphasisSpan",
      constructor: DocEmphasisSpan,
    },
    { docNodeKind: "Heading", constructor: DocHeading },
    { docNodeKind: "NoteBox", constructor: DocNoteBox },
    { docNodeKind: "Table", constructor: DocTable },
    { docNodeKind: "TableCell", constructor: DocTableCell },
    { docNodeKind: "TableRow", constructor: DocTableRow },
  ]);

  configuration.docNodeManager.registerAllowableChildren("EmphasisSpan", [
    "PlainText",
    "SoftBreak",
  ]);

  configuration.docNodeManager.registerAllowableChildren("Section", [
    "Heading",
    "NoteBox",
    "Table",
  ]);

  configuration.docNodeManager.registerAllowableChildren("Paragraph", [
    "EmphasisSpan",
  ]);

  return configuration;
};
