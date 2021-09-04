import React, { useState, useEffect, useContext } from 'react';
import CrudContext from '../Context/CRUDContext';

const initialForm = {
     name: "",
     author: "",
     id: null
}

export const CRUDForm = () => {
     const {createData, updateData, dataToEdit, setDataToEdit} = useContext(CrudContext);
     const [form, setForm] = useState(initialForm);

     useEffect(() => {
          if (dataToEdit) {
               setForm(dataToEdit);
          }else{
               setForm(initialForm);
          }
     }, [dataToEdit]);
     
     const handleChange = e => {
          setForm({
               ...form, 
               [e.target.name]: e.target.value
          })
     }

     const handleSubmit = e=> {
          e.preventDefault();

          if (!form.name || !form.author) {
               alert("Incomplete Datas");
               return;
          }

          if (form.id === null) {
               createData(form)
          }else {
               updateData(form);
          }

          handleReset();
     }

     const handleReset = e => {
          setForm(initialForm);
          setDataToEdit(null);
     }

     return (
          <div>
               <h3>{dataToEdit ? "Edited" : "Add"}</h3>
               <form onSubmit={handleSubmit}>
                    <input 
                         type="text" 
                         name="name" 
                         placeholder="Name" 
                         onChange={handleChange} 
                         value={form.name} 
                    />

                    <input 
                         type="text" 
                         name="author"
                         placeholder="Author" 
                         onChange={handleChange} 
                         value={form.author}
                    />
                    
                    <input    
                         type="submit" 
                         value="Send"
                    />
                    <input 
                         type="reset" 
                         value="Clean"
                         onClick={handleReset}
                    />
               </form>
          </div>
     )
}
