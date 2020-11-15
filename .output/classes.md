---
title: Classes
sidebar_label: Classes
---
  
## Client

Allows to run MDX queries against ActivePivot.

### Constructor

Constructs a new instance of the `Client` class

```typescript
new Client({
   url,
   version 
})
```


|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  {<br />&nbsp;&nbsp url,<br />&nbsp;&nbsp version <br />} | {<br />&nbsp;&nbsp url: string;<br />&nbsp;&nbsp version: [ServiceVersion](./types#serviceversion); <br />} |  |

### addQueryResultListener

Registers `listener` to be called whenever a new [QueryResult](./types#queryresult) is received for the [Query](./types#query) identified by `queryId`<!-- -->. `listener` is also called synchronously once, in case results were already received for this query.

```typescript
client.addQueryResultListener(queryId, listener)
```


|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  queryId | string |  |
|  listener | (result: [QueryResult](./types#queryresult)) =&gt; void |  |

<b>Returns:</b>

void

### dispose

Closes the WebSocket.

```typescript
client.dispose()
```


<b>Returns:</b>

void

### refreshQuery

Re-executes a paused query once.

```typescript
client.refreshQuery(queryId)
```


|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  queryId | string |  |

<b>Returns:</b>

void

### removeQueryResultListener

Removes `listener`<!-- -->. If it was the last listener on the results of the [Query](./types#query) identified by `queryId`<!-- -->, stops the query.

```typescript
client.removeQueryResultListener(queryId, listener)
```


|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  queryId | string |  |
|  listener | (result: [QueryResult](./types#queryresult)) =&gt; void |  |

<b>Returns:</b>

void

### setQuery

Updates the [Query](./types#query) identified by `queryId` or register it if it did not exist. Marks the query as loading and sends a message to the server.

```typescript
client.setQuery(queryId, query)
```


|  Argument | Type | Description |
|  :--- | :--- | :--- |
|  queryId | string |  |
|  query | [Query](./types#query)&lt;[MdxString](./types#mdxstring)&gt; |  |

<b>Returns:</b>

void



