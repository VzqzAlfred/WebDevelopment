import React, { Component } from 'react';
import data from "../helpers/data"

function ElementList(props){
    return(
        <li>
            <a 
                className="App-link" 
                href={props.el.web} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                    {props.el.name}
            </a>
        </li>
    );
}

export default class RenderElements extends Component{
    constructor(props){
        super(props);
        this.state={
            seasons: ["Spring", "Summer", "Autum", "Winter"]
        }
    }

    render(){
        
        return(
            <div>
                <h2>Element's Rendered</h2>
                <h3>Year's seasons</h3>
                <ol>
                    {
                        this.state.seasons.map((el, index) => <li key={el}>{el}</li>)
                    }
                </ol>

                    <h3>Front-End Frameworks JS</h3>
                <ul>
                    {
                        data.frameworks.map((el) => <ElementList key={el.id} el={el} /> )
                    }
                </ul>


            </div>
        );
    }
}