import React, { Component } from 'react';


class Clock extends Component{


    componentWillUnmount(){
        console.log(3, "The component has been deleted from the DOM");
    }



    render(){
        return(
            <h3>{this.props.hour}</h3>
        );
    }
}


export class CycleLife extends Component{
    constructor(props){
        super(props);
        console.log(0, "The component begins, it isn't on the DOM yet");
        this.state = {
            hour: new Date().toLocaleTimeString(),
            visible: false
        }
        
        this.temporizador = null;
    }


    componentDidMount(){
        console.log(1, "The component is already on the DOM");
    }


    componentDidUpdate(prevProps, prevState){
        console.log(2, "The state or props of component has changed");
        console.log(prevProps);
        console.log(prevState);
    }



    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hour: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    start = () => {
        this.tictac();
        this.setState({
            visible: true
        })
    }

    stop = () => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        })
    }

    render(){
        console.log(4, "The component is painted (or repainted by some change) on the DOM");
        return(
            <div>
                <h2>Lifecycle of the class's components </h2>
                {this.state.visible && <Clock hour={this.state.hour}/>}
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
            </div>
        );
    }
} 