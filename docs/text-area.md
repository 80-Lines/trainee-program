# TextArea

| property    | description                                                                   | type         |
| ----------- | ----------------------------------------------------------------------------- | ------------ |
| value       | The value of the textarea                                                     | **string**   |
| onChange    | Callback when the value changes                                               | **function** |
| placeholder | Specifies a short hint that describes the expected value of an textarea field | **string**   |

### Usage

```js
const [text, setText] = React.useState("");

<TextArea
  value={text}
  onChange={(value) => setText(value)}
  placeholder="Enter a long message"
/>;
```
