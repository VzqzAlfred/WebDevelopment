import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Acerca } from "../Pages/Acerca";
import { Contacto } from "../Pages/Contacto";

export const ConceptsBasics = () => {
  return (
    <div>
      <h2>Basics Concepts</h2>
      <Router>
        <Switch>

          <Route exact path="/">
            <h3>Home</h3>
            <p>Welcome to React Router</p>
          </Route>

          <Route exact path="/acerca">
            <Acerca />
            <p>Invocation of component</p>
          </Route>

          {/* <Route exact path="/contacto" component={Contacto}/> */}
          <Route exact path="/contacto" children={
               <>
                    <Contacto />
                    <p>It's a children</p>
               </>
          } />

        </Switch>
      </Router>
    </div>
  );
};
