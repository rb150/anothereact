import React, { Component } from 'react';
import './App.css';
/*import Person (any name) from Person file
should have uppercase.  In jsx, all elements starting with lower case elements
are reserved for native html elements (<Div> (custom) vs <div>)
*/
import Person from './Person/Person' 

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
       {/*Able to use self closing tag for Person since we
        don't nest anything in between the element*/}
        {/*variables/attributes (name and age) are accessed
        by using props in the component file*/}
      <Person name="John" age="20"/> 
      <Person name="Jim" age="21"/> 
      <Person name="Jill" age="22"/> 
      </div>
    );

    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    
    //add styling by replacing null with an object that has our styling.
    //this (below) is what the above code will get compiled into
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }  
}

export default App;
