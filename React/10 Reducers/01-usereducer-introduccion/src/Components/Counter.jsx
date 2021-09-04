import { useReducer, useState } from "react";

const initialState = {
     counter: 0
}

function reducer(state, action){
     switch (action.type) {
          case "INCREMENT":
               return {counter: state.counter + 1};
          case "DECREMENT":
               return {counter: state.counter - 1};
          default:
               return state;
     }
}

const Counter = () => {

     // const [counter, setCounter] = useState(0);
     const [state, dispatch] = useReducer(reducer, initialState)


     // const handlePlus = () => setCounter(counter+1);
     const handlePlus = () => dispatch({type: "INCREMENT"});
     const handleMinus = () => dispatch({type: "DECREMENT"});

     return (
          <div style={{textAlign: "center"}}>
               <h2>Counter Reducer</h2>
               <h3>{state.counter}</h3>
               <nav>
                    <button onClick={handlePlus}> + </button>
                    <button onClick={handleMinus}> - </button>
               </nav>
          </div>
     )
}

export default Counter
