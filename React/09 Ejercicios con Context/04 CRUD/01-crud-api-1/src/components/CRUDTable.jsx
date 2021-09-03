import React, { useContext } from "react";
import CrudContext from "../Context/CRUDContext";
import { CRUDTableRow } from "./CRUDTableRow";

export const CRUDTable = () => {

     const {data, setDataToEdit, deleteData} = useContext(CrudContext);
  return (
    <>
      <h3>Data's Table</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
               data.length > 0  
                    ? data.map((el) => (
                         <CRUDTableRow 
                              key={el.id} 
                              el={el} 
                              setDataToEdit={setDataToEdit} 
                              deleteData={deleteData} 
                         />) 
                    )
                    : <tr><td colSpan="3">No datas</td></tr> 
          }
        </tbody>
      </table>
    </>
  );
};
