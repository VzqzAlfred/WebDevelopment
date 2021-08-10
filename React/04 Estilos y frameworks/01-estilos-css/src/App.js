import logo from './logo.svg';
import './App.css';
import Styles from './components/Styles.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <h1>Styles - CSS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>

        <Styles />
      </header>
    </div>
  );
}

export default App;
