import React from "react";
import { CRUDTableRow } from "./CRUDTableRow";

export const CRUDTable = ({data}) => {
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
               data.length === 0  ? <tr><td colSpan="3">No datas</td></tr> : data.map((el) => <CRUDTableRow key={el.id} el={el} /> )
          }
        </tbody>
      </table>
    </>
  );
};
