import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import LanguageContext from "../Context/LanguageContext";

const Header = ({auth, handleAuth}) => {
     const {theme, handleTheme} = useContext(ThemeContext);
     const {texts, handleLanguage} = useContext(LanguageContext);

     return (
          <header className={theme}>
               <h1>{texts.headerTitle}</h1>
               <h2>{texts.headerSubtitle}</h2>
               <select name="language" onChange={handleLanguage}>
                    <option value="en">EN</option>
                    <option value="es">ES</option>
               </select>
               <input type="radio" name="theme" id="light" onClick={handleTheme} value="light" />
               <label htmlFor="light">{texts.headerLight}</label>
               
               <input type="radio" name="theme" onClick={handleTheme} id="dark" value="dark" />
               <label htmlFor="dark">{texts.headerDark}</label>

               <button onClick={handleAuth}>
                    {
                         auth
                              ? texts.buttonLogout
                              : texts.buttonLogin
                    }
               </button>
          </header>
     )
}

export default Header
