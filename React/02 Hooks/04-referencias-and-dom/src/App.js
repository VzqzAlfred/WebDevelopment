import logo from './logo.svg';
import './App.css';
import References from './components/References';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <References />

      </header>
    </div>
  );
}

export default App;
