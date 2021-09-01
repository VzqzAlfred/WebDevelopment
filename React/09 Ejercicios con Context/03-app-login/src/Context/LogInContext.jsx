import { createContext, useState } from "react";

const LogInContext = createContext();

const initialAuth = null;

const LogInProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  const data = { auth, handleAuth };

  return <LogInContext.Provider value={data}>{children}</LogInContext.Provider>;
};

export { LogInProvider };
export default LogInContext;