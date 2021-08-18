import React, { useState } from 'react';
import { SelectList } from './SelectList';

export const SelectsAnidados = () => {
     const [state, setState] = useState("");
     const [town, setTown] = useState("");
     const [suburb, setSuburb] = useState("");

     return (
          <div>
               <h1>Selects Anidados</h1>
               <h2>México</h2>
               <SelectList title="estados" url="" handleChange={e => {setState(e.target.value)}} />
               {state && <SelectList title="municipios" url="" handleChange={e => {setTown(e.target.value)}} />}
               {town && <SelectList title="colonias" url="" handleChange={e => {setSuburb(e.target.value)}} />}
               <pre>
                    <code>
                         {state} - {town} - {suburb}
                    </code>
               </pre>
          </div>
     )
}
