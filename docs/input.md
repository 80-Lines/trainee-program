# Input

| property    | description                                                                | type                                                                                                           |
| ----------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| id          | The unique id of the input                                                 | **string**                                                                                                     |
| value       | The value of the input                                                     | **string**                                                                                                     |
| onChange    | Callback when the value changes                                            | **function**                                                                                                   |
| placeholder | Specifies a short hint that describes the expected value of an input field | **string**                                                                                                     |
| type        | The type of the input                                                      | **"text" \| "email" \| "password" \| "number" \| "search" \| "date" \| "time" \| "datetime-local" \| "black"** |

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
