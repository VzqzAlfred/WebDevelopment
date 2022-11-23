import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>REDUX</h1>
          <Provider></Provider>
        </header>
      </div>
    </Provider>
  );
}

export default App;
