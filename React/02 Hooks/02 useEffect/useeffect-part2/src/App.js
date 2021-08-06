import logo from './logo.svg';
import './App.css';
import ScrollHook from './components/ScrollHook';
import ClockHook from './components/ClockHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>Hooks!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <br /><br /><br />
        <hr />

        <ScrollHook />
        <hr />

        <ClockHook />
        <hr />
      </header>
    </div>
  );
}

export default App;
