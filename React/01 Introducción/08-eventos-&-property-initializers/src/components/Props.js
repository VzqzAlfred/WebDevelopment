import React from 'react';
import PropTypes from "prop-types";

export default function Props(props){
    return (
        <div>
            <h2>{props.byDefault}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.number}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.array.join(", ")}</li>
                    <ul>
                        {props.array.map((el, index) => (
                        <li key={index}>{el}</li>
                        ))}
                    </ul>
                <li>{props.object.greeting + " - " + props.object.twitter}</li>
                <li>{props.array.map(props.function_).join(", ")}</li>
                <li>{props.ReactElement}</li>
                <li>{props.ReactComponent}</li>
            </ul>
        </div>
    );  
}

Props.defaultProps = {
    byDefault: "The Props"
}

Props.propTypes = {
    cadena: PropTypes.string,
    number: PropTypes.number.isRequired,
    booleano: PropTypes.bool,
    array: PropTypes.array,
    object: PropTypes.object
}