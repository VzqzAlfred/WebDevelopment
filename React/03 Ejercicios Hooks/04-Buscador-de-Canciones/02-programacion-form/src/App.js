import './App.css';
import './components/Loader.css';
import {Loader} from './components/Loader';
import { SongSearch } from './components/SongSearch';

function App() {
  return (
    <>
          <h1>Song Finder</h1>
          <SongSearch />
    </>
  );
}

export default App;
