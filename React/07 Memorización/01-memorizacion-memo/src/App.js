import './App.css';
import Contador from './Components/Contador';

function App() {
  return (
    <div>
         <h1>Memorización en React</h1>
         <hr />
          <h2>Teoria</h2>
          <h3>
               <a 
                    href="https://reactjs.org/docs/react-api.html#reactmemo"
                    target="_blank"
                    rel="noreferrer"
          >Documentation memoizing</a>
          </h3>
          <h3>Características:</h3>
          <ul>
               <li>Se encarga de memorizar un componente.</li>
               <li>Lo vuelve a memorizar al momento de que sus <b>props</b> cambian.</li>
               <li>Evita re-renderizados.</li>
               <li>Hay que evitarlo en la medida de lo posible, pues podría ser más costosa la tarea de memorización que el re-renderizado del componente.</li>
               <li>
                    Úsalo, cuando:
                    <ul>
                         <li>Tenemos muchos elementos renderizados en una lista.</li>
                         <li>Llamamos datos de APIs.</li>
                         <li>Un componente se vuelve muy pesado.</li>
                         <li>Salen alertas de rendimiento en la consola.</li>
                    </ul>
               </li>
          </ul>
          <hr />

          <div style={{textAlign: "center"}}>
               <Contador />
          </div>
    </div>
  );
}

export default App;
