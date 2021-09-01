import { LanguageProvider } from "../Context/LanguageContext";
import { LogInProvider } from "../Context/LogInContext";
import { ThemeProvider } from "../Context/ThemeContext";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const MyPage = () => {

     return (
          <div className="my-page">
               <LogInProvider>
                    <LanguageProvider>
                         <ThemeProvider> 
                              <Header />
                              <Main />
                              <Footer />
                         </ThemeProvider>
                    </LanguageProvider>
               </LogInProvider>
          </div>
     )
}

export default MyPage
