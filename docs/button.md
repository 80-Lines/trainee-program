# Button

| property | description                                    | type                                     | default       | required  |
| -------- | ---------------------------------------------- | ---------------------------------------- | ------------- | --------- |
| children | Sets the button style                          | **ReactNode**                            | **-**         | **true**  |
| variant  | Sets the button style                          | **"solid" \| "outline" \| "ghost"**      | **"solid"**   | **false** |
| size     | Sets the size of the button (width and height) | **"xs" \| "sm" \| "md" \| "lg" \| "xl"** | **"md"**      | **false** |
| intent   | Sets the background color of the button        | **"primary" \| "secondary"**             | **"primary"** | **false** |
| pending  | Set the loading status of button               | **boolean**                              | **false**     | **false** |
| disabled | Disabled state of button                       | **boolean**                              | **false**     | **false** |
| onClick  | Callbacl when the button is clicked            | **function**                             | **undefined** | **false** |

### Usage

```js
const handleClick = () => {
  console.log("button clicked");
};

<Button variant="solid" intent="primary" onClick={handleClick} loading={false}>
  Click me
</Button>;
```
