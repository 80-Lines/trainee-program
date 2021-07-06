# Input

| property    | description                                                                | type                                                                                                           | default       | required  |
| ----------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| id          | The unique id of the input                                                 | **string**                                                                                                     | **-**         | **false** |
| value       | The value of the input                                                     | **string**                                                                                                     | **undefined** | **false** |
| onChange    | Callback when the value changes                                            | **function**                                                                                                   | **undefined** | **false** |
| placeholder | Specifies a short hint that describes the expected value of an input field | **string**                                                                                                     | **undefined** | **false** |
| type        | The type of the input                                                      | **"text" \| "email" \| "password" \| "number" \| "search" \| "date" \| "time" \| "datetime-local" \| "black"** | **undefined** | **false** |

### Usage

```js
const [name, setName] = React.useState("");

<Input
  id="name"
  value={name}
  onChange={(value) => setName(value)}
  placeholder="Enter your name here"
  type="text"
/>;
```
