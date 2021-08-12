import React, { useState, useEffect } from 'react';

const initialForm = {
     name: "",
     author: "",
     id: null
}

export const CRUDForm = () => {

     const [form, setForm] = useState(initialForm);
     
     const handleChange = e => {

     }

     const handleSubmit = e=> {

     }

     const handleReset = e => {

     }

     return (
          <div>
               <h3>Add</h3>
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
                    
                    <input type="submit" value="Send" />
                    <input type="reset" value="Clean" onClick={handleReset}/>
               </form>
          </div>
     )
}
