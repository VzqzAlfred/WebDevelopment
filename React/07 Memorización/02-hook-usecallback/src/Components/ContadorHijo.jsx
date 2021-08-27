import { memo } from "react";

const ContadorHijo = ({contador, up, down}) => {
     console.log("Hijo del contador se renderiza");
     // console.log(memo());

     return (
          <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
               <h2>Hijo del contador</h2>
               <h3>{contador}</h3>
                <nav>
                    <button onClick={up}> + </button>
                    <button onClick={down}> - </button>
               </nav>
          </div>
     )
}

export default memo(ContadorHijo);

