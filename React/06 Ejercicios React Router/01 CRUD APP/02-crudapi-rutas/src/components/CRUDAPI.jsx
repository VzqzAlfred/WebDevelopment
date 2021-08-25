import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import { CRUDForm } from './CRUDForm';
import { CRUDTable } from './CRUDTable';
import { Loader } from './Loader';
import { Message } from './Message';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom'
import { Error404 } from '../Pages/Error404';


export const CRUDAPI= () => {

     const [db, setDb] = useState(null);
     const [dataToEdit, setDataToEdit] = useState(null);
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(false);

     let api = helpHttp();
     let url = "http://localhost:5000/justiceleague";
    
     useEffect(() => {
          setLoading(true); 
          helpHttp().get(url).then(res => {
               // console.log(res);
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
          // console.log(data);

          let options = {
               body: data, 
               headers: {"content-type": "application/json"}
          };

          api
               .post(url, options)
               .then(res => {
                    console.log(res); 

                    if (!res.err) {
                    setDb([...db, res]);
                    }else {
                         setError(res);
                    }    
               });

          setDb([
               ...db, data
          ])
     }

     const updateData = (data) => {
          let endpoint = `${url}/${data.id}`;
          // console.log(endpoint);

          let options = {
               body: data, 
               headers: {"content-type": "application/json"}
          };

          api
               .put(endpoint, options)
               .then(res => {
                    console.log(res); 

                    if (!res.err) {
                         let newData = db.map(el => el.id === data.id ? data : el);
                         setDb(newData);
                    }else {
                         setError(res);
                    }    
               });

     }

     const deleteData = (id) => {
          
          let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id '${id}'?`);

          if (isDelete) {
               let endpoint = `${url}/${id}`;
               let options = {
                    headers: {"content-type": "application/json"}
               };
               
               api
               .delet(endpoint, options)
               .then(res => {
                    if (!res.err) {
                         let newData = db.filter(el => el.id !== id);
                         setDb(newData);
                    }else {
                         setError(res);
                    }  
               });
          } else {
               return;
          }
     };

     return (
          <div>
               <HashRouter basename="justiceleague">
                    <header>
                         <h2>CRUD API with Routes</h2>
                         <nav>
                              <NavLink to="/" activeClassName="active">Justice League</NavLink>
                              <NavLink to="/agregar" activeClassName="active">Add</NavLink>
                              <Switch>
                                   <Route exact path="/">
                                        {loading && <Loader />}
               
                                        {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}

                                        { db && <CRUDTable 
                                                            data={db} 
                                                            setDataToEdit={setDataToEdit} 
                                                           deleteData={deleteData} 
                                                       />
                                        }
                                   </Route>
                                   <Route exact path="/agregar">
                                        <CRUDForm 
                                             createData={createData} 
                                             updateData={updateData} 
                                             dataToEdit={dataToEdit} 
                                             setDataToEdit={setDataToEdit}
                                        />
                                   </Route>
                                   <Route exact path="/editar/:id">
                                        <CRUDForm 
                                        createData={createData} 
                                        updateData={updateData} 
                                        dataToEdit={dataToEdit} 
                                        setDataToEdit={setDataToEdit} 
                                   />
                                   </Route>
                                   <Route path="*" children={<Error404/>} />
                              </Switch>
                         </nav>
                    </header>
               </HashRouter>
          </div>
     )
}
