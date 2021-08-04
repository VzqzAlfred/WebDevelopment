import React, {Component} from 'react';

function StateSon(props){
    return(
            <div>
                <h3>{props.counterSon}</h3>
            </div>
    );
}

export default class Estado extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };

        // setInterval(() => {
        //     this.setState({
        //         counter: this.state.counter + 1
        //     });
        // }, 1000);
    }


    render(){
        return(
                <div>
                    <h2>The State</h2>
                    <p>{this.state.counter}</p>
                    <StateSon counterSon={this.state.counter} />
                </div>
        );
    }
}