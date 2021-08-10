import React from 'react'
import  './Styles.css';
import moduleStyles from './Style.module.css';
import './Style.scss';


export default function Styles(){

     let myStyle = {
          borderRadius: "1.5rem",
          margin: "3rem auto",
          maxWidth: "50%"
     };


     return(
          <>
               <section className="estilos">
                    <h2>Styles with React</h2>
                    <h3 className="bg-react">Styles in CSS extern</h3>

                    <h3 className="bg-react" style={{borderRadius: ".75rem", margin: "1rem"}}>Styles in line (style attribute)</h3>

                    <h3 className="bg-react" style={myStyle}>Styles in line</h3>

                    <h3 className="bg-react">
                         Add Normalize with
                         <br />
                         <code>@import-normalize;</code>
                    </h3>

                    <h3 className={moduleStyles.error}>Styles with modules</h3>

                    <h3 className={moduleStyles.success}>Styles with modules</h3>

                    <h3 className="bg-sass">Styles using Sass</h3>
               </section>
          </>
     );
}