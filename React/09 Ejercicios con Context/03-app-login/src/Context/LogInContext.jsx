import {createContext, useState} from "react";

const LogInContext = createContext();

const initialAuth = null;

const LogInProvider = ({childer}) => {

     const [auth, SetAuth] = useState(initialAuth);

     const handleAuth = e => {
          // console.log(e.target.textContent);

          if (auth) {
               SetAuth(null);
          }else {
               SetAuth(true);
          }
     }

     const data = { auth, handleAuth }

     return (
          <LogInContext.Provider value={data}>{childer}</LogInContext.Provider>
     );
};

export {LogInProvider};
export default LogInContext; 