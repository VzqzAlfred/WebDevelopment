import { useState } from "react"
import { LanguageProvider } from "../Context/LanguageContext";
import { ThemeProvider } from "../Context/ThemeContext";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const initialAuth = null;


const MyPage = () => {
     const [auth, SetAuth] = useState(initialAuth);

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
               <ThemeProvider> 
                    <LanguageProvider>
                              <Header
                                   auth={auth} 
                                   handleAuth={handleAuth} 
                              />
                              <Main auth={auth} />
                              <Footer />
                    </LanguageProvider>
               </ThemeProvider>
          </div>
     )
}

export default MyPage
