import { useState, useCallback } from 'react';
import ContadorHijo from './ContadorHijo';

const Contador = () => {
     const [counter, setCounter] = useState(0);
     const [input, setInput] = useState("");

     // const plus = () => setCounter(counter + 1);
     const plus = useCallback(
          () => {
               setCounter(counter+ 1);
          },
          [counter],
     )

     // const minus = () => setCounter(counter - 1);
     const minus = useCallback(
          () => {
               setCounter(counter - 1);
          },
          [counter],
     )

     const handleInput = e => setInput(e.target.value);
     
     return (
          <div>
               <h2>Contador</h2>
               <nav>
                    <button onClick={plus}> + </button>
                    <button onClick={minus}> - </button>
               </nav>
               <h3>{counter}</h3>
               <input type="text" onChange={handleInput} value={input} />
               <ContadorHijo contador={counter} up={plus} down={minus} />
          </div>
     )
}

export default Contador
