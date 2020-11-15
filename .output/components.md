---
title: Components
sidebar_label: Components
---
  
## ContentTree

Displays a tree of saved widgets or dashboards

```jsx
<ContentTree
	{...}
/>
```



## Dashboard

Renders multiple resizable and draggable data exploration widgets.

```jsx
<Dashboard
	{...}
/>
```



## DataModelTree

Displays the tree of measures and dimensions contained in a cube.

```jsx
<DataModelTree
	{...}
/>
```



## Dropdown

Wrapper around Ant Design's Dropdown, ensuring that it mounts its overlay in ActiveUI's overlay root

```jsx
<Dropdown
	{...}
/>
```



## FiltersEditor

Displays a data model tree and a filter wizard. Either stacked horizontally or vertically, depending on how wide the parent is.

```jsx
<FiltersEditor
	{...}
/>
```



## FormRow

Displays a styled row with a label on the left and an input on the right, useful in a form.

```jsx
<FormRow
	{...}
/>
```



## HighlightedSearchResult

Displays the label of a search result, highlighting the matched part of it.

```jsx
<HighlightedSearchResult
	{...}
/>
```



## KpiComponent

Displays one or several high level KPIs. Can optionally be used to display comparisons of KPIs, for instance across 2 dates or 2 scenarios.

```jsx
<KpiComponent
	{...}
/>
```



## LazyLoadedTable

Displays a horizontally and vertically infinitely scrollable table. Requests a new range of cells from the server each time the user scrolls out of the currently loaded one. Useful for very large tables.

```jsx
<LazyLoadedTable
	{...}
/>
```



## Menu

Wrapper around Ant Design's Menu, ensuring that it mounts its overlay in ActiveUI's overlay root

```jsx
<Menu
	{...}
/>
```



## MenuItemCreateFolder

Context menu item allowing users to create a folder on the Content Server.

```jsx
<MenuItemCreateFolder
	{...}
/>
```



## MenuItemDeleteFile

Context menu item allowing users to delete a file from the Content Server.

```jsx
<MenuItemDeleteFile
	{...}
/>
```



## MenuItemDeleteFolder

Context menu item allowing users to delete a file from the Content Server.

```jsx
<MenuItemDeleteFolder
	{...}
/>
```



## PivotTable

Displays a pivot table.

```jsx
<PivotTable
	{...}
/>
```



## Plotly100StackedAreaChart

Displays a Plotly stacked area chart, normalized in order to highlight the relative contribution of each series to each point on the X axis.

```jsx
<Plotly100StackedAreaChart
	{...}
/>
```



## Plotly100StackedBarChart

Displays a Plotly stacked bar chart, normalized in order to highlight the relative contribution of each series to each point on the Y axis.

```jsx
<Plotly100StackedBarChart
	{...}
/>
```



## Plotly100StackedColumnChart

Displays a Plotly stacked column chart, normalized in order to highlight the relative contribution of each series to each point on the X axis.

```jsx
<Plotly100StackedColumnChart
	{...}
/>
```



## PlotlyAreaChart

Displays a Plotly area chart.

```jsx
<PlotlyAreaChart
	{...}
/>
```



## PlotlyBulletChart

Displays a Plotly bullet chart.

```jsx
<PlotlyBulletChart
	{...}
/>
```



## PlotlyClusteredBarChart

Displays a Plotly clustered bar chart.

```jsx
<PlotlyClusteredBarChart
	{...}
/>
```



## PlotlyClusteredColumnChart

Displays a Plotly clustered column chart.

```jsx
<PlotlyClusteredColumnChart
	{...}
/>
```



## PlotlyComboChart

Displays a Plotly "columns and lines" chart.

```jsx
<PlotlyComboChart
	{...}
/>
```



## PlotlyDonutChart

Displays a Plotly donut chart.

```jsx
<PlotlyDonutChart
	{...}
/>
```



## PlotlyGaugeChart

Displays a Plotly gauge chart.

```jsx
<PlotlyGaugeChart
	{...}
/>
```



## PlotlyLineChart

Displays a Plotly line chart.

```jsx
<PlotlyLineChart
	{...}
/>
```



## PlotlyPieChart

Displays a Plotly pie chart.

```jsx
<PlotlyPieChart
	{...}
/>
```



## PlotlyRadarChart

Displays a Plotly radar chart.

```jsx
<PlotlyRadarChart
	{...}
/>
```



## PlotlyScatterPlot

Displays a Plotly scatter plot.

```jsx
<PlotlyScatterPlot
	{...}
/>
```



## PlotlyStackedAreaChart

Displays a Plotly stacked area chart.

```jsx
<PlotlyStackedAreaChart
	{...}
/>
```



## PlotlyStackedBarChart

Displays a Plotly stacked bar chart.

