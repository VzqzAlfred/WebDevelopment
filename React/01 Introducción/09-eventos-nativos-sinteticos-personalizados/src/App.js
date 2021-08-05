import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Component";
import Form from "./components/Input";
import Seasons from "./components/Seasons";
import "./App.css";
import Props from "./components/Props";
import Estado from "./components/State";
import ConditionalRendered from "./components/ConditionalRender";
import RenderElements from "./components/RenderElements";
import { EventsES6, EventsES7, MoreEvents } from "./components/Events";

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
          <hr />

          <br />
          <section>
            <Seasons />
          </section>
          <hr />
          
          <br />
          <section>
            <Form text="Type your email" />
          </section>
          <br />
          <hr />

          <section>
            <Props 
              cadena="This's a string" 
              number={9}  
              booleano={true} 
              array={[20,40,60]}
              object = {{
                greeting: "Prevet",
                twitter: "glass@gmail.com"
              }}
              function_={(num) => num*num}
              ReactElement = {<i>This's a React's element </i>}
              ReactComponent = {<Componente msg="A component based as props."/>}
            />
          </section>
          <br />
          <hr />

          <Estado />
          <hr/>

          <ConditionalRendered />
          <hr />

          <RenderElements />
          <hr />

          <EventsES6 />
          <hr />

          <EventsES7 />
          <hr />

          <MoreEvents />
          <br />

        </header>
      </div>
    </>
  );
}


export default App;