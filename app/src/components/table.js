import React from "react";
import PropTypes from "prop-types";
import Button from "./button";

const Table = ({ data, columns, rowKey }) => {
  return (
    <table border={1} style={{ border: 1 }}>
      <tr>
        {columns.map((column) => (
          <th key={column.path} style={{ padding: 10 }}>
            {column.label}
          </th>
        ))}
      </tr>
      {data.length ? (
        data.map((rowData, index) => (
          <tr key={rowData[rowKey]}>
            {columns.map((column) =>
              column.render ? (
                <td style={{ padding: 10 }}>
                  {column.render({ rowData, index })}{" "}
                </td>
              ) : (
                <td key={column.path} style={{ padding: 10 }}>
                  {rowData[column.path]}
                </td>
              )
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={columns.length}>Não há registros.</td>
        </tr>
      )}
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      render: PropTypes.func,
    })
  ),
  rowKey: PropTypes.string,
};

export default Table;
