# Button

| property | description                                    | type                                     |
| -------- | ---------------------------------------------- | ---------------------------------------- |
| variant  | Sets the button style                          | **"solid" \| "outline" \| "ghost"**      |
| size     | Sets the size of the button (width and height) | **"xs" \| "sm" \| "md" \| "lg" \| "xl"** |
| intent   | Sets the background color of the button        | **"primary" \| "secondary"**             |
| pending  | Sets the background color of the button        | **boolean**                              |
| onClick  | Callbacl when the button is clicked            | **function**                             |

### Usage

```js
const handleClick = () => {
  console.log("button clicked");
};

<Button variant="solid" intent="primary" onClick={handleClick}>
  Click me
</Button>;
```
