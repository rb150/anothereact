import React from 'react' //must always import react 


//component is function that returns jsx.  Written like any other function,
//as long as it returns jsx.  If using jsx, must import react


const person = (props) => { //react uses props object to access attributes
    //must use the name of the attributes (in the file that imports this file
    //all attributes are under the props object
    return <p>I'm a person and I am {props.name} and {props.age} years old</p>
}

export default person; //export function as default of the file in person constant which holds
//the function