```jsx
<PlotlyStackedBarChart
	{...}
/>
```



## PlotlyStackedColumnChart

Displays a Plotly stacked column chart.

```jsx
<PlotlyStackedColumnChart
	{...}
/>
```



## PlotlyTreeMap

Displays a Plotly treemap.

```jsx
<PlotlyTreeMap
	{...}
/>
```



## PlotlyWaterfallChart

Displays a Plotly waterfall chart.

```jsx
<PlotlyWaterfallChart
	{...}
/>
```



## Resizable

Accepts two children. Displays them next to each other. The first one is resizable.

```jsx
<Resizable
	className={className}
	direction={direction}
	dragHandleStyle={dragHandleStyle}
	firstChildStyle={firstChildStyle}
	minSize={minSize}
	onResizeEnd={onResizeEnd}
	secondChildStyle={secondChildStyle}
	size={size}
	style={style}
/>
```

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  className | string |  |
|  direction | "column" \| "row" |  |
|  dragHandleStyle | CSSProperties |  |
|  firstChildStyle | CSSProperties |  |
|  minSize | number |  |
|  onResizeEnd | (newSize: number) =&gt; void |  |
|  secondChildStyle | CSSProperties |  |
|  size | number |  |
|  style | CSSProperties |  |

## Table

Renders a virtualized table.

```jsx
<Table
	containerStyle={containerStyle}
	data={data}
	getBodyCellStyle={getBodyCellStyle}
	getHeaderCellStyle={getHeaderCellStyle}
	headerCellComponent={headerCellComponent}
	onScroll={onScroll}
	onSelectionChange={onSelectionChange}
	serverKey={serverKey}
/>
```

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  containerStyle | CSSProperties |  |
|  data | [CellSet](./types#cellset) |  |
|  getBodyCellStyle | (getBodyCellStyleParameters: GetBodyCellStyleParameters) =&gt; CSSProperties |  |
|  getHeaderCellStyle | (getHeaderCellStyleParameters: GetHeaderCellStyleParameters) =&gt; CSSProperties |  |
|  headerCellComponent | React.ComponentType&lt;TableHeaderCellProps&gt; |  |
|  onScroll | (newPosition: {<br />&nbsp;&nbsp scrollTop: number;<br />&nbsp;&nbsp scrollLeft: number; <br />}) =&gt; void |  |
|  onSelectionChange | (newSelection: [Selection](./types#selection)) =&gt; void |  |
|  serverKey | string |  |

## TitleInput

```jsx
<TitleInput
	className={className}
	inputCss={inputCss}
	isPlaceholder={isPlaceholder}
	isStrictlySized={isStrictlySized}
	onChange={onChange}
	tooltipValue={tooltipValue}
	value={value}
/>
```

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  className | string |  |
|  inputCss | ObjectInterpolation&lt;undefined&gt; |  |
|  isPlaceholder | boolean |  |
|  isStrictlySized | boolean |  |
|  onChange | (newValue: string) =&gt; void |  |
|  tooltipValue | string |  |
|  value | string |  |

## Tooltip

Wrapper around Ant Design's Tooltip, ensuring that it mounts its overlay in ActiveUI's overlay root

```jsx
<Tooltip
	{...}
/>
```



## Widget

Displays the [WidgetPlugin](./types#widgetplugin) identified by the given `widgetKey` in the [PluginRegistry](./types#pluginregistry) provided by the closest `PluginsProvider`<!-- -->.

```jsx
<Widget
	onChange={onChange}
	onLoaded={onLoaded}
	onSelectionChange={onSelectionChange}
	queryId={queryId}
	style={style}
	widgetState={widgetState}
/>
```

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  onChange | (newState: WidgetState) =&gt; void |  |
|  onLoaded | () =&gt; void |  |
|  onSelectionChange | (newSelection: [Selection](./types#selection)) =&gt; void |  |
|  queryId | string |  |
|  style | CSSProperties |  |
|  widgetState | WidgetState |  |

## WidgetsRibbon

Displays each available [WidgetPlugin](./types#widgetplugin)<!-- -->. Allows to add it to a dashboard by dragging it. Allows to switch the type of a data visualization widget already present in the dashboard by clicking the icon corresponding to the target type.

```jsx
<WidgetsRibbon
	onSelectedWidgetStateChanged={onSelectedWidgetStateChanged}
	selectedWidgetState={selectedWidgetState}
/>
```

|  Property | Type | Description |
|  :--- | :--- | :--- |
|  onSelectedWidgetStateChanged | (newSelectedWidgetState: [AWidgetState](./types#awidgetstate)) =&gt; void |  |
|  selectedWidgetState | [AWidgetState](./types#awidgetstate) \| [LoadingWidgetState](./types#loadingwidgetstate) |  |

