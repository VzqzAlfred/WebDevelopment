import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import LanguageContext from "../Context/LanguageContext";
import LogInContext from "../Context/LanguageContext";

const Main = () => {

     const {theme} = useContext(ThemeContext);
     const {texts} = useContext(LanguageContext);
     const {auth} = useContext(LogInContext);

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
