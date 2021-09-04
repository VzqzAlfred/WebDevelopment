import React, { useContext } from "react";
import CrudContext from "../Context/CRUDContext";

export  const CRUDTableRow = ({el}) => {
     const {setDataToEdit, deleteData} = useContext(CrudContext);
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
