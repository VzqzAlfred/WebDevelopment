import React, { Component } from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 0
    }

    // Bindeo (Enlazado de this), para que this no salga undefined
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this)
  }

  plus(e){
    //   console.log("Plussing");
    //   console.log(this);
      this.setState({
          counter: this.state.counter + 1
      })
  }

  minus(){
    //   console.log("Minussing");
    this.setState({
        counter: this.state.counter - 1
    });
  }


  render(){
    return(
        <div>
            <h2>Events on class's components</h2>
            <nav>
                <button onClick={this.plus}>Plus +</button>
                <button onClick={this.minus}>Minus -</button> 
            </nav>
            <h3>{this.state.counter}</h3>
        </div>
    );
  }
}
