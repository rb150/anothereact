import React, { Component } from 'react';
import './App.css';
/*import Person (any name) from Person file
should have uppercase.  In jsx, all elements starting with lower case elements
are reserved for native html elements (<Div> (custom) vs <div>)
*/
import Person from './Person/Person' 
//NOTE: classes have properties which are like variables of a class (dont use var)

//state is managed from inside the component as opposed to props with is outside the component
class App extends Component {
  state = { //reserved word in jsx
    persons: [ //array of objects
      {name: 'Max', age: 28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age: 26}
    ]
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button>Switch Name</button>
       {/*Able to use self closing tag for Person since we
        don't nest anything in between the element*/}
        {/*variables/attributes (name and age) are accessed
        by using props in the component file*/}
        {/*send information from state object created above.
        must use this to access objects in same class*/}
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );

    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    
    //add styling by replacing null with an object that has our styling.
    //this (below) is what the above code will get compiled into
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }  
}

export default App;
