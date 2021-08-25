import React from "react";
import { useHistory } from "react-router-dom";

export  const CRUDTableRow = ({el, setDataToEdit, deleteData}) => {
     let {name, author, id} = el;
     let history = useHistory();

     const handleEdit = () => {
          setDataToEdit(el);
          history.push(`/editar/${id}`)
     }

  return (
    <tr>
      <td>{name}</td>
      <td>{author}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteData(id)}>Remove</button>
      </td>
    </tr>
  );
};
