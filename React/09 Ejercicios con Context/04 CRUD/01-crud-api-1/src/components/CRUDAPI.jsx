import React, { useContext } from 'react';
import { CRUDForm } from './CRUDForm';
import { CRUDTable } from './CRUDTable';
import { Loader } from './Loader';
import { Message } from './Message';
import CrudContext, { CrudProvider } from "../Context/CRUDContext";

export const CRUDAPI= () => {

     const { db, error, loading } = useContext(CrudContext)

     return (
     <CrudProvider>
          <div>
              <article className="grid-1-2">
                    <CRUDForm />

               {loading && <Loader />}
               {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}

               { db && <CRUDTable />}
          </article>
          </div>
     </CrudProvider>
     )
}
