import logo from "./logo.svg";
import "./App.css";

function App() {

  let name = "Alfred";
  let author = true;
  let seasons = ["Spring","Summer", "Autum", "Winter"];
  

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
          <h2>Seasons</h2>
          <ul>
            {
              seasons.map((season, index) => (
                <li key={index}>{season}</li>
              ))
            }
          </ul>
        </header>
      </div>

      <div className="App">
        <section className="App-header">
          <label htmlFor="name">¡Type your email {name}!</label>
          <br />
          <input type="email" id="name" autoComplete="off" />
        </section>
      </div>
    </>
  );
}

export default App;