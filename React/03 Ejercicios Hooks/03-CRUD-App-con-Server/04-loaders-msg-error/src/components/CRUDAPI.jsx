import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/heipHttp';
import { CRUDForm } from './CRUDForm';
import { CRUDTable } from './CRUDTable';
import { Loader } from './Loader';
import { Message } from './Message';


export const CRUDAPI= () => {

     const [db, setDb] = useState(null);
     const [dataToEdit, setDataToEdit] = useState(null);
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(false);

     //let api = helpHttp();
     let url = "http://localhost:5000/justiceleague";
    
     useEffect(() => {
          setLoading(true); 
          helpHttp().get(url).then(res => {
               console.log(res);
               if (!res.err) {
                    setDb(res);
                    setError(null);
               }else {
                    setDb(null);
                    setError(res)
               }

               setLoading(false);
          })
     }, [url])


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

               {loading && <Loader />}
               {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}

               { db && <CRUDTable 
                    data={db} 
                    setDataToEdit={setDataToEdit} 
                    deleteData={deleteData} 
                    />
               }
          </article>
          </div>
     )
}
