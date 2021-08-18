import React, { useState } from 'react';
import { SelectList } from './SelectList';

export const SelectsAnidados = () => {
     const [state, setState] = useState("");
     const [town, setTown] = useState("");
     const [suburb, setSuburb] = useState("");

     let TOKEN = "Use token with the API COPOMEX";

     return (
          <div>
               <h1>Selects Anidados</h1>
               <h2>México</h2>
               <SelectList 
                    title="estado" 
                    url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`} 
                    handleChange={e => {setState(e.target.value)}} 
               />
               {state && <SelectList 
                                        title="municipios" 
                                        url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`} 
                                        handleChange={e => {setTown(e.target.value)}} 
                                   />}

               {town && <SelectList 
                                        title="colonia" 
                                        url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`} 
                                        handleChange={e => {setSuburb(e.target.value)}} 
                                   />}
               <pre>
                    <code>
                         {state} - {town} - {suburb}
                    </code>
               </pre>
          </div>
     )
}
