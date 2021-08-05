import React, { Component } from 'react'

export default class Father extends Component{
    state = {
        counter: 0
    };

    incrementCounter = (e) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }    

    render(){
        return(
            <div>
                <h2>Comunication between components</h2>
                <p>Counter <b>{this.state.counter}</b></p>
                <Son incrementCounter={this.incrementCounter} message="Message for the component son 1" />
                <Son incrementCounter={this.incrementCounter} message="Message for the component son 2" />
            </div>
        );
    }
}


function Son(props){
    return(
        <>
            <h3>{props.message}</h3>
            <button onClick={props.incrementCounter}>Plus +</button>
        </>
    );
}