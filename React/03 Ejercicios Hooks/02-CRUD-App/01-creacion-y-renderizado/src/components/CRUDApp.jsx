import React, { useState } from 'react';
import { CRUDForm } from './CRUDForm';
import { CRUDTable } from './CRUDTable';

const initialDb = [
    {
      "id": 1,
      "name": "Superman",
      "author": "Jerry Siegel"
    },
    {
      "id": 2,
      "name": "Batman",
      "author": "Bob Kane"
    },
    {
      "id": 3,
      "name": "Mujer Maravilla",
      "author": "William Moulton Marston"
    },
    {
      "id": 4,
      "name": "Flash",
      "author": "Gardner Fox"
    },
    {
      "id": 5,
      "name": "Aquaman",
      "author": "Mort Weisinger"
    }
];

export const CRUDApp = () => {

     const [db, setDb] = useState(initialDb);

     return (
          <div>
               <h2>CRUD App</h2>
               <CRUDForm />
               <CRUDTable data={db} />
          </div>
     )
}
