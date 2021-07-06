# TextArea

| property    | description                                                                   | type         | default       | required  |
| ----------- | ----------------------------------------------------------------------------- | ------------ | ------------- | --------- |
| value       | The value of the textarea                                                     | **string**   | **undefined** | **false** |
| onChange    | Callback when the value changes                                               | **function** | **undefined** | **false** |
| placeholder | Specifies a short hint that describes the expected value of an textarea field | **string**   | **undefined** | **false** |

### Usage

```js
const [text, setText] = React.useState("");

<TextArea
  value={text}
  onChange={(value) => setText(value)}
  placeholder="Enter a long message"
/>;
```
