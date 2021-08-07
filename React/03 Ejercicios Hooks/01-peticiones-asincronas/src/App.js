import logo from './logo.svg';
import './App.css';
import AJAXHook from './components/AJAXHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <h1>Requests Asynchronous</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <hr />

        <AJAXHook />

      </header>
    </div>
  );
}

export default App;
