import React, {useState, useEffect} from 'react'

export default function ScrollHook(){

     const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
     //     console.log("Moviendo el scroll");

          const detectScroll = () => setScrollY(window.pageYOffset);

          window.addEventListener("scroll", detectScroll);

          return () => {
               window.removeEventListener("scroll", detectScroll);
               // console.log("Fase de desmontaje");
          }
    }, [scrollY]);



     useEffect(() => {
          // console.log("Fase de montaje.")
     }, []);



     useEffect(() => {
          // console.log("Fase de actualización.");
     });

     useEffect(() => {
          return () => {
               // console.log("Fase de desmontaje");
          }
     });

     return(
          <>
               <h2>Hook - useEffect and Cyclelife</h2>
               <p>Scroll Y from navigator {scrollY}px</p>
          </>
     );

}