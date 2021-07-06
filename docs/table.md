# Table

| property | description                         | type       | default | required |
| -------- | ----------------------------------- | ---------- | ------- | -------- |
| data     | Data record array to be displayed   | **array**  | **-**   | **true** |
| columns  | Columns of table                    | **array**  | **-**   | **true** |
| rowKey   | Row's unique key, could be a string | **string** | **-**   | **true** |

### Usage

```js
const data = [
  { id: 1, name: "Rafael", age: 31 },
  { id: 2, name: "Henrique", age: 29 },
];
const columns = [
  { path: "name", label: "Nome" },
  { path: "age", label: "Idade" },
  {
    path: "actions",
    label: "Ações",
    render: ({ item, index }) => {
      return <div />;
    },
  },
];

<Table data={data} columns={columns} rowKey="id" />;
```
