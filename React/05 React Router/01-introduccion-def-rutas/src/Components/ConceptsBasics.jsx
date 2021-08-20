import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const ConceptsBasics = () => {
  return (
    <div>
      <h2>Basics Concepts</h2>
      <Router>
           {/* Switch es ir colocando rutas de las especifícas a la General */}
        <Switch>

          {/* 'exact' ayuda a cargar las rutas colocadas en la url exactas y evitarse ir de lo especifico a lo general */}
          <Route exact path="/">
            <h3>Home</h3>
            <p>Welcome to React Router</p>
          </Route>

          <Route exact path="/acerca">
            <h3>Acerca</h3>
          </Route>

          <Route exact path="/contacto">
            <h3>Contácto</h3>
          </Route>

        </Switch>
      </Router>
    </div>
  );
};
