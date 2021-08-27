import { memo, useMemo } from "react";

const ContadorHijo = ({contador, up, down}) => {

     // let superNum = 0;

     // for (let i = 0; i < 1000000000; i++) {
     //      superNum++;
     // }

     const number = useMemo(() => {
          let num = 0;
          for (let i = 0; i < 1000000000; i++) {
               num++;
          }

          return num;
     }, []);

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
               {/* <h3>{superNum}</h3> */}
               <h3>{number}</h3>
          </div>
     )
}

export default memo(ContadorHijo);

