import React from "react";
import "../App.css";

const Form = props => {
  let name = "Alfred";
  return (
    <>
      <section>
        <label htmlFor="name">¡ {props.text} {name}!</label>
        <br />
        <input type="email" id="name" autoComplete="off" />
      </section>
    </>
  );
};


export default Form;