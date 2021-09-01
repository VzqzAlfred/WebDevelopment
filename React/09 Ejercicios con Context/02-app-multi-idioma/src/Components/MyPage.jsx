import { useState } from "react"
import { LanguageProvider } from "../Context/LanguageContext";
import { ThemeProvider } from "../Context/ThemeContext";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const initialAuth = null;


const MyPage = () => {
     const [auth, SetAuth] = useState(initialAuth);

     // console.log(texts);

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
               <LanguageProvider>
               <ThemeProvider> 
                         <Header
                              auth={auth} 
                              handleAuth={handleAuth} 
                              />
                         <Main auth={auth} />
                         <Footer />
               </ThemeProvider>
                         </LanguageProvider>
          </div>
     )
}

export default MyPage
