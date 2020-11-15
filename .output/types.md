---
title: Types
sidebar_label: Types
---
  
## ActionProps

- WidgetActionProps<!-- -->&lt;WidgetState&gt; 
- WidgetInDashboardActionProps<!-- -->&lt;WidgetState&gt;

## AMetaData

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  isFolder | boolean |  |
|  name | string |  |

## ApiKey

- "sentinel" 
- "jwt" 
- "pivot" 
- "repository" 
- "content" 
- "reporting"

## APlugin

Type extended by every plugin type. Each plugin must specify its key and can come with its own translations.

{<br />&nbsp;&nbsp key: string;<br />&nbsp;&nbsp translations?: {<br />&nbsp;&nbsp&nbsp;&nbsp \[locale: string\]: IntlConfig<!-- -->\["messages"\]; <br />&nbsp;&nbsp}; <br />}

## Argument

- "PLACE\_HOLDER" /\*\* \* boolean, int, double, date, … \*/ 
- "SCALAR" /\*\* \* function keyword \*/ 
- "KEYWORD" /\*\* \* string (means will be surrounded by single quotes) \*/ 
- "STRING"

## AWidgetState

The state of any widget. Note that this interface is typically extended by each individual widget plugin.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  filters | FilterType\[\] |  |
|  isFullScreen | boolean |  |
|  name | string |  |
|  widgetKey | string |  |

