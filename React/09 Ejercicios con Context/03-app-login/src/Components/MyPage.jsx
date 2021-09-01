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
                    <ThemeProvider> 
                         <LanguageProvider>
                              <Header />
                              <Main />
                              <Footer />
                         </LanguageProvider>
                    </ThemeProvider>
               </LogInProvider>
          </div>
     );
}

export default MyPage
