---
title: Errors
sidebar_label: Errors
---
  
## CubelessQueryError

Thrown when an [MdxSelect](./types#mdxselect)<!-- -->, an [MdxSubSelect](./types#mdxsubselect) or an [MdxDrillthrough](./types#mdxdrillthrough) does not specify the name of its target [Cube](./types#cube)<!-- -->.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof CubelessQueryError) {
    // handle CubelessQueryError
  }
}
```

## CubeNotFoundError

Thrown when a [Cube](./types#cube) cannot be found in a server's [DataModel](./types#datamodel)<!-- -->. This can happen in particular when loading a saved widget after updating a cube's name on the server side.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof CubeNotFoundError) {
    // handle CubeNotFoundError
  }
}
```

## DimensionNotFoundError

Thrown when a [Dimension](./types#dimension) cannot be found in a [Cube](./types#cube)<!-- -->. This can happen in particular when loading a saved widget after updating a cube on the server side.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof DimensionNotFoundError) {
    // handle DimensionNotFoundError
  }
}
```

## ForbiddenError

Thrown when an HTTP status of 403 is received.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof ForbiddenError) {
    // handle ForbiddenError
  }
}
```

## HierarchyNotFoundError

Thrown when a [Hierarchy](./types#hierarchy) cannot be found in a [Dimension](./types#dimension)<!-- -->. This can happen in particular when loading a saved widget after updating a cube on the server side.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof HierarchyNotFoundError) {
    // handle HierarchyNotFoundError
  }
}
```

## InternalServerError

Thrown when an HTTP status of 500 is received.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof InternalServerError) {
    // handle InternalServerError
  }
}
```

## LevelNotFoundError

Thrown when a [Level](./types#level) cannot be found in a [Hierarchy](./types#hierarchy)<!-- -->. This can happen in particular when loading a saved widget after updating a cube on the server side.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof LevelNotFoundError) {
    // handle LevelNotFoundError
  }
}
```

## UnauthorizedError

Thrown when an HTTP status of 401 is received.

```typescript
try {
  
} catch(error: Error) {
  if(error instanceof UnauthorizedError) {
    // handle UnauthorizedError
  }
}
```

