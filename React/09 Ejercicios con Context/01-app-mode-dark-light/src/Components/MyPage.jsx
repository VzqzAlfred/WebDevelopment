import { useState } from "react"
import { ThemeProvider } from "../Context/ThemeContext";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const initialLanguage =  "en";
const initialAuth = null;

const translations = {
     es: {
          headerTitle: "Mi aplicación con Context API",
          headerSubtitle: "Mi cabecera",
          headerLight: "Claro",
          headerDark: "Oscuro",
          buttonLogin: "Iniciar Sesión",
          buttonLogout: "Cerrar Sesión",
          mainWelcome: "Bienvenid@ invitad@",
          mainHello: "Hola Usuari@",
          mainContent: "Mi contenido principal",
          footerTitle: "Mi pié de página"
     },
     en: {
          headerTitle: "My application with Context API",
          headerSubtitle: "My header",
          headerLight: "Light",
          headerDark: "Dark",
          buttonLogin: "Login",
          buttonLogout: "Logout",
          mainWelcome: "Welcome Guest",
          mainHello: "Hello User",
          mainContent: "My main content",
          footerTitle: "My footer",
     }
}


const MyPage = () => {
     
     const [language, setLanguage] = useState(initialLanguage);
     const [texts, setTexts] = useState(translations[language]);
     const [auth, SetAuth] = useState(initialAuth);

     // console.log(texts);


     const handleLanguage = e => {
          if (e.target.value === "es") {
               setLanguage("es");
               setTexts(translations.es);
          }else {
               setLanguage("en");
               setTexts(translations.en);
          }
     };

     const handleAuth = e => {
          // console.log(e.target.textContent);

          if (auth) {
               SetAuth(null);
          }else {
               SetAuth(true);
          }
     }


     return (
          <div className="my-page">
               <h1>{texts.headerTitle}</h1>
               <ThemeProvider> 
                    <Header
                         texts={texts} 
                         handleLanguage={handleLanguage} 
                         auth={auth} 
                         handleAuth={handleAuth} 
                    />
                    <Main texts={texts} auth={auth} />
                    <Footer texts={texts} />
               </ThemeProvider>
          </div>
     )
}

export default MyPage
