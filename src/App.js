import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //   <h1>Hi, I'm a React App</h1>
    //   </div>
    // );

    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    
    //add styling by replacing null with an object that has our styling.
    //this (below) is what the above code will get compiled into
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }  
}

export default App;
