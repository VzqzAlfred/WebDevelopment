import { useReducer } from "react";
import { TYPES } from "../Actions/counterActions";
import { counterInit, counterInitialState, counterReducer } from "../Reducers/counterReducer";


const CounterMejorado = () => {
     const [state, dispatch] = useReducer(counterReducer, counterInitialState, counterInit)

     const handlePlus = () => dispatch({type: TYPES.INCREMENT});
     const handlePlus_5 = () => dispatch({type: TYPES.INCREMENT_5, payload: 5});
     const handleMinus = () => dispatch({type: TYPES.DECREMENT});
     const handleMinus_5 = () => dispatch({type: TYPES.DECREMENT_5, payload: 5});
     const reset = () => dispatch({type: TYPES.RESET});


     return (
          <div style={{textAlign: "center"}}>
               <h2>Counter Mejorado Reducer</h2>
               <h3>{state.counter}</h3>
               <nav>
                    <button onClick={handlePlus_5}> +5 </button>
                    <button onClick={handlePlus}> + </button>
                    <button onClick={reset}>0</button>
                    <button onClick={handleMinus}> - </button>
                    <button onClick={handleMinus_5}> - 5 </button>
               </nav>
          </div>
     );
}

export default CounterMejorado