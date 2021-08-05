import React, { Component } from 'react';

function Login(){
    return(
        <div>
            <h2>Login</h2>
            <p>Great! The user is login 🤗</p>
        </div>
    );
}

function Logout(){
    return(
        <div>
            <h2>Logout</h2>
            <p>Excuse me! The user isn't login 😓</p>
        </div>
    );
}


export default class ConditionalRendered extends Component{
    constructor(props){
        super(props);
        this.state = {
            sesion: true
        }

        setInterval(() => {
            this.setState({
                sesion: this.state.sesion === false
            });
        }, 2500);
    }


    render(){
        return(
            <div>
                <h3>Conditional Rendered</h3>
                
                    {
                        (this.state.sesion === true)
                            ? <Login />
                            : <Logout />
                    }
                
            </div>
        );
    }
} 