import React from "react";

export  const CRUDTableRow = ({el, setDataToEdit, deleteData}) => {
     let {name, author, id} = el    

  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Remove</button>
      </td>
    </tr>
  );
};
