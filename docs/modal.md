# Text

| property       | description                                     | type          | default | required |
| -------------- | ----------------------------------------------- | ------------- | ------- | -------- |
| children       | The content to be displayed                     | **ReactNode** | **-**   | **true** |
| visible        | Controls the modal visibility                   | **boolean**   | **-**   | **true** |
| onRequestClose | Callback called when the modal should disappear | **function**  | **-**   | **true** |

### Usage

You may need to check the [Button API](./button.md) and [Text API](./text.md)

```js
const [isVisible, setIsVisible] = React.useState(false);

<>
  <Button onClicl={() => setIsVisible(true)}>Open modal</Button>

  <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)}>
    <Text>
      Esse est ullamco exercitation reprehenderit eiusmod sit veniam dolor
      mollit fugiat. Proident fugiat ullamco laboris pariatur et labore dolore
      cillum reprehenderit tempor laborum. Cupidatat in laboris cupidatat veniam
      et deserunt pariatur occaecat quis qui nulla. Sit et consequat dolore
      cupidatat.
    </Text>
  </Modal>
</>;
```
