import React, { useState } from 'react';

export default function CounterHook(props){

     // console.log(useState());
     const [state, setState] = useState(0);

     const plus = () => setState(state + 1);  

     const minus = () => setState(state - 1);

     return(
          <>
               <h2>Hook - useState</h2>
               <nav>
                    <p>{state}</p>
                    <button onClick={plus}>Plus +</button>
                    <button onClick={minus}>Minus -</button>
               </nav>
               <p>Counter of {props.title}</p>
          </>
     );
}

CounterHook.defaultProps = {
     title: "clicks"
}