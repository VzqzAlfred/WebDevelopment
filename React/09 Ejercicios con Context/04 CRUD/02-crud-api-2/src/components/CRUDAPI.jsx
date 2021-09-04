import React, { useContext } from 'react';
import CrudContext from '../Context/CRUDContext';
import { CRUDForm } from './CRUDForm';
import { CRUDTable } from './CRUDTable';
import { Loader } from './Loader';
import { Message } from './Message';

export const CRUDAPI= () => {

     const {db, loading, error} = useContext(CrudContext);

     return (
          <div>
              <article className="grid-1-2">
                    <CRUDForm />

               {loading && <Loader />}
               {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}
          
               { db && <CRUDTable />}
          </article>
          </div>
     )
}
