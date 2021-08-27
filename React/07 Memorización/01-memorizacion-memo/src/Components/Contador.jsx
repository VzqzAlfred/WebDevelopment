import React, { useState } from 'react';
import ContadorHijo from './ContadorHijo';

const Contador = () => {
     const [counter, setCounter] = useState(0);

     const plus = () => setCounter(counter + 1);
     const minus = () => setCounter(counter - 1);

     return (
          <div>
               <h2>Contador</h2>
               <nav>
                    <button onClick={plus}> + </button>
                    <button onClick={minus}> - </button>
               </nav>
               <h3>{counter}</h3>
               <ContadorHijo />
          </div>
     )
}

export default Contador
