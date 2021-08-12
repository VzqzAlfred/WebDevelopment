import React, { useState } from 'react';
import { CRUDForm } from './CRUDForm';
import { CRUDTable } from './CRUDTable';

const initialDb = [
    {
      id: 1,
      name: "Superman",
      author: "Jerry Siegel"
    },
    {
      id: 2,
      name: "Batman",
      author: "Bob Kane"
    },
    {
      id: 3,
      name: "Mujer Maravilla",
      author: "William Moulton Marston"
    },
    {
      id: 4,
      name: "Flash",
      author: "Gardner Fox"
    },
    {
      id: 5,
      name: "Aquaman",
      author: "Mort Weisinger"
    }
];

export const CRUDApp = () => {

     const [db, setDb] = useState(initialDb);
     const [dataToEdit, setDataToEdit] = useState(null);

     const createData = (data) => {
          data.id = Date.now();
          console.log(data);
          setDb([
               ...db, data
          ])
     }

     const updateData = (data) => {
          let newData = db.map(el => el.id === data.id ? data : el);
          setDb(newData);
     }

     const deleteData = (id) => {
          let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);

          if (isDelete) {
               let newData = db.filter(el => el.id !== id);
               setDb(newData);
          } else {

          }
     }

     return (
          <div>
              <article className="grid-1-2">
                    <CRUDForm 
                    createData={createData} 
                    updateData={updateData} 
                    dataToEdit={dataToEdit} 
                    setDataToEdit={setDataToEdit} 
               />

               <CRUDTable 
                    data={db} 
                    setDataToEdit={setDataToEdit} 
                    deleteData={deleteData} 
                    />
          </article>
          </div>
     )
}
