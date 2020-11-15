---
title: Hooks
sidebar_label: Hooks
---
  
## useDataModel

React hook to get the data model of the server identified by `serverKey`<!-- -->.

```typescript
useDataModel(serverKey)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  serverKey | string \| undefined |  |

<b>Returns:</b>

[DataModel](./types#datamodel) \| undefined

## useIsPresenting

React hook returning the current state of isPresenting.

```typescript
useIsPresenting()
```

<b>Returns:</b>

boolean

## usePalette

React hook returning the colors used by all ActiveUI Components.

```typescript
usePalette()
```

<b>Returns:</b>

[Palette](./types#palette)

## useQueryResult

Subscribe to a query's result.

If `query` is provided: - If a query identified with `queryId` is already registered on the client corresponding to `serverKey`<!-- -->, update it. - Otherwise, register the query.

```typescript
useQueryResult(serverKey, queryId, query)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  serverKey | string \| undefined |  |
|  queryId | string \| undefined |  |
|  query | [Query](./types#query)&lt;[MdxString](./types#mdxstring)&gt; |  |

<b>Returns:</b>

[QueryResult](./types#queryresult)

## useSwitchedWidget

React Hook returning the switched widget and plugin if switched or the original state and plugin if not switched.

```typescript
useSwitchedWidget(widgetState)
```

|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  widgetState | [AWidgetState](./types#awidgetstate) \| [LoadingWidgetState](./types#loadingwidgetstate) |  |

<b>Returns:</b>

\[[AWidgetState](./types#awidgetstate)<!-- -->, [WidgetPlugin](./types#widgetplugin) \| undefined\]

## useWidgetPlugins

React hook returning all registered widget plugins

```typescript
useWidgetPlugins()
```

<b>Returns:</b>

{ \[pluginKey: string\]: [WidgetPlugin](./types#widgetplugin)<!-- -->&lt;any&gt;; }

