---
title: Context providers
sidebar_label: Context providers
---
  
## ClientsProvider

React Context Provider, useful to provide clients. Allows underlying Components to communicate with their target server(s).

```jsx
<ClientsProvider value={clients}>
  {children}
</ClientsProvider>
```

## DataModelsProvider

React Context Provider, useful to provide the [DataModel](./types#datamodel) of each target server. Allows underlying Components to access the available measures and dimensions in each [Cube](./types#cube) of their target server(s).

```jsx
<DataModelsProvider value={dataModels}>
  {children}
</DataModelsProvider>
```

## IsPresentingProvider

Provides whether the user has entered presentation mode. Allows the underlying Components to know whether they should show edition capabilities.

```jsx
<IsPresentingProvider value={isPresenting}>
  {children}
</IsPresentingProvider>
```

## PaletteProvider

Context provider for the [Palette](./types#palette)<!-- -->. Themes underlying Components.

```jsx
<PaletteProvider value={palette}>
  {children}
</PaletteProvider>
```

## PluginsProvider

Plugins Context provider. Necessary to define the widgets that can be displayed as well as all other types of plugins.

```jsx
<PluginsProvider value={plugins}>
  {children}
</PluginsProvider>
```

## ThemeProvider

Theme Context provider. Also provides the palette based on the theme.

```jsx
<ThemeProvider value={theme}>
  {children}
</ThemeProvider>
```

