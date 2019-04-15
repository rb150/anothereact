import React from 'react' //must always import react 


//component is function that returns jsx.  Written like any other function,
//as long as it returns jsx.  If using jsx, must import react


const person = (props) => { //react uses props object to access attributes
    //curly braces are used to make an element dynamic
    //must use the name of the attributes (in the file that imports this file)
    //all attributes are under the props object

    //If we want have the names and age change using switchNameHandler() when the paragraph is clicked
    //this is done by passing a reference to the handler as a prop
    return ( //outputting multiple elements, hence the parenthesis
    <div> {/*jsx components must have only one parent element.  Hence the multiple
    p elements must be contained in one div element*/}
    {/*pass a reference to switchNameHandler as a prop.  
    In order to have it work when the paragraph is clicked, set the prop.click property 
    (click being the attribute that is linked to switchNameHandler in the main component, like name and age) to the onClick method*/}
    <p onClick={props.click}> I'm {props.name} and {props.age} years old</p>
{/*props.children is reserved.  Nothing was passed but this reserved
keyword will take whatever is pass between the opening and closing tag
of the element in the main component*/}
    <input type="text" onChange={}/>
    <p>{props.children}</p>
    </div>
    )
};

export default person; //export function as default of the file in person constant which holds
//the function