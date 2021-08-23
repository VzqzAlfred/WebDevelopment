import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Acerca } from "../Pages/Acerca";
import { Contacto } from "../Pages/Contacto";
import { Error404 } from "../Pages/Error404";
import { Home } from "../Pages/Home";
import Productos from "../Pages/Productos";
import ReactTopics from "../Pages/ReactTopics";
import User from "../Pages/User";
import { MenuConcepts } from "./MenuConcepts";

export const ConceptsBasics = () => {
  return (
    <div>
      <h2>Basics Concepts</h2>
      <Router>
          <MenuConcepts />
        <Switch>

          <Route exact path="/" component={Home} />

          <Route exact path="/acerca" component={Acerca}/>

          <Route exact path="/contacto" component={Contacto} />

          <Route exact path="/user/:username" component={User} />

          <Route exact path="/productos" component={Productos} />

          <Route exact path="/about">
               <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
              <Redirect to="/contacto" />
          </Route>

          <Route path="/react" component={ReactTopics} />
          
          {/* Por jerarquía va al final */}
          <Route path="*" component={Error404} />

        </Switch>
      </Router>
    </div>
  );
};



// export const ConceptsBasics = () => {
//   return (
//     <div>
//       <h2>Basics Concepts</h2>
//       <Router>
//         <Switch>

//           <Route exact path="/">
//             <h3>Home</h3>
//             <p>Welcome to React Router</p>
//           </Route>

//           <Route exact path="/acerca">
//             <Acerca />
//             <p>Invocation of component</p>
//           </Route>

//           {/* <Route exact path="/contacto" component={Contacto}/> */}
//           <Route exact path="/contacto" children={
//                <>
//                     <Contacto />
//                     <p>It's a children</p>
//                </>
//           } />

//         </Switch>
//       </Router>
//     </div>
//   );
// };
