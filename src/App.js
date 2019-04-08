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

  switchNameHandler = (newName) => { //use suffix handler to indicate this method is an event handler
    //console.log("was clicked");
    //DON'T DO THIS: this.state.persons[0].name = 'Maximillian';, state is immutable and shouldnt be changed
    //use this.setState() method instead instead
    this.setState( { //only available using classes that extend component.  In react 16.8, one can use hooks
      persons: [ //array of objects
        {name: newName, age: 28},
        {name: 'Manu Ginobli', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    })
  };

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
    {/*when calling switchNameHandler, do not use paranthesis otherise the metho will be called when page is loaded
    We want to reference the method instead, so don't use parenthesis */}
      <button onClick={this.switchNameHandler.bind(this, "James Bond")}>Switch Name</button>{/*use bind to be able to pass value into handler method*/}
       {/*Able to use self closing tag for Person since we
        don't nest anything in between the element*/}
        {/*variables/attributes (name and age) are accessed
        by using props in the component file*/}
        {/*send information from state object created above.
        must use this to access objects in same class*/}
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/> 
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler}>My Hobbies: Racing</Person>{/*pass reference to switchNameHandler as prop to use it in functional component*/}
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/> 
      </div>
    );

    //return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    
    //add styling by replacing null with an object that has our styling.
    //this (below) is what the above code will get compiled into
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }  
}

export default App;
