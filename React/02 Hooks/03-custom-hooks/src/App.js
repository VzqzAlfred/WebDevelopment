import logo from './logo.svg';
import './App.css';
import HooksPersonalizados from './components/HooksPersonalizados';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <h1>Customs - Hooks</h1>
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

        <HooksPersonalizados />
      </header>
    </div>
  );
}

export default App;