## Axis

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  hierarchies | {<br />&nbsp;&nbsp dimension: [DimensionName](./types#dimensionname);<br />&nbsp;&nbsp hierarchy: [HierarchyName](./types#hierarchyname); <br />}\[\] |  |
|  id | [AxisId](./types#axisid) |  |
|  maxLevelPerHierarchy | number\[\] |  |
|  positions | [Member](./types#member)\[\]\[\] |  |
|  range | [AxisRange](./types#axisrange) |  |

## AxisId

- -1 
- 0 
- 1 
- 2 
- 3 
- 4

## AxisName

- "COLUMNS" 
- "0" 
- "ROWS" 
- "1" 
- "SLICER" 
- "PAGES"

## AxisRange

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  axisLength | number |  |
|  entireAxis | boolean |  |
|  from | number |  |
|  to | number |  |

## Catalog

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  cubes | [Cube](./types#cube)\[\] |  |
|  name | string |  |

## Cell

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  formattedValue | string |  |
|  ordinal | number |  |
|  properties | {<br />&nbsp;&nbsp \[key in [CellProperty](./types#cellproperty)\]?: null \| string \| number \| undefined; <br />} |  |
|  value | number \| string |  |

## CellProperty

- "BACK\_COLOR" 
- "DISPLAY\_INFO" 
- "FORE\_COLOR" 
- "FONT\_NAME" 
- "FONT\_FLAGS" 
- "FONT\_SIZE" 
- "FORMAT\_STRING"

## CellSet

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  axes | [Axis](./types#axis)\[\] |  |
|  cells | [Cell](./types#cell)\[\] |  |
|  cube | [CubeName](./types#cubename) |  |
|  defaultMembers | [DefaultMember](./types#defaultmember)\[\] |  |
|  epoch | number |  |

## CompoundIdType

Potential values for the `type` property that distinguishes [MdxCompoundIdentifier](./types#mdxcompoundidentifier)<!-- -->s.

- "unknown" 
- "dimension" 
- "hierarchy" 
- "level" 
- "member" 
- "namedSet"

## ContentEntry

{<br />&nbsp;&nbsp canRead?: boolean;<br />&nbsp;&nbsp canWrite?: boolean;<br />&nbsp;&nbsp content?: Content;<br />&nbsp;&nbsp isDirectory?: boolean;<br />&nbsp;&nbsp lastEditor?: string;<br />&nbsp;&nbsp name?: string;<br />&nbsp;&nbsp owners: string\[\];<br />&nbsp;&nbsp readers: string\[\];<br />&nbsp;&nbsp timestamp?: number; <br />}

## ContentNode

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  id | string |  |
|  metaData | MetaData |  |
|  type | ContentNodeType |  |

## ContentRecord

{<br />&nbsp;&nbsp children?: {<br />&nbsp;&nbsp&nbsp;&nbsp \[childName: string\]: [ContentRecord](./types#contentrecord)<!-- -->&lt;Content&gt;; <br />&nbsp;&nbsp};<br />&nbsp;&nbsp entry: [ContentEntry](./types#contententry)<!-- -->&lt;Content&gt;; <br />}

## ContentType

- "dashboard" 
- "widget"

## ContextValue

- number 
- boolean 
- string

## ContextValueDefinition

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  category | string |  |
|  description | string |  |
|  name | string |  |
|  type | string |  |

## Cube

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  contextValues | [DefaultContextValue](./types#defaultcontextvalue)\[\] |  |
|  defaultMembers | [DefaultMember](./types#defaultmember)\[\] |  |
|  dimensions | [Dimension](./types#dimension)\[\] |  |
|  kpis | [Kpi](./types#kpi)\[\] |  |
|  measureGroups | [MeasureGroup](./types#measuregroup)\[\] |  |
|  measures | [Measure](./types#measure)\[\] |  |
|  name | [CubeName](./types#cubename) |  |
|  sets | [Set](./types#set)\[\] |  |

## CubeName

string

## DashboardContent

The content of the a dashboard file on the Content Server.

Omit<!-- -->&lt;[DashboardState](./types#dashboardstate)<!-- -->&lt;[MdxString](./types#mdxstring)<!-- -->&gt;, "name"&gt;

## DashboardMetaData

The content of a dashboard meta data file on the Content Server, representing this dashboard in the dashboards tree.

[AMetaData](./types#ametadata)

## DashboardPageState

The state of a dashboard page. `content` contains the state of each leaf. `layout` represents how they are laid out.

{<br />&nbsp;&nbsp content: {<br />&nbsp;&nbsp&nbsp;&nbsp \[leafKey: string\]: WidgetStateType; <br />&nbsp;&nbsp};<br />&nbsp;&nbsp filters?: FilterType\[\];<br />&nbsp;&nbsp layout: [Layout](./types#layout)<!-- -->;<br />&nbsp;&nbsp name: string; <br />}

## DashboardProps

Omit<!-- -->&lt;<!-- -->BasicDashboardProps<!-- -->, "LeafComponent"&gt;

## DashboardState

The state of a dashboard. `pages` contains the state of each page.

{<br />&nbsp;&nbsp filters?: FilterType\[\];<br />&nbsp;&nbsp name?: string;<br />&nbsp;&nbsp pages: {<br />&nbsp;&nbsp&nbsp;&nbsp \[pageKey: string\]: [DashboardPageState](./types#dashboardpagestate)<!-- -->&lt;FilterType&gt;; <br />&nbsp;&nbsp};<br />&nbsp;&nbsp pagesOrder: string\[\]; <br />}

## DataModel

Describes the data contained in a server.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  catalogs | [Catalog](./types#catalog)\[\] |  |
|  contextValues | [ContextValueDefinition](./types#contextvaluedefinition)\[\] |  |

## DataModelNode

A data model tree node

- CatalogNode 
- CubeNode 
- DimensionNode 
- HierarchyNode 
- KpiNode 
- KpisRootNode 
- LevelNode 
- MeasuresFolderNode 
- MeasuresRootNode 
- MeasureNode 
- ServerNode 
- SetNode 
- SetsRootNode

## DataVisualizationWidgetState

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  mapping | DataVisualizationWidgetMapping |  |
|  styleAttributes | string\[\] |  |
|  switchedTo | string |  |

## DefaultContextValue

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  name | string |  |
|  value | string |  |

## DefaultMember

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  captionPath | string\[\] |  |
|  dimension | [DimensionName](./types#dimensionname) |  |
|  hierarchy | [HierarchyName](./types#hierarchyname) |  |
|  path | string\[\] |  |

## Dimension

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  defaultHierarchy | [HierarchyName](./types#hierarchyname) |  |
|  description | string |  |
|  hierarchies | [Hierarchy](./types#hierarchy)\[\] |  |
|  name | [DimensionName](./types#dimensionname) |  |
|  type | string |  |
|  visible | boolean |  |

## DimensionName

The readable name of a dimension in a cube.

string
<b>For example:</b>

const dimensionName = 'Geography';

## EditorProps

Props received by content and style editors.

[ActionProps](./types#actionprops)<!-- -->&lt;WidgetState&gt;

## ElementType

Used for switching when visiting

- "Create" 
- "Drillthrough" 
- "Drop" 
- "Refresh" 
- "Select" 
- "SubSelect" 
- "Axis" 
- "CaseExpression" 
- "CompoundIdentifier" 
- "Formula" 
- "Function" 
- "From" 
- "Identifier" 
- "Literal" 
- "MemberPropertyDefinition" 
- "StringFormulaSpecification" 
- "When"

## EventListenerPlugin

Plugin useful to define a function that should be executed when a DOM event is fired on a widget. For example: function to execute on click on a pivot table.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  onEvent | (e: React.SyntheticEvent, payload: EventListenerPayload&lt;WidgetState&gt;) =&gt; void |  |

## FormulaType

- "SET" 
- "MEMBER"

## Hierarchy

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  description | string |  |
|  levels | [Level](./types#level)\[\] |  |
|  name | [HierarchyName](./types#hierarchyname) |  |
|  slicing | boolean |  |
|  visible | boolean |  |

## HierarchyCoordinates

The dimension and hierarchy names identifying a hierarchy in a cube.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  dimensionName | [DimensionName](./types#dimensionname) |  |
|  hierarchyName | [HierarchyName](./types#hierarchyname) |  |
<b>For example:</b>

const hierarchyCoordinates = { dimensionName: 'Geography', hierarchyName: 'City' }<!-- -->;

## HierarchyName

The readable name of a hierarchy in a cube.

string
<b>For example:</b>

const hierarchyName = 'City';

## HierarchyUniqueName

A string representing the unique identifier of a hierarchy in a cube.

string
<b>For example:</b>

const hierarchyUniqueName = '\[Geography\].\[City\]';

## IconThemeContextValue

Theme for icon components.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  accentColor | string |  |
|  errorColor | string |  |
|  successColor | string |  |
|  warningColor | string |  |
|  whiteColor | string |  |

## Kpi

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  description | string |  |
|  goal | string |  |
|  name | string |  |
|  status | string |  |
|  statusPresenter | string |  |
|  value | string |  |

## KpiFunction

- "kpivalue" 
- "kpigoal" 
- "kpistatus" 
- "kpitrend" 
- "kpistart" 
- "kpiexpiry"

## Layout

ActiveUI 5 dashboard page layout Tree of widgets, not necessarily binary. Allows a more intuitive widget resizing behavior than the ActiveUI 4 binary layout.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  children | ([Layout](./types#layout) \| [LayoutLeaf](./types#layoutleaf))\[\] |  |
|  direction | "column" \| "row" |  |
|  size | number |  |

## LayoutLeaf

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  leafKey | string |  |
|  size | number |  |

## Level

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  description | string |  |
|  name | [LevelName](./types#levelname) |  |
|  type | string |  |

## LevelCoordinates

The dimension, hierarchy and level names identifying a hierarchy in a cube.

[HierarchyCoordinates](./types#hierarchycoordinates) &amp; {<br />&nbsp;&nbsp levelName: [LevelName](./types#levelname)<!-- -->; <br />}
<b>For example:</b>

const hierarchyCoordinates = { dimensionName: 'Geography', hierarchyName: 'City', levelName: 'City' }<!-- -->;

## LevelName

The readable name of a level in a cube.

string
<b>For example:</b>

const levelName = 'City';

## LevelUniqueName

A string representing the unique identifier of a level in a cube.

string
<b>For example:</b>

const levelUniqueName = '\[Geography\].\[City\].\[City\]';

## LoadingWidgetState

The state of a saved widget when it has been dropped and before it is replaced by a full `AWidgetState`

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  id | string |  |
|  name | string |  |
|  widgetKey | string |  |

## Locale

The locale of the user

string

## Mdx

The Abstract syntax tree of an [MdxString](./types#mdxstring)<!-- -->.

- [MdxExpression](./types#mdxexpression) 
- [MdxAxis](./types#mdxaxis) 
- [MdxFromClause](./types#mdxfromclause) 
- [MdxFormula](./types#mdxformula) 
- [MdxCreate](./types#mdxcreate) 
- [MdxDrillthrough](./types#mdxdrillthrough) 
- [MdxDrop](./types#mdxdrop) 
- [MdxMemberPropertyDefinition](./types#mdxmemberpropertydefinition) 
- [MdxRefresh](./types#mdxrefresh) 
- [MdxSelect](./types#mdxselect) 
- [MdxSubSelect](./types#mdxsubselect) 
- [MdxWhenClause](./types#mdxwhenclause)

## MdxAxis

An [Mdx](./types#mdx) representing an axis such as `ROWS` or `COLUMNS` and its associated expression.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "Axis" |  |
|  expression | [MdxExpression](./types#mdxexpression) |  |
|  name | [AxisName](./types#axisname) |  |
|  nonEmpty | boolean |  |
|  properties | [Mdx](./types#mdx)\[\] |  |

## MdxCaseExpression

An [Mdx](./types#mdx) representing a `CASE` statement.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  cases | [MdxWhenClause](./types#mdxwhenclause)\[\] |  |
|  elementType | "CaseExpression" |  |
|  elseExp | [MdxExpression](./types#mdxexpression) |  |
|  match | [MdxExpression](./types#mdxexpression) \| null |  |
|  name | string |  |

## MdxCompoundIdentifier

The subset of [Mdx](./types#mdx)<!-- -->s that identify something using hierarchical dot notation, as in the MDX `[Measures].[MyMeasure]`<!-- -->. Each segment is an MdxIndentifier<!-- -->.

- [MdxUnknownCompoundIdentifier](./types#mdxunknowncompoundidentifier) 
- [MdxDimensionCompoundIdentifier](./types#mdxdimensioncompoundidentifier) 
- [MdxHierarchyCompoundIdentifier](./types#mdxhierarchycompoundidentifier) 
- [MdxLevelCompoundIdentifier](./types#mdxlevelcompoundidentifier) 
- [MdxMemberCompoundIdentifier](./types#mdxmembercompoundidentifier) 
- [MdxMeasureCompoundIdentifier](./types#mdxmeasurecompoundidentifier) 
- [MdxNamedSetCompoundIdentifier](./types#mdxnamedsetcompoundidentifier)

## MdxCreate

An [Mdx](./types#mdx) representing a `CREATE` statement.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  cubeName | [CubeName](./types#cubename) |  |
|  elementType | "Create" |  |
|  evaluationType | Todo |  |
|  hiddenType | Todo |  |
|  session | Todo |  |

## MdxDimensionCompoundIdentifier

A [MdxCompoundIdentifier](./types#mdxcompoundidentifier) that represents a dimension.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  dimension | [DimensionName](./types#dimensionname) |  |
|  elementType | "CompoundIdentifier" |  |
|  identifiers | [MdxIdentifier](./types#mdxidentifier)\[\] |  |
|  type | "dimension" |  |

## MdxDrillthrough

An [Mdx](./types#mdx) representing a `DRILLTHROUGH` statement.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  columns | [MdxExpression](./types#mdxexpression)\[\] |  |
|  elementType | "Drillthrough" |  |
|  firstRow | number |  |
|  maxRows | number |  |
|  select | [MdxSelect](./types#mdxselect) |  |

## MdxDrop

A type of [Mdx](./types#mdx)<!-- -->.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  cubeName | [CubeName](./types#cubename) |  |
|  elementType | "Drop" |  |
|  session | Todo |  |

## MdxExpression

The subset of [Mdx](./types#mdx)<!-- -->s that can be used in expression contexts such as the expression of a calculated measure.

- [MdxLiteral](./types#mdxliteral) 
- [MdxIdentifier](./types#mdxidentifier) 
- [MdxCompoundIdentifier](./types#mdxcompoundidentifier) 
- [MdxCaseExpression](./types#mdxcaseexpression) 
- [MdxFunction](./types#mdxfunction) 
- [MdxStringFormulaSpecification](./types#mdxstringformulaspecification)

## MdxFormula

An [Mdx](./types#mdx) representing an formula definition in the `WITH` clause of a [MdxSelect](./types#mdxselect)<!-- -->. An example formula: `WITH Member [Measures].[MyConstant] AS 42`<!-- -->.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "Formula" |  |
|  expression | [MdxExpression](./types#mdxexpression) |  |
|  inlined | boolean \| undefined |  |
|  name | [MdxNamedSetCompoundIdentifier](./types#mdxnamedsetcompoundidentifier) \| [MdxMemberCompoundIdentifier](./types#mdxmembercompoundidentifier) |  |
|  properties | [MdxMemberPropertyDefinition](./types#mdxmemberpropertydefinition)\[\] |  |
|  type | string |  |

## MdxFromClause

An [Mdx](./types#mdx) representing a named cube for the `FROM` clause of a [MdxSelect](./types#mdxselect)<!-- -->. Does not represent a subselect expression in a `FROM` clause – that is represented by a [MdxSubSelect](./types#mdxsubselect) instead.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  cubeName | [CubeName](./types#cubename) |  |
|  elementType | "From" |  |

## MdxFunction

An [Mdx](./types#mdx) representing a function call. Some functions are called with syntax that makes them look like an operator or part of the language; see [Syntax](./types#syntax) for the different syntaxes for calling functions.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  arguments | [MdxExpression](./types#mdxexpression)\[\] |  |
|  elementType | "Function" |  |
|  name | string |  |
|  syntax | [Syntax](./types#syntax) |  |

## MdxHierarchyCompoundIdentifier

A [MdxCompoundIdentifier](./types#mdxcompoundidentifier) that represents a hierarchy.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  dimension | [DimensionName](./types#dimensionname) |  |
|  elementType | "CompoundIdentifier" |  |
|  hierarchy | [HierarchyName](./types#hierarchyname) |  |
|  identifiers | [MdxIdentifier](./types#mdxidentifier)\[\] |  |
|  type | "hierarchy" |  |

## MdxIdentifier

An [Mdx](./types#mdx) representing an identifier – the name of a hierarchy, level, measure, KPI, etc. For example, this could represent the MDX `Geography` or `[Geography]`<!-- -->. A [MdxCompoundIdentifier](./types#mdxcompoundidentifier) is made of these separated by dots.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "Identifier" |  |
|  quoting | [Quoting](./types#quoting) |  |
|  value | string |  |

## MdxKPIFunction

[MdxFunction](./types#mdxfunction) &amp; {<br />&nbsp;&nbsp name: [KpiFunction](./types#kpifunction)<!-- -->; <br />}

## MdxLevelCompoundIdentifier

A [MdxCompoundIdentifier](./types#mdxcompoundidentifier) that represents a level.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  dimension | [DimensionName](./types#dimensionname) |  |
|  elementType | "CompoundIdentifier" |  |
|  hierarchy | [HierarchyName](./types#hierarchyname) |  |
|  identifiers | [MdxIdentifier](./types#mdxidentifier)\[\] |  |
|  level | [LevelName](./types#levelname) |  |
|  type | "level" |  |

## MdxLiteral

An [Mdx](./types#mdx) representing a literal value such as a number or string.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "Literal" |  |
|  type | [Argument](./types#argument) |  |
|  value | string |  |

## MdxLookupFunction

[MdxFunction](./types#mdxfunction) &amp; {<br />&nbsp;&nbsp name: "lookup"; <br />}

## MdxMeasure

- [MdxMeasureCompoundIdentifier](./types#mdxmeasurecompoundidentifier) 
- [MdxKPIFunction](./types#mdxkpifunction)

## MdxMeasureCompoundIdentifier

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  dimensionName | "Measures" |  |

## MdxMemberCompoundIdentifier

A [MdxCompoundIdentifier](./types#mdxcompoundidentifier) that represents a member.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  dimension | [DimensionName](./types#dimensionname) |  |
|  elementType | "CompoundIdentifier" |  |
|  hierarchy | [HierarchyName](./types#hierarchyname) |  |
|  identifiers | [MdxIdentifier](./types#mdxidentifier)\[\] |  |
|  level | [LevelName](./types#levelname) |  |
|  path | string\[\] |  |
|  type | "member" |  |

## MdxMemberPropertyDefinition

An [Mdx](./types#mdx) representing the definition of a property of a member that is defined in a [MdxFormula](./types#mdxformula)<!-- -->. Some example property names are `FORE_COLOR` and `FONT_FLAGS`<!-- -->.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "MemberPropertyDefinition" |  |
|  expression | [MdxExpression](./types#mdxexpression) |  |
|  name | string |  |

## MdxNamedSet

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  cube | [CubeName](./types#cubename) |  |
|  description | string |  |
|  expression | [MdxString](./types#mdxstring) |  |
|  name | [AxisName](./types#axisname) |  |
|  serverUrl | string |  |
|  type | "namedSet" |  |

## MdxNamedSetCompoundIdentifier

A [MdxCompoundIdentifier](./types#mdxcompoundidentifier) that represents a named set.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "CompoundIdentifier" |  |
|  identifiers | [MdxIdentifier](./types#mdxidentifier)\[\] |  |
|  namedSet | [SetName](./types#setname) |  |
|  type | "namedSet" |  |

## MdxOrderFunction

An [MdxFunction](./types#mdxfunction) that represents a call to the \[`Order` function\](https://docs.microsoft.com/en-us/sql/mdx/order-mdx).

- [MdxFunction](./types#mdxfunction) &amp; [MdxFunction](./types#mdxfunction) &amp; { arguments: \[[MdxExpression](./types#mdxexpression)<!-- -->, [MdxExpression](./types#mdxexpression)<!-- -->, [OrderModeMdxLiteral](./types#ordermodemdxliteral)<!-- -->\] 
- \[[MdxExpression](./types#mdxexpression)<!-- -->, [MdxExpression](./types#mdxexpression)<!-- -->\]; name: "Order"; }

## MdxRefresh

A type of [Mdx](./types#mdx)<!-- -->.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "Refresh" |  |
|  id | string |  |

## MdxSelect

An [Mdx](./types#mdx) representing a SELECT statement.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  axes | [MdxAxis](./types#mdxaxis)\[\] |  |
|  cellProps | string\[\] |  |
|  elementType | "Select" |  |
|  from | [MdxSubSelect](./types#mdxsubselect) \| [MdxFromClause](./types#mdxfromclause) |  |
|  slicerAxis | [MdxSlicerAxis](./types#mdxsliceraxis) \| null |  |
|  withClause | [MdxFormula](./types#mdxformula)\[\] |  |

## MdxSlicerAxis

[MdxAxis](./types#mdxaxis) &amp; {<br />&nbsp;&nbsp name: "SLICER"; <br />}

## MdxString

A string representing an \[MDX\](https://en.wikipedia.org/wiki/MultiDimensional\_eXpressions) query or a part of one.

string
<b>For example:</b>

```tsx
const mdx = 'SELECT\n  [Measures].[contributors.COUNT] ON COLUMNS\n  FROM [EquityDerivativesCube]';
```

<b>For example:</b>

```tsx
const mdx = '[Measures].[contributors.COUNT]';
```

<b>For example:</b>

```tsx
const mdx = '"a string in MDX"';
```

<b>For example:</b>

```tsx
const mdx = '123';
```

## MdxStringFormulaSpecification

A type of [Mdx](./types#mdx)<!-- -->.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  definedType | Todo |  |
|  elementType | "StringFormulaSpecification" |  |
|  name | string |  |
|  stringExpression | string |  |

## MdxSubSelect

An [Mdx](./types#mdx) representing a subselect expression.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  axes | [MdxAxis](./types#mdxaxis)\[\] |  |
|  elementType | "SubSelect" |  |
|  from | [MdxSubSelect](./types#mdxsubselect) \| [MdxFromClause](./types#mdxfromclause) |  |
|  nonVisual | boolean |  |
|  slicerAxis | [MdxSlicerAxis](./types#mdxsliceraxis) \| null |  |

## MdxUnknownCompoundIdentifier

A [MdxCompoundIdentifier](./types#mdxcompoundidentifier) representing an unknown identifier.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "CompoundIdentifier" |  |
|  identifiers | [MdxIdentifier](./types#mdxidentifier)\[\] |  |
|  type | "unknown" |  |
<b>Remarks:</b>

This type is used for any mdx compound identifier whose type cannot be identified. It is the case in particular for any member but measures when not providing a data model to the parser. It does apply to members when the dimension is not referenced by the data model but not to members where the hierarchy is unknown.

## MdxWhenClause

An [Mdx](./types#mdx) representing a `WHEN` clause of a [MdxCaseExpression](./types#mdxcaseexpression)<!-- -->, including the clause’s `THEN` true result expression.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  elementType | "When" |  |
|  then | [MdxExpression](./types#mdxexpression) |  |
|  when | [MdxExpression](./types#mdxexpression) |  |

## Measure

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  folder | string |  |
|  formatString | string |  |
|  name | [MeasureName](./types#measurename) |  |
|  type | string |  |
|  visible | boolean |  |

## MeasureGroup

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  description | string |  |
|  name | string |  |

## MeasureName

The readable name of a measure in a cube.

string
<b>For example:</b>

const measureName = 'pnl.SUM';

## MeasureUniqueName

A string representing the unique identifier of a measure in a cube.

string
<b>For example:</b>

const measureUniqueName = '\[Measures\].\[pnl.SUM\]';

## Member

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  captionPath | string\[\] |  |
|  namePath | string\[\] |  |
|  properties | {<br />&nbsp;&nbsp \[key in [CellProperty](./types#cellproperty)\]?: null \| string \| number \| undefined; <br />} |  |

## MenuItemPlugin

Plugin useful for items in the context menus of widgets or in the top right widget menu.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  Component | ComponentType&lt;[MenuItemProps](./types#menuitemprops)&lt;WidgetState&gt;&gt; |  |

## MenuItemProps

[ActionProps](./types#actionprops)<!-- -->&lt;WidgetState&gt; &amp; AntMenuItemProps

## OrderMode

- "ASC" 
- "DESC" 
- "BASC" 
- "BDESC"

## OrderModeMdxLiteral

A [MdxLiteral](./types#mdxliteral) that represents one of the [OrderMode](./types#ordermode) strings.

[MdxLiteral](./types#mdxliteral) &amp; {<br />&nbsp;&nbsp type: "STRING";<br />&nbsp;&nbsp value: [OrderMode](./types#ordermode)<!-- -->; <br />}

## Palette

Contains colors used by ActiveUI components.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  backgroundColor | Color |  |
|  black | Color |  |
|  disabledTextColor | Color |  |
|  dropHintBorderColor | Color |  |
|  dropHintColor | Color |  |
|  errorColor | Color |  |
|  grayScale | Color\[\] |  |
|  primaryColor | Color |  |
|  selectionColor | Color |  |
|  shadowColor | Color |  |
|  successColor | Color |  |
|  textColor | Color |  |
|  warningColor | Color |  |
|  white | Color |  |

## PlotlyWidgetState

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  colors | ChartColors |  |
|  isTextVisible | boolean |  |
|  opacity | number |  |
|  plotly | PlotlyOverrides |  |
|  subplotLimits | SubplotLimits |  |

## Plugin

Any type of ActiveUI plugin.

- [EventListenerPlugin](./types#eventlistenerplugin)<!-- -->&lt;any&gt; 
- [MenuItemPlugin](./types#menuitemplugin)<!-- -->&lt;any&gt; 
- [ThemePlugin](./types#themeplugin) 
- [TitleBarButtonPlugin](./types#titlebarbuttonplugin)<!-- -->&lt;any&gt; 
- [WidgetPlugin](./types#widgetplugin)<!-- -->&lt;any&gt;

## PluginPalette

The colors theme plugins can define and from which the whole palette is derived.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  primaryColor | Color |  |

## PluginRegistry

All ActiveUI plugins registered by the application using the SDK.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  "event-listener" | [PluginsOfType](./types#pluginsoftype)&lt;[EventListenerPlugin](./types#eventlistenerplugin)&lt;any&gt;&gt; |  |
|  "menu-item" | [PluginsOfType](./types#pluginsoftype)&lt;[MenuItemPlugin](./types#menuitemplugin)&lt;any&gt;&gt; |  |
|  "titlebar-button" | [PluginsOfType](./types#pluginsoftype)&lt;[TitleBarButtonPlugin](./types#titlebarbuttonplugin)&lt;any&gt;&gt; |  |
|  theme | [PluginsOfType](./types#pluginsoftype)&lt;[ThemePlugin](./types#themeplugin)&gt; |  |
|  widget | [PluginsOfType](./types#pluginsoftype)&lt;[WidgetPlugin](./types#widgetplugin)&lt;any&gt;&gt; |  |

## PluginsOfType

The plugins of a certain type (e.g. all registered widget plugins)



## Preset

Preset containing ActiveUI plugins. Useful to regroup a set of plugins together so that they can easily be imported and registered.

[PluginRegistry](./types#pluginregistry)

## Query

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  context | {<br />&nbsp;&nbsp \[key: string\]: [ContextValue](./types#contextvalue); <br />} | Context values usable as input for server-side calculations. E.g. the confidence level for value at risk calculation. |
|  mdx | T | Query to execute. |
|  ranges | {<br />&nbsp;&nbsp \[axisId in [AxisId](./types#axisid)\]?: [QueryRange](./types#queryrange); <br />} | Ranges of positions that should be returned by the server. E.g. "only return the first 100 rows and the first 20 columns". |
|  updateMode | [UpdateMode](./types#updatemode) | Whether the query is only run once, or kept open in order to receive real-time updates. |

## QueryError

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  errorChain | {<br />&nbsp;&nbsp type: string;<br />&nbsp;&nbsp message: string; <br />}\[\] |  |
|  stackTrace | string |  |

## QueryRange

The range of results to fetch, in the case of infinite scrolling.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  from | number |  |
|  to | number |  |

## QueryResult

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  data | [CellSet](./types#cellset) |  |
|  error | [QueryError](./types#queryerror) |  |
|  isLoading | boolean |  |

## Quoting

- "QUOTED" /\*\* \* Unquoted identifier, for example \`Geography\`. \*/ 
- "UNQUOTED" /\*\* \* Identifier quoted with an ampersand to indicate a key value, for example the second segment in \`\[Geography\].&amp;\[France\]\`. \*/ 
- "AMP\_QUOTED"

## RecentlyOpenedLog

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  id | string |  |
|  lastOpened | number |  |

## Selection

- {<br />&nbsp;&nbsp headers?: Partial<!-- -->&lt;{<br />&nbsp;&nbsp&nbsp;&nbsp \[axisName in [AxisName](./types#axisname)<!-- -->\]: [Tuple](./types#tuple)<!-- -->\[\]; <br />&nbsp;&nbsp}&gt;; cells?: { tuple: [Tuple](./types#tuple)<!-- -->; value?: number 
- string; }\[\]; }

## ServiceVersion

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  id | string |  |
|  restPath | string |  |
|  wsPath | string |  |

## Set

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  caption | string |  |
|  description | string |  |
|  expression | string |  |
|  name | [SetName](./types#setname) |  |

## SetName

string

## Side

- "center" 
- "top" 
- "right" 
- "bottom" 
- "left"

## Syntax

- "Property" /\*\* \* Function style, e.g. \`FUNCTION()\` or \`FUNCTION(args)\`. \*/ 
- "Function" /\*\* \* Method style, e.g. \`object.METHOD()\` or \`object.METHOD(args)\`. \*/ 
- "Method" /\*\* \* Infix style, e.g. \`arg OPERATOR arg\` (typically for operators such as '+' or 'AND'). \*/ 
- "Infix" /\*\* \* Prefix style, e.g. \`OPERATOR arg\` (typically for unary operators such as '-'). \*/ 
- "Prefix" /\*\* \* Postfix style, e.g. \`arg OPERATOR\` \*/ 
- "Postfix" /\*\* \* Parentheses style, e.g. \`(ARG,...)\` (used for tuple expressions) \*/ 
- "Parentheses" /\*\* \* Braces style, e.g. \`{<br />&nbsp;&nbspARG, ...<br />}\` (used for set expressions) \*/ 
- "Braces"

## ThemePlugin

Defines the colors used by the components of ActiveUI

[APlugin](./types#aplugin) &amp; {<br />&nbsp;&nbsp isDark?: boolean;<br />&nbsp;&nbsp palette: [PluginPalette](./types#pluginpalette)<!-- -->; <br />}

## TitleBarButtonPlugin

Plugin useful to define buttons accessible next to the top right menu of widgets.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  Component | ComponentType&lt;[ActionProps](./types#actionprops)&lt;WidgetState&gt;&gt; |  |

## TranslationParameters



## TreeObject

T &amp; {<br />&nbsp;&nbsp children?: [TreeObject](./types#treeobject)<!-- -->&lt;T&gt;\[\]; <br />}

## Tuple

([HierarchyCoordinates](./types#hierarchycoordinates) &amp; [Member](./types#member)<!-- -->)\[\]

## TupleCoordinates

Coordinates identifying a [Tuple](./types#tuple)<!-- -->.

MemberCoordinates<!-- -->\[\]

## UpdateMode

Update mode for MDX query.

- "once" 
- "realTime"

## Versions

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  apis | {<br />&nbsp;&nbsp \[apiKey in [ApiKey](./types#apikey)\]: {<br />&nbsp;&nbsp&nbsp;&nbsp versions: \[[ServiceVersion](./types#serviceversion)\]; <br />&nbsp;&nbsp}; <br />} |  |
|  serverVersion | string |  |
|  version | number |  |

## WidgetAttribute

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  isMainAxis | boolean |  |
|  maxNumberOfFields | number |  |
|  role | AttributeRole |  |

## WidgetContent

The content of the file to fetch in order to render a dashboard. Like SerializedDashboardState, but name and value.widgetKey are omitted.

- Omit<!-- -->&lt;[AWidgetState](./types#awidgetstate)<!-- -->&lt;[MdxString](./types#mdxstring)<!-- -->&gt;, "name" 
- "widgetKey"&gt;

## WidgetMetaData

The content of the file to fetch in order to render the node representing a widget in the widgets tree.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  widgetKey | string |  |

## WidgetPlugin

Plugin defining a component that can be used in a dashboard.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  attributes | WidgetAttributes |  |
|  category | WidgetCategory |  |
|  Component | ComponentType&lt;[WidgetPluginProps](./types#widgetpluginprops)&lt;WidgetState&gt;&gt; |  |
|  contentEditor | ComponentType&lt;[EditorProps](./types#editorprops)&lt;WidgetState&gt;&gt; |  |
|  contextMenuItems | string\[\] |  |
|  doesSupportMeasuresRedirection | boolean |  |
|  eventListeners | string\[\] |  |
|  Icon | ComponentType&lt;IconProps&gt; |  |
|  initialState | WidgetState |  |
|  menuItems | string\[\] |  |
|  styleEditor | ComponentType&lt;[EditorProps](./types#editorprops)&lt;WidgetState&gt;&gt; |  |
|  subCategory | string |  |
|  titleBarButtons | string\[\] |  |

## WidgetPluginProps

Props received by a widget plugin component.

- WidgetProps<!-- -->&lt;WidgetState&gt; 
- WidgetInDashboardProps<!-- -->&lt;WidgetState&gt;

## WidgetWithQueryProps

Props received by a widget with a query

[WidgetPluginProps](./types#widgetpluginprops)<!-- -->&lt;WidgetState&gt; &amp; {<br />&nbsp;&nbsp queryResult: [QueryResult](./types#queryresult)<!-- -->; <br />}

## WidgetWithQueryState

The state of widgets using a query.

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  query | Partial&lt;[Query](./types#query)&lt;MdxType&gt;&gt; |  |
|  serverKey | string |  |

