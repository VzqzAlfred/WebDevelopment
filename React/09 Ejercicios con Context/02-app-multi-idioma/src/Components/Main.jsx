import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import LanguageContext from "../Context/LanguageContext";

const Main = ({auth}) => {
     const {theme} = useContext(ThemeContext);
     const {texts} = useContext(LanguageContext);

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
