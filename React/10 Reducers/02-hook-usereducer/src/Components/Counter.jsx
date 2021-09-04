import { useReducer } from "react";

const initialState = {
     counter: 0
}

const TYPES = {
     INCREMENT: "INCREMENT",
     INCREMENT_5: "INCREMENT_5",
     DECREMENT: "DECREMENT",
     DECREMENT_5: "DECREMENT_5",
     RESET: "RESET"
}

function reducer(state, action){
     switch (action.type) {
          case TYPES.INCREMENT:
               return {counter: state.counter + 1};
           case TYPES.INCREMENT_5:
               return {counter: state.counter + action.payload};
          case TYPES.DECREMENT :
               return {counter: state.counter - 1};
           case TYPES.DECREMENT_5:
               return {counter: state.counter - action.payload};
           case TYPES.RESET:
               return initialState;
          default:
               return state;
     }
}

const Counter = () => {

     // const [counter, setCounter] = useState(0);
     const [state, dispatch] = useReducer(reducer, initialState)


     // const handlePlus = () => setCounter(counter+1);
     const handlePlus = () => dispatch({type: TYPES.INCREMENT});
     const handlePlus_5 = () => dispatch({type: TYPES.INCREMENT_5, payload: 5});
     const handleMinus = () => dispatch({type: TYPES.DECREMENT});
     const handleMinus_5 = () => dispatch({type: TYPES.DECREMENT_5, payload: 5});
     const reset = () => dispatch({type: TYPES.RESET});



     return (
          <div style={{textAlign: "center"}}>
               <h2>Counter Reducer</h2>
               <h3>{state.counter}</h3>
               <nav>
                    <button onClick={handlePlus_5}> +5 </button>
                    <button onClick={handlePlus}> + </button>
                    <button onClick={reset}>0</button>
                    <button onClick={handleMinus}> - </button>
                    <button onClick={handleMinus_5}> - 5 </button>
               </nav>
          </div>
     )
}

export default Counter
