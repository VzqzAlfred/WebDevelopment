import { memo } from "react";

const ContadorHijo = () => {
     console.log("Hijo del contador se renderiza");
     // console.log(memo());

     return (
          <div style={{border: "thin solid #000", margin: "1rem", padding: "1rem"}}>
               <h2>Hijo del contador</h2>
          </div>
     )
}

export default memo(ContadorHijo);

