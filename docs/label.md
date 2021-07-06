# Separator

| property | description                                 | type       | default       | required |
| -------- | ------------------------------------------- | ---------- | ------------- | -------- |
| children | The content to be displayed                 | **string** | **undefined** | **true** |
| htmlFor  | The id of the element the label is bound to | **string** | **undefined** | **true** |

### Usage

You may need to check the [Input API](./input.md)

```js
<Label htmlFor="username">Name:</Label>
<Input id="username" placeholder="Enter your username" (...) />
```
