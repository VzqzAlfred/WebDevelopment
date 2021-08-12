import React from "react";

export  const CRUDTableRow = ({el}) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.author}</td>
      <td>
        <button>Edit</button>
        <button>Remove</button>
      </td>
    </tr>
  );
};
