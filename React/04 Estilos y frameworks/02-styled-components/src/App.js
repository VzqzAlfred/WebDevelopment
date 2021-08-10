import logo from './logo.svg';
import './App.css';
import StyledComponents from './components/StyledComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Styled Components</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>

        <StyledComponents />
      </header>
    </div>
  );
}

export default App;
