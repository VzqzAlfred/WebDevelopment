// import logo from './logo.svg';
import './App.css';
import MaterialUI from './components/MaterialUI';
import MaterialDrawer from "./components/MaterialDrawer";
// import ReactBootstrap from "./components/ReactBootstrap"

export default function App() {
  return (
     <div>
          <h1>Frameworks CSS with React</h1>

          {/* <ReactBootstrap /> */}

          <MaterialDrawer />
          <hr />
          <MaterialUI />
     </div>
  );
}
