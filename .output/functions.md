---
title: Functions
sidebar_label: Functions
---
  
## addLevel

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given level was added.

```typescript
addLevel(mdx, {
   dimensionName,
   hierarchyName,
   levelName,
   axisName,
   indexOnAxis,
   shouldCreateNonEmptyAxis, 
}, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  {<br />&nbsp;&nbsp dimensionName,<br />&nbsp;&nbsp hierarchyName,<br />&nbsp;&nbsp levelName,<br />&nbsp;&nbsp axisName,<br />&nbsp;&nbsp indexOnAxis,<br />&nbsp;&nbsp shouldCreateNonEmptyAxis, <br />} | {<br />&nbsp;&nbsp dimensionName: [DimensionName](./types#dimensionname);<br />&nbsp;&nbsp hierarchyName: [HierarchyName](./types#hierarchyname);<br />&nbsp;&nbsp levelName: [LevelName](./types#levelname);<br />&nbsp;&nbsp axisName?: [AxisName](./types#axisname);<br />&nbsp;&nbsp indexOnAxis?: number;<br />&nbsp;&nbsp shouldCreateNonEmptyAxis?: boolean; <br />} |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## addMeasure

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given measure was added. Does not mutate mdx.

```typescript
addMeasure(mdx, options, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  options | {<br />&nbsp;&nbsp measureName: [MeasureName](./types#measurename);<br />&nbsp;&nbsp measureIndex?: number;<br />&nbsp;&nbsp shouldCreateNonEmptyAxis?: boolean;<br />&nbsp;&nbsp axisName?: [AxisName](./types#axisname); <br />} |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## authenticate

Logs the current user in and retrieves her Jwt token. Only useful if you use the same authentication mechanism as the ActivePivot sandbox.

```typescript
authenticate(url, {
   username,
   password 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  url | string |  |
|  {<br />&nbsp;&nbsp username,<br />&nbsp;&nbsp password <br />} | {<br />&nbsp;&nbsp username: string;<br />&nbsp;&nbsp password: string; <br />} |  |

<b>Returns:</b>

Promise<!-- -->&lt;string&gt;

## collapse

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given tuple was collapsed. Does not mutate mdx.

```typescript
collapse(mdx, tupleCoordinates)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  tupleCoordinates | [TupleCoordinates](./types#tuplecoordinates) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## createContentFile

Asynchronously creates a dashboard or a widget file on the Content Server.

```typescript
createContentFile({
   url,
   content,
   contentServerVersion,
   metaData,
   owners,
   pathToFolder,
   readers,
   requestOptions,
   type, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp url,<br />&nbsp;&nbsp content,<br />&nbsp;&nbsp contentServerVersion,<br />&nbsp;&nbsp metaData,<br />&nbsp;&nbsp owners,<br />&nbsp;&nbsp pathToFolder,<br />&nbsp;&nbsp readers,<br />&nbsp;&nbsp requestOptions,<br />&nbsp;&nbsp type, <br />} | {<br />&nbsp;&nbsp url: string;<br />&nbsp;&nbsp content: Content;<br />&nbsp;&nbsp contentServerVersion: [ServiceVersion](./types#serviceversion);<br />&nbsp;&nbsp metaData: MetaData;<br />&nbsp;&nbsp owners: string\[\];<br />&nbsp;&nbsp pathToFolder?: string\[\];<br />&nbsp;&nbsp readers: string\[\];<br />&nbsp;&nbsp requestOptions?: RequestInit;<br />&nbsp;&nbsp type: [ContentType](./types#contenttype); <br />} |  |

<b>Returns:</b>

Promise<!-- -->&lt;string&gt;

## createContentFolder

Asynchronously creates a dashboard or a widget folder on the Content Server.

```typescript
createContentFolder({
   url,
   contentServerVersion,
   name,
   owners,
   pathToFolder,
   readers,
   requestOptions,
   type, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp url,<br />&nbsp;&nbsp contentServerVersion,<br />&nbsp;&nbsp name,<br />&nbsp;&nbsp owners,<br />&nbsp;&nbsp pathToFolder,<br />&nbsp;&nbsp readers,<br />&nbsp;&nbsp requestOptions,<br />&nbsp;&nbsp type, <br />} | {<br />&nbsp;&nbsp url: string;<br />&nbsp;&nbsp contentServerVersion: [ServiceVersion](./types#serviceversion);<br />&nbsp;&nbsp name: string;<br />&nbsp;&nbsp owners: string\[\];<br />&nbsp;&nbsp pathToFolder: string\[\];<br />&nbsp;&nbsp readers: string\[\];<br />&nbsp;&nbsp requestOptions?: RequestInit;<br />&nbsp;&nbsp type: [ContentType](./types#contenttype); <br />} |  |

<b>Returns:</b>

Promise<!-- -->&lt;string&gt;

## createPalette

Returns the [Palette](./types#palette) corresponding to a [ThemePlugin](./types#themeplugin)<!-- -->.

```typescript
createPalette(themePlugin)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  themePlugin | [ThemePlugin](./types#themeplugin) |  |

<b>Returns:</b>

[Palette](./types#palette)

## createPluginRegistry

Creates a `PluginsRegistry` containing `plugins` Note that a plugin defined in a `preset` can be individually overriden in `plugins`<!-- -->.

```typescript
createPluginRegistry({
   plugins,
   presets, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp plugins,<br />&nbsp;&nbsp presets, <br />} | {<br />&nbsp;&nbsp plugins?: [PluginRegistry](./types#pluginregistry);<br />&nbsp;&nbsp presets?: [PluginRegistry](./types#pluginregistry)\[\]; <br />} |  |

<b>Returns:</b>

[PluginRegistry](./types#pluginregistry)

## deleteContentFile

Asynchronously deletes a dashboard or a widget file on the Content Server.

```typescript
deleteContentFile({
   url,
   contentServerVersion,
   path,
   requestOptions,
   type, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp url,<br />&nbsp;&nbsp contentServerVersion,<br />&nbsp;&nbsp path,<br />&nbsp;&nbsp requestOptions,<br />&nbsp;&nbsp type, <br />} | {<br />&nbsp;&nbsp url: string;<br />&nbsp;&nbsp contentServerVersion: [ServiceVersion](./types#serviceversion);<br />&nbsp;&nbsp path: string\[\];<br />&nbsp;&nbsp requestOptions?: RequestInit;<br />&nbsp;&nbsp type: [ContentType](./types#contenttype); <br />} |  |

<b>Returns:</b>

Promise<!-- -->&lt;void&gt;

## deleteContentFolder

Asynchronously deletes a dashboard or a widget folder on the Content Server.

```typescript
deleteContentFolder({
   url,
   contentServerVersion,
   contentTree,
   path,
   requestOptions,
   type, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp url,<br />&nbsp;&nbsp contentServerVersion,<br />&nbsp;&nbsp contentTree,<br />&nbsp;&nbsp path,<br />&nbsp;&nbsp requestOptions,<br />&nbsp;&nbsp type, <br />} | {<br />&nbsp;&nbsp url: string;<br />&nbsp;&nbsp contentServerVersion: [ServiceVersion](./types#serviceversion);<br />&nbsp;&nbsp contentTree: [ContentRecord](./types#contentrecord);<br />&nbsp;&nbsp path: string\[\];<br />&nbsp;&nbsp requestOptions?: RequestInit;<br />&nbsp;&nbsp type: [ContentType](./types#contenttype); <br />} |  |

<b>Returns:</b>

Promise<!-- -->&lt;void&gt;

## expand

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given tuple was expanded. Does not mutate mdx.

```typescript
expand(mdx, tupleCoordinates, toLevel)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  tupleCoordinates | [TupleCoordinates](./types#tuplecoordinates) |  |
|  toLevel | string |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## fetchContentFile

Asynchronously returns the content of a dashboard or a widget file on the Content Server. Includes the file's metadata unless `withMetaData: false` is given, in which case `pathToFolder` is optional.

```typescript
fetchContentFile(params)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  params | FetchContentFileParameters |  |

<b>Returns:</b>

Promise<!-- -->&lt;Content \| void&gt;

## fetchContentTree

Returns the tree of all accessible dashboards or widgets.

```typescript
fetchContentTree({
   contentServerVersion,
   requestOptions,
   type,
   url, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp contentServerVersion,<br />&nbsp;&nbsp requestOptions,<br />&nbsp;&nbsp type,<br />&nbsp;&nbsp url, <br />} | {<br />&nbsp;&nbsp contentServerVersion: [ServiceVersion](./types#serviceversion);<br />&nbsp;&nbsp requestOptions?: RequestInit;<br />&nbsp;&nbsp type: [ContentType](./types#contenttype);<br />&nbsp;&nbsp url: string; <br />} |  |

<b>Returns:</b>

Promise<!-- -->&lt;[ContentRecord](./types#contentrecord)<!-- -->&lt;MetaData&gt;&gt;

## fetchDataModel

Asynchronously returns the [DataModel](./types#datamodel) available on the server at `serverUrl`<!-- -->.

```typescript
fetchDataModel(serverUrl, pivotVersion, options)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  serverUrl | string |  |
|  pivotVersion | [ServiceVersion](./types#serviceversion) |  |
|  options | RequestInit |  |

<b>Returns:</b>

Promise<!-- -->&lt;[DataModel](./types#datamodel)<!-- -->&gt;

## fetchRecentlyOpenedDashboards

Asynchronously returns the ids of the dashboards recently opened by the current user, ordered by last opened.

```typescript
fetchRecentlyOpenedDashboards(serverUrl, contentServerVersion, username, requestOptions)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  serverUrl | string |  |
|  contentServerVersion | [ServiceVersion](./types#serviceversion) |  |
|  username | string |  |
|  requestOptions | RequestInit |  |

<b>Returns:</b>

Promise<!-- -->&lt;[RecentlyOpenedLog](./types#recentlyopenedlog)<!-- -->\[\]&gt;

## fetchTranslations

Asynchronously returns the ActiveUI SDK translations for `locale`<!-- -->.

```typescript
fetchTranslations(pluginRegistry, locale)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  pluginRegistry | {<br />&nbsp;&nbsp \[key in PluginType\]?: [PluginsOfType](./types#pluginsoftype)&lt;[APlugin](./types#aplugin)&gt;; <br />} \| null |  |
|  locale | [Locale](./types#locale) |  |

<b>Returns:</b>

Promise<!-- -->&lt;<!-- -->IntlConfig<!-- -->\["messages"\]&gt;

## fetchVersions

Asynchronously returns the versions and paths of the services at `serverUrl`<!-- -->.

```typescript
fetchVersions(serverUrl)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  serverUrl | string |  |

<b>Returns:</b>

Promise<!-- -->&lt;[Versions](./types#versions)<!-- -->&gt;

## findContentNodes

Returns the nodes in `tree` with the given ids, indexed by id.

```typescript
findContentNodes(tree, ids, path, foundNodes)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  tree | [ContentRecord](./types#contentrecord)&lt;T&gt; |  |
|  ids | string\[\] |  |
|  path | string\[\] |  |
|  foundNodes | {<br />&nbsp;&nbsp \[id: string\]: {<br />&nbsp;&nbsp&nbsp;&nbsp node: [ContentRecord](./types#contentrecord)&lt;T&gt;;<br />&nbsp;&nbsp&nbsp;&nbsp pathToParentFolder: string\[\]; <br />&nbsp;&nbsp}; <br />} |  |

<b>Returns:</b>

{ \[id: string\]: { node: [ContentRecord](./types#contentrecord)<!-- -->&lt;T&gt;; pathToParentFolder: string\[\]; }; }

## getAntMenuItemProps

Returns the part of an action's menuItem's props that should be forwarded to the Ant Design menu item

```typescript
getAntMenuItemProps(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | [MenuItemProps](./types#menuitemprops)&lt;WidgetState&gt; |  |

<b>Returns:</b>

AntMenuItemProps

## getContentNodes

Returns the nodes useful to display a `ContentTree`<!-- -->.

```typescript
getContentNodes(structure, options, tree)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  structure | [ContentRecord](./types#contentrecord)&lt;T&gt; |  |
|  options | {<br />&nbsp;&nbsp rootNodeMetaData: T;<br />&nbsp;&nbsp areFilesVisible: boolean;<br />&nbsp;&nbsp getDragItem?: (id: string, metaData: T) =&gt; void; <br />} |  |
|  tree | [TreeObject](./types#treeobject)&lt;[ContentNode](./types#contentnode)&lt;T&gt;&gt; |  |

<b>Returns:</b>

[TreeObject](./types#treeobject)<!-- -->&lt;[ContentNode](./types#contentnode)<!-- -->&lt;T&gt;&gt;

## getCube

Returns the cube identified by `cubeName` in `dataModel`<!-- -->.

```typescript
getCube(dataModel, cubeName)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dataModel | [DataModel](./types#datamodel) |  |
|  cubeName | [CubeName](./types#cubename) |  |

<b>Returns:</b>

[Cube](./types#cube)

## getCubeName

Returns the name of the cube used in `mdx`<!-- -->, if any.

```typescript
getCubeName(mdx)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) \| [MdxSubSelect](./types#mdxsubselect) \| [MdxDrillthrough](./types#mdxdrillthrough) \| [MdxFromClause](./types#mdxfromclause) |  |

<b>Returns:</b>

[CubeName](./types#cubename)

## getDimension

Returns the dimension identified by `dimensionName` in `cube`<!-- -->.

```typescript
getDimension(dimensionName, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dimensionName | [DimensionName](./types#dimensionname) |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[Dimension](./types#dimension)

## getExpandedTuples

Returns the expanded tuples in `mdx`

```typescript
getExpandedTuples(mdx)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |

<b>Returns:</b>

[TupleCoordinates](./types#tuplecoordinates)<!-- -->\[\]

## getFilters

Returns the filters expressed in `mdx`<!-- -->.

```typescript
getFilters(mdx)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) \| [MdxSubSelect](./types#mdxsubselect) \| [MdxDrillthrough](./types#mdxdrillthrough) |  |

<b>Returns:</b>

{ mdx: [Mdx](./types#mdx)<!-- -->; paths: (string \| number)\[\]\[\]; }\[\]

## getHierarchy

Returns the hierarchy identified by `hierarchyCoordinates` in `cube`<!-- -->.

```typescript
getHierarchy(hierarchyCoordinates, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  hierarchyCoordinates | [HierarchyCoordinates](./types#hierarchycoordinates) |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[Hierarchy](./types#hierarchy)

## getLayoutPath

Returns the layoutPath of the widget identified by `leafKey` in `layout`<!-- -->.

```typescript
getLayoutPath(layout, leafKey)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  layout | [Layout](./types#layout) |  |
|  leafKey | string |  |

<b>Returns:</b>

number\[\]

## getLevel

Returns the level identified by `levelCoordinates` in `cube`<!-- -->.

```typescript
getLevel(levelCoordinates, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  levelCoordinates | [LevelCoordinates](./types#levelcoordinates) |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[Level](./types#level)

## getLevels

Returns the coordinates of every level used in `mdx`<!-- -->.

```typescript
getLevels(mdx, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [Mdx](./types#mdx) |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[LevelCoordinates](./types#levelcoordinates)<!-- -->\[\]

## getMeasure

Returns the measure identified by `measureName` in `cube`<!-- -->.

```typescript
getMeasure(measureName, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  measureName | string |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[Measure](./types#measure) \| undefined

## getMeasures

Returns the names of the measures used in `mdx`<!-- -->. Does not include formulas, but does include native measures used in formulas definitions.

```typescript
getMeasures(mdx)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |

<b>Returns:</b>

string\[\]

## getMeasuresAxis

Returns the name of the axis of `mdx` containing the measures.

```typescript
getMeasuresAxis(mdx)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |

<b>Returns:</b>

[AxisName](./types#axisname)

## getMetaData

Returns a dashboard or a widget's metadata, useful to display its corresponding node in a ContentTree.

```typescript
getMetaData(node, id)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  node | [ContentRecord](./types#contentrecord)&lt;MetaData&gt; |  |
|  id | string |  |

<b>Returns:</b>

MetaData

## getNode

Returns a reference to the node at the given path

```typescript
getNode(tree, path)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  tree | [TreeObject](./types#treeobject)&lt;T&gt; |  |
|  path | number\[\] |  |

<b>Returns:</b>

[TreeObject](./types#treeobject)<!-- -->&lt;T&gt;

## getPage

Returns the page at the specified index in the dashboard.

```typescript
getPage(dashboard, pageKey)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dashboard | [DashboardState](./types#dashboardstate) \| null \| undefined |  |
|  pageKey | string \| null |  |

<b>Returns:</b>

[DashboardPageState](./types#dashboardpagestate) \| undefined

## getPathToFolder

Looks for the file or folder with the given id in `tree` and returns the path (of ids) to its parent folder.

```typescript
getPathToFolder(tree, id, pathAccumulator)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  tree | [ContentRecord](./types#contentrecord) |  |
|  id | string |  |
|  pathAccumulator | string\[\] |  |

<b>Returns:</b>

string\[\] \| undefined

## getPluginsTranslations

Returns the translations of all plugins for the given locale

```typescript
getPluginsTranslations(plugins, locale)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  plugins | {<br />&nbsp;&nbsp \[key in PluginType\]?: [PluginsOfType](./types#pluginsoftype)&lt;[APlugin](./types#aplugin)&gt;; <br />} \| null |  |
|  locale | string |  |

<b>Returns:</b>

IntlConfig<!-- -->\["messages"\]

## getSort

Returns the [OrderMode](./types#ordermode) defining the sort and the [LevelCoordinates](./types#levelcoordinates) if it is alphabetical or the [TupleCoordinates](./types#tuplecoordinates) if it is numerical.

```typescript
getSort(mdx)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |

<b>Returns:</b>

{ levelCoordinates?: [LevelCoordinates](./types#levelcoordinates)<!-- -->; orderMode: [OrderMode](./types#ordermode) \| undefined; tupleCoordinates?: [TupleCoordinates](./types#tuplecoordinates)<!-- -->; }

## getWidget

Returns the widget with the specified key in the page at the specified index of the dashboard.

```typescript
getWidget(dashboard, pageKey, leafKey)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dashboard | [DashboardState](./types#dashboardstate) \| null \| undefined |  |
|  pageKey | string \| null |  |
|  leafKey | string \| null |  |

<b>Returns:</b>

[AWidgetState](./types#awidgetstate) \| [LoadingWidgetState](./types#loadingwidgetstate) \| undefined

## IconAddKpi

```typescript
IconAddKpi(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBrackets

```typescript
IconBrackets(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessAlert

```typescript
IconBusinessAlert(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessBrackets

```typescript
IconBusinessBrackets(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessCatalog

```typescript
IconBusinessCatalog(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChart

```typescript
IconBusinessChart(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartArea

```typescript
IconBusinessChartArea(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartBar

```typescript
IconBusinessChartBar(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartBullet

```typescript
IconBusinessChartBullet(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartClusteredBar

```typescript
IconBusinessChartClusteredBar(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartClusteredColumn

```typescript
IconBusinessChartClusteredColumn(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartClusteredColumnsAndLines

```typescript
IconBusinessChartClusteredColumnsAndLines(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartDonut

```typescript
IconBusinessChartDonut(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartGantt

```typescript
IconBusinessChartGantt(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartGauge

```typescript
IconBusinessChartGauge(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartLine

```typescript
IconBusinessChartLine(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartMapColumns

```typescript
IconBusinessChartMapColumns(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartMapPoints

```typescript
IconBusinessChartMapPoints(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartMapVectors

```typescript
IconBusinessChartMapVectors(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartPie

```typescript
IconBusinessChartPie(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartRadar

```typescript
IconBusinessChartRadar(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartScatter

```typescript
IconBusinessChartScatter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartStackedArea

```typescript
IconBusinessChartStackedArea(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartStackedArea100

```typescript
IconBusinessChartStackedArea100(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartStackedBar

```typescript
IconBusinessChartStackedBar(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartStackedBar100

```typescript
IconBusinessChartStackedBar100(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartStackedColumn

```typescript
IconBusinessChartStackedColumn(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartStackedColumn100

```typescript
IconBusinessChartStackedColumn100(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartTree

```typescript
IconBusinessChartTree(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessChartWaterfall

```typescript
IconBusinessChartWaterfall(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessContextValues

```typescript
IconBusinessContextValues(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessDrillthrough

```typescript
IconBusinessDrillthrough(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessEdit

```typescript
IconBusinessEdit(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessFilters

```typescript
IconBusinessFilters(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessHttp

```typescript
IconBusinessHttp(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessKpi

```typescript
IconBusinessKpi(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessMdxEditor

```typescript
IconBusinessMdxEditor(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessMessage

```typescript
IconBusinessMessage(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessMonitorList

```typescript
IconBusinessMonitorList(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessMonitorView

```typescript
IconBusinessMonitorView(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessNumeric

```typescript
IconBusinessNumeric(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessOther

```typescript
IconBusinessOther(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessParameterList

```typescript
IconBusinessParameterList(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessPivotTable

```typescript
IconBusinessPivotTable(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessPuzzle

```typescript
IconBusinessPuzzle(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessQuickFilter

```typescript
IconBusinessQuickFilter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessRichTextEditor

```typescript
IconBusinessRichTextEditor(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconBusinessTabular

```typescript
IconBusinessTabular(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconCatalog

```typescript
IconCatalog(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconClear

```typescript
IconClear(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconCollapse

```typescript
IconCollapse(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconConditionalFormatting

```typescript
IconConditionalFormatting(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconConnect

```typescript
IconConnect(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconContextValues

```typescript
IconContextValues(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconCsvExport

```typescript
IconCsvExport(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconCsvSeparator

```typescript
IconCsvSeparator(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconCube

```typescript
IconCube(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconDimension

```typescript
IconDimension(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconDrillthrough

```typescript
IconDrillthrough(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconExpand

```typescript
IconExpand(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconFileReadOnly

```typescript
IconFileReadOnly(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconFx

```typescript
IconFx(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconHideFilters

```typescript
IconHideFilters(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconHideSubTotals

```typescript
IconHideSubTotals(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconHideTotal

```typescript
IconHideTotal(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconHideWizard

```typescript
IconHideWizard(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconHierarchy

```typescript
IconHierarchy(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconKpi

```typescript
IconKpi(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartArea

```typescript
IconLargeChartArea(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartBullet

```typescript
IconLargeChartBullet(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartClusteredBar

```typescript
IconLargeChartClusteredBar(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartClusteredColumn

```typescript
IconLargeChartClusteredColumn(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartClusteredColumnsAndLines

```typescript
IconLargeChartClusteredColumnsAndLines(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartDonut

```typescript
IconLargeChartDonut(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartGauge

```typescript
IconLargeChartGauge(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartLine

```typescript
IconLargeChartLine(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartPie

```typescript
IconLargeChartPie(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartRadar

```typescript
IconLargeChartRadar(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartScatter

```typescript
IconLargeChartScatter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartStackedArea

```typescript
IconLargeChartStackedArea(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartStackedArea100

```typescript
IconLargeChartStackedArea100(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartStackedBar

```typescript
IconLargeChartStackedBar(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartStackedBar100

```typescript
IconLargeChartStackedBar100(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartStackedColumn

```typescript
IconLargeChartStackedColumn(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartStackedColumn100

```typescript
IconLargeChartStackedColumn100(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartTree

```typescript
IconLargeChartTree(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeChartWaterfall

```typescript
IconLargeChartWaterfall(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeHttp

```typescript
IconLargeHttp(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeKpi

```typescript
IconLargeKpi(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargePivotTable

```typescript
IconLargePivotTable(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeQuickFilter

```typescript
IconLargeQuickFilter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeRichTextEditor

```typescript
IconLargeRichTextEditor(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeTabular

```typescript
IconLargeTabular(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLargeTreeTable

```typescript
IconLargeTreeTable(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyABC

```typescript
IconLegacyABC(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyBlank

```typescript
IconLegacyBlank(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyCancel

```typescript
IconLegacyCancel(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyCloud

```typescript
IconLegacyCloud(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyCloudOffline

```typescript
IconLegacyCloudOffline(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyCloudStarting

```typescript
IconLegacyCloudStarting(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyColors

```typescript
IconLegacyColors(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyCutter

```typescript
IconLegacyCutter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyDetails

```typescript
IconLegacyDetails(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyDockInLegend

```typescript
IconLegacyDockInLegend(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyError

```typescript
IconLegacyError(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyExpandPlus

```typescript
IconLegacyExpandPlus(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyFilter

```typescript
IconLegacyFilter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyKpiBreach

```typescript
IconLegacyKpiBreach(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyKpiGood

```typescript
IconLegacyKpiGood(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyKpiWarning

```typescript
IconLegacyKpiWarning(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyNoData

```typescript
IconLegacyNoData(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacySelectAll

```typescript
IconLegacySelectAll(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyStop

```typescript
IconLegacyStop(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyTransparent

```typescript
IconLegacyTransparent(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyValid

```typescript
IconLegacyValid(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyWarning

```typescript
IconLegacyWarning(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyWorkflow

```typescript
IconLegacyWorkflow(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLegacyWorld

```typescript
IconLegacyWorld(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconLowerGoal

```typescript
IconLowerGoal(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconMdxEditor

```typescript
IconMdxEditor(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconMeasure

```typescript
IconMeasure(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconMonitorDashboard

```typescript
IconMonitorDashboard(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconMonitorDetails

```typescript
IconMonitorDetails(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconNumeric

```typescript
IconNumeric(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconNumericAscendingOrder

```typescript
IconNumericAscendingOrder(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconNumericDescendingOrder

```typescript
IconNumericDescendingOrder(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconNumericRemoveOrder

```typescript
IconNumericRemoveOrder(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconOrdinalRemoveOrder

```typescript
IconOrdinalRemoveOrder(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconParameter

```typescript
IconParameter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconPivotTable

```typescript
IconPivotTable(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconPuzzle

```typescript
IconPuzzle(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconQueryRate

```typescript
IconQueryRate(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconQuickFilter

```typescript
IconQuickFilter(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconRichTextEditor

```typescript
IconRichTextEditor(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconSaveAs

```typescript
IconSaveAs(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconShowSubTotals

```typescript
IconShowSubTotals(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconShowTotal

```typescript
IconShowTotal(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconShowWizard

```typescript
IconShowWizard(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconSlicingDimension

```typescript
IconSlicingDimension(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconSlicingHierarchy

```typescript
IconSlicingHierarchy(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconSlicingTimeDimension

```typescript
IconSlicingTimeDimension(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconSlicingTimeHierarchy

```typescript
IconSlicingTimeHierarchy(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconTimeDimension

```typescript
IconTimeDimension(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconTreeColumn

```typescript
IconTreeColumn(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconTunnelIn

```typescript
IconTunnelIn(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconTunnelOut

```typescript
IconTunnelOut(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconUnpin

```typescript
IconUnpin(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconUpperGoal

```typescript
IconUpperGoal(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## IconWizard

```typescript
IconWizard(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | IconProps |  |

<b>Returns:</b>

JSX.Element

## isActionInDashboard

An action can be used in or outside a dashboard. Some actions make sense in any context (e.g. "sort the current widget"). Some others only make sense in a dashboard (e.g. "remove widget"). This function returns whether the action is being used in a dashboard.

```typescript
isActionInDashboard(props)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  props | [ActionProps](./types#actionprops)&lt;any&gt; |  |

<b>Returns:</b>

props is WidgetInDashboardActionProps<!-- -->&lt;any&gt;

## isDimensionNode

```typescript
isDimensionNode(node)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  node | [DataModelNode](./types#datamodelnode) |  |

<b>Returns:</b>

node is DimensionNode

## isDraggedDimension

Returns whether the given drag item represents a dimension dragged from the data model tree.

```typescript
isDraggedDimension(item)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  item | {<br />&nbsp;&nbsp type: string; <br />} &amp; any |  |

<b>Returns:</b>

item is DimensionDraggedFromDataModelTree

## isDraggedHierarchy

Returns whether the given drag item represents a hierarchy dragged from the data model tree.

```typescript
isDraggedHierarchy(item)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  item | {<br />&nbsp;&nbsp type: string; <br />} &amp; any |  |

<b>Returns:</b>

item is HierarchyDraggedFromDataModelTree

## isDraggedLevel

Returns whether the given drag item represents a level dragged from the data model tree.

```typescript
isDraggedLevel(item)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  item | {<br />&nbsp;&nbsp type: string; <br />} &amp; any |  |

<b>Returns:</b>

item is LevelDraggedFromDataModelTree

## isDraggedMeasure

Returns whether the given drag item represents a measure dragged from the data model tree.

```typescript
isDraggedMeasure(item)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  item | {<br />&nbsp;&nbsp type: string; <br />} &amp; any |  |

<b>Returns:</b>

item is MeasureDraggedFromDataModelTree

## isFieldDraggedFromDataModelTree

Returns whether the given drag item represents a dimension, hierarchy, level or measure dragged from the data model tree.

```typescript
isFieldDraggedFromDataModelTree(item)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  item | {<br />&nbsp;&nbsp type: string; <br />} &amp; any |  |

<b>Returns:</b>

item is FieldDraggedFromDataModelTree

## isHierarchyNode

```typescript
isHierarchyNode(node)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  node | [DataModelNode](./types#datamodelnode) |  |

<b>Returns:</b>

node is HierarchyNode

## isLevelNode

```typescript
isLevelNode(node)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  node | [DataModelNode](./types#datamodelnode) |  |

<b>Returns:</b>

node is LevelNode

## isMeasureNode

```typescript
isMeasureNode(node)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  node | [DataModelNode](./types#datamodelnode) |  |

<b>Returns:</b>

node is MeasureNode

## isWidgetLoaded

Returns whether `widgetState` corresponds to a loaded widget. The opposite can happen in the case of saved widgets dragged into a dashboard.

```typescript
isWidgetLoaded(widgetState)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  widgetState | T \| [LoadingWidgetState](./types#loadingwidgetstate) |  |

<b>Returns:</b>

widgetState is T

## moveAllMeasures

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where all measures were moved to `indexOnAxis` on the axis with `axisName`<!-- -->. Does not mutate mdx.

```typescript
moveAllMeasures(mdx, {
   axisName,
   indexOnAxis,
   shouldCreateNonEmptyAxis, 
}, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  {<br />&nbsp;&nbsp axisName,<br />&nbsp;&nbsp indexOnAxis,<br />&nbsp;&nbsp shouldCreateNonEmptyAxis, <br />} | {<br />&nbsp;&nbsp axisName?: [AxisName](./types#axisname);<br />&nbsp;&nbsp indexOnAxis?: number;<br />&nbsp;&nbsp shouldCreateNonEmptyAxis?: boolean; <br />} |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## moveLevel

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given level is moved at `indexOnAxis` on the axis with `axisName`<!-- -->. Does not mutate mdx.

```typescript
moveLevel(mdx, {
   dimensionName,
   hierarchyName,
   levelName,
   axisName,
   indexOnAxis,
   shouldCreateNonEmptyAxis, 
}, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  {<br />&nbsp;&nbsp dimensionName,<br />&nbsp;&nbsp hierarchyName,<br />&nbsp;&nbsp levelName,<br />&nbsp;&nbsp axisName,<br />&nbsp;&nbsp indexOnAxis,<br />&nbsp;&nbsp shouldCreateNonEmptyAxis, <br />} | {<br />&nbsp;&nbsp dimensionName: [DimensionName](./types#dimensionname);<br />&nbsp;&nbsp hierarchyName: [HierarchyName](./types#hierarchyname);<br />&nbsp;&nbsp levelName: [LevelName](./types#levelname);<br />&nbsp;&nbsp axisName?: [AxisName](./types#axisname);<br />&nbsp;&nbsp indexOnAxis: number;<br />&nbsp;&nbsp shouldCreateNonEmptyAxis?: boolean; <br />} |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## moveMeasure

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given measure was moved to `measureIndex`<!-- -->. Does not mutate mdx.

```typescript
moveMeasure(mdx, options, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  options | {<br />&nbsp;&nbsp measureName: [MeasureName](./types#measurename);<br />&nbsp;&nbsp measureIndex: number;<br />&nbsp;&nbsp shouldCreateNonEmptyAxis?: boolean; <br />} |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## moveWidget

Returns a new dashboard with the given widget moved from the specified origin to the specified target. Does not mutate dashboard.

```typescript
moveWidget({
   dashboard,
   originLayoutPath,
   pageKey,
   side,
   targetLayoutPath, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp dashboard,<br />&nbsp;&nbsp originLayoutPath,<br />&nbsp;&nbsp pageKey,<br />&nbsp;&nbsp side,<br />&nbsp;&nbsp targetLayoutPath, <br />} | {<br />&nbsp;&nbsp dashboard: [DashboardState](./types#dashboardstate);<br />&nbsp;&nbsp originLayoutPath: number\[\];<br />&nbsp;&nbsp pageKey: string;<br />&nbsp;&nbsp side: [Side](./types#side);<br />&nbsp;&nbsp targetLayoutPath: number\[\]; <br />} |  |

<b>Returns:</b>

[DashboardState](./types#dashboardstate)

## parse

Returns the Mdx abstract syntax tree corresponding to `mdxString`

```typescript
parse(mdxString)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdxString | [MdxString](./types#mdxstring) |  |

<b>Returns:</b>

T

## parseDashboardMdx

Returns a new dashboard state where all MDX strings representing queries and filters are parsed and replaced by AST. Does not mutate the passed dashboard state.

```typescript
parseDashboardMdx(dashboard)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dashboard | [DashboardState](./types#dashboardstate)&lt;[MdxString](./types#mdxstring)&gt; |  |

<b>Returns:</b>

[DashboardState](./types#dashboardstate)<!-- -->&lt;[Mdx](./types#mdx)<!-- -->&gt;

## parseWidgetMdx

Returns a new widget state where all MDX strings representing queries and filters are parsed and replaced by AST. Does not mutate the passed widget state.

```typescript
parseWidgetMdx(widgetState)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  widgetState | [AWidgetState](./types#awidgetstate)&lt;[MdxString](./types#mdxstring)&gt; |  |

<b>Returns:</b>

[AWidgetState](./types#awidgetstate)<!-- -->&lt;[Mdx](./types#mdx)<!-- -->&gt;

## ping

Pings the server at the given URL.

```typescript
ping(serverUrl, pivotVersion, options)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  serverUrl | string |  |
|  pivotVersion | [ServiceVersion](./types#serviceversion) |  |
|  options | RequestInit |  |

<b>Returns:</b>

Promise<!-- -->&lt;void&gt;

## quote

Converts an array of strings into the corresponding stringified Mdx compound identifier.

```typescript
quote(path)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  path | string\[\] |  |

<b>Returns:</b>

[MdxString](./types#mdxstring)<b>For example:</b>

```tsx
quote('a', 'b') // === '[a].[b]'
```

## removeAllMeasures

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where all measures were removed. Does not mutate `mdx`<!-- -->.

```typescript
removeAllMeasures(mdx, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## removeLevel

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given level was removed. Does not mutate mdx

```typescript
removeLevel(mdx, {
   dimensionName,
   hierarchyName,
   levelName, 
}, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  {<br />&nbsp;&nbsp dimensionName,<br />&nbsp;&nbsp hierarchyName,<br />&nbsp;&nbsp levelName, <br />} | {<br />&nbsp;&nbsp dimensionName: string;<br />&nbsp;&nbsp hierarchyName: string;<br />&nbsp;&nbsp levelName: string; <br />} |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## removeMeasure

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` where the given measure was removed. Does not mutate mdx.

```typescript
removeMeasure(mdx, {
   measureName 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  {<br />&nbsp;&nbsp measureName <br />} | {<br />&nbsp;&nbsp measureName: string; <br />} |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## removePage

```typescript
removePage(dashboard, pageKey)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dashboard | [DashboardState](./types#dashboardstate) |  |
|  pageKey | string |  |

<b>Returns:</b>

[DashboardState](./types#dashboardstate)

## removeWidget

Returns a new dashboard with the widget at the specified location removed. Does not mutate dashboard.

```typescript
removeWidget({
   dashboardState,
   layoutPath,
   pageKey,
   leafKey, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp dashboardState,<br />&nbsp;&nbsp layoutPath,<br />&nbsp;&nbsp pageKey,<br />&nbsp;&nbsp leafKey, <br />} | {<br />&nbsp;&nbsp dashboardState: [DashboardState](./types#dashboardstate);<br />&nbsp;&nbsp layoutPath: number\[\];<br />&nbsp;&nbsp pageKey: string;<br />&nbsp;&nbsp leafKey: string; <br />} |  |

<b>Returns:</b>

[DashboardState](./types#dashboardstate)

## search

```typescript
search(list, searchValue, options)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  list | T\[\] |  |
|  searchValue | string |  |
|  options | Partial&lt;FuseOptions&lt;T&gt;&gt; |  |

<b>Returns:</b>

T\[\]

## setCubeName

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx` with `cubeName` updated as required. Does not mutate mdx.

```typescript
setCubeName(mdx, cubeName)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  cubeName | string |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## setFilters

Returns a new [MdxSelect](./types#mdxselect) or [MdxDrillthrough](./types#mdxdrillthrough) corresponding to `mdx` where the filters were set to `mdxFilters`<!-- -->. Does not mutate mdx.

```typescript
setFilters(mdx, mdxFilters)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) \| [MdxDrillthrough](./types#mdxdrillthrough) |  |
|  mdxFilters | [Mdx](./types#mdx)\[\] |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect) \| [MdxDrillthrough](./types#mdxdrillthrough)

## setSort

Returns a new [MdxSelect](./types#mdxselect) corresponding to `mdx`<!-- -->, sorted as specified. Does not mutate mdx.

```typescript
setSort(mdx, {
   levelCoordinates,
   orderMode,
   tupleCoordinates, 
}, cube)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [MdxSelect](./types#mdxselect) |  |
|  {<br />&nbsp;&nbsp levelCoordinates,<br />&nbsp;&nbsp orderMode,<br />&nbsp;&nbsp tupleCoordinates, <br />} | {<br />&nbsp;&nbsp levelCoordinates?: [LevelCoordinates](./types#levelcoordinates);<br />&nbsp;&nbsp orderMode: [OrderMode](./types#ordermode);<br />&nbsp;&nbsp tupleCoordinates?: [TupleCoordinates](./types#tuplecoordinates); <br />} |  |
|  cube | [Cube](./types#cube) |  |

<b>Returns:</b>

[MdxSelect](./types#mdxselect)

## stringify

Returns the Mdx string corresponding to `mdx`

```typescript
stringify(mdx, options, indenter)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  mdx | [Mdx](./types#mdx) |  |
|  options | {<br />&nbsp;&nbsp indent?: boolean; <br />} |  |
|  indenter | GenericIndenter |  |

<b>Returns:</b>

[MdxString](./types#mdxstring)

## stringifyDashboardMdx

Returns a new dashboard state where all MDX AST objects of filters and queries are replaced by their stringified versions. Does not mutate the passed dashboard state.

```typescript
stringifyDashboardMdx(dashboard)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dashboard | [DashboardState](./types#dashboardstate)&lt;[Mdx](./types#mdx)&gt; |  |

<b>Returns:</b>

[DashboardState](./types#dashboardstate)<!-- -->&lt;[MdxString](./types#mdxstring)<!-- -->&gt;

## stringifyWidgetMdx

Returns a new widget state where all MDX AST objects of filters and queries are replaced by their stringified versions. Does not mutate the passed widget state.

```typescript
stringifyWidgetMdx(widgetState)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  widgetState | [AWidgetState](./types#awidgetstate)&lt;[Mdx](./types#mdx)&gt; |  |

<b>Returns:</b>

[AWidgetState](./types#awidgetstate)<!-- -->&lt;[MdxString](./types#mdxstring)<!-- -->&gt;

## Title

A component that wraps antd's Title and allows us to customize its style.

```typescript
Title({
   level,
   disabled,
   ...otherProps 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp level,<br />&nbsp;&nbsp disabled,<br />&nbsp;&nbsp ...otherProps <br />} | TitleProps |  |

<b>Returns:</b>

JSX.Element

## unquote

Converts a stringified Mdx compound identifier into the corresponding array of strings.

```typescript
unquote(str)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  str | [MdxString](./types#mdxstring) |  |

<b>Returns:</b>

string\[\]<b>For example:</b>

```tsx
unquote('[a].[b]') // === ['a', 'b']
```

## updateContentFile

Asynchronously updates an existing dashboard or widget file on the Content Server.

```typescript
updateContentFile({
   url,
   content,
   contentServerVersion,
   id,
   metaData,
   pathToFolder,
   requestOptions,
   type, 
})
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp url,<br />&nbsp;&nbsp content,<br />&nbsp;&nbsp contentServerVersion,<br />&nbsp;&nbsp id,<br />&nbsp;&nbsp metaData,<br />&nbsp;&nbsp pathToFolder,<br />&nbsp;&nbsp requestOptions,<br />&nbsp;&nbsp type, <br />} | {<br />&nbsp;&nbsp url: string;<br />&nbsp;&nbsp content: Content;<br />&nbsp;&nbsp contentServerVersion: [ServiceVersion](./types#serviceversion);<br />&nbsp;&nbsp id: string;<br />&nbsp;&nbsp metaData: MetaData;<br />&nbsp;&nbsp pathToFolder: string\[\];<br />&nbsp;&nbsp requestOptions?: RequestInit;<br />&nbsp;&nbsp type: [ContentType](./types#contenttype); <br />} |  |

<b>Returns:</b>

Promise<!-- -->&lt;void&gt;

## updatePage

Updates the page with the specifiedd key in the dashboard. Does not mutate dashboard.

```typescript
updatePage(dashboard, pageKey, updater)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dashboard | [DashboardState](./types#dashboardstate) |  |
|  pageKey | string |  |
|  updater | (page: [DashboardPageState](./types#dashboardpagestate)) =&gt; void |  |

<b>Returns:</b>

[DashboardState](./types#dashboardstate)

## updateRecentlyOpenedDashboards

Updates the `recently_opened_dashboards` file for the given user with `recentlyOpenedDashboards`<!-- -->.

```typescript
updateRecentlyOpenedDashboards(serverUrl, contentServerVersion, username, recentlyOpenedDashboards, requestOptions)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  serverUrl | string |  |
|  contentServerVersion | [ServiceVersion](./types#serviceversion) |  |
|  username | string |  |
|  recentlyOpenedDashboards | [RecentlyOpenedLog](./types#recentlyopenedlog)\[\] |  |
|  requestOptions | RequestInit |  |

<b>Returns:</b>

Promise<!-- -->&lt;<!-- -->Response<!-- -->&gt;

## updateWidget

Updates the widget with the specified key in the specified page in the dashboard. Does not mutate dashboard.

```typescript
updateWidget(dashboard, pageKey, leafKey, updater)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  dashboard | [DashboardState](./types#dashboardstate) |  |
|  pageKey | string |  |
|  leafKey | string |  |
|  updater | (widget: WidgetState) =&gt; WidgetState |  |

<b>Returns:</b>

[DashboardState](./types#dashboardstate)

