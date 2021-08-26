import React, { useState } from 'react'

const initialForm = {
     artist: "",
     song: "",
}

export const SongForm = ({handleSearch, handleSaveSong}) => {
     const [form, setForm] = useState(initialForm);
     const [isDisable, setIsDisable] = useState(true);

     const handleChange = (e) => {
          setForm({
               ...form,
               [e.target.name]: e.target.value
          });
     };

     const handleSubmit = e => {
          e.preventDefault();

          if (!form.artist || !form.song) {
               alert("Data incomplete");
               return;
               setIsDisable(true);
          } 

          handleSearch(form);
          setForm(initialForm);
          setIsDisable(false);
     };

     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <input 
                         type="text" 
                         name="artist" 
                         placeholder="Name of interpreter"  
                         onChange={handleChange} 
                         value={form.artist} />
                    <input 
                         type="text" 
                         name="song" 
                         placeholder="Name of the song" 
                         onChange={handleChange} 
                         value={form.song} />
                    
                    <input type="submit" value="Search"/>

                    <input type="button" onClick={handleSaveSong} value="Save song" disabled={isDisable && "disable"} />
               </form>
          </div>
     )
}
