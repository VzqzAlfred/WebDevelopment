import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Component";
import Form from "./components/input";
import Seasons from "./components/seasons";
import "./App.css";

function App() {

  let name = "Alfred";
  let author = true;
  

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>¡Welcome to React {name}!</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {author ? "User Login" : "User not Login"}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <br />
          <section>
            <Componente msg="Hi, I'm Component functional from a prop"/>
          </section>

          <br />
          <section>
            <Seasons />
          </section>
          
          <br />
          <section>
            <Form text="Type your email" />
          </section>
          <br />

        </header>
      </div>
    </>
  );
}


export default App;