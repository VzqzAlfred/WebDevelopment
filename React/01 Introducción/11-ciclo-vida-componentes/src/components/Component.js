import React from "react";

// Componente hecho por clases

/*
class Componente extends Component {
    render(){
        return (
        <>
            <section style={{border: "thin solid #FFF"}}>
                <h2>{this.props.msg}</h2>
                <p>Componente de "./components/Component.js"</p>
            </section>
        </>    
        );
    }
}
*/


// Componente hecho de forma funcional

const Componente = (props) => {
    return (
        <>
            <section style={{border: "thin solid #FFF"}}>
                <h2>{props.msg}</h2>
                <p>Componente de "./components/Component.js"</p>
            </section>
        </>
    );
}

export default Componente;