import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Main = ({ texts, auth}) => {

     const {theme} = useContext(ThemeContext)

     return (
          <main className={theme}>
               {
                    auth 
                         ? <p>{texts.mainHello}</p> 
                         : <p>{texts.mainWelcome}</p>
               }
               <p>{texts.mainContent}</p>
          </main>
     )
}

export default Main
