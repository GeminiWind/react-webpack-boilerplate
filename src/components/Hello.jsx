import React,{ Component } from 'react'
import logo from '@static/logo.svg';
import '@css/App.scss';

class Hello extends Component{
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                Time to make something awesome
                </p>
          </div>
        );
    }
}

export default Hello
