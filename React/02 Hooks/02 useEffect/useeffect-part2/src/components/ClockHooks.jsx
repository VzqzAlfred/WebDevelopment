import React, { useState, useEffect } from 'react';

function Clock({hour}){
     return(
          <>
               <h3>{hour}</h3>
          </>
     );
}

export default function ClockHook(){

     const [hour, setHour] = useState(new Date().toLocaleTimeString());
     const [visible, setVisible] = useState(false);

     useEffect(() => {
          let temporizador;

          if (visible) {
               temporizador = setInterval(() => {
                    setHour(new Date().toLocaleTimeString());
               }, 1000);
          } else {
               clearInterval(temporizador);
          }

          return() => {
               console.log("Fase de desmontaje");
               clearInterval(temporizador)
          };

     }, [visible]);
     

     return(
          <>
               <h2>Clock with Hooks</h2>
               {visible && <Clock hour={hour} />}
               <div>
                    <button onClick={() => setVisible(true)}>Start clock!</button>
               
                    <button onClick={() => setVisible(false)}>Stop clock</button>
               </div>
          </>
     );
}