// Creating new elements

const div = document.createElement('div');              // Creating a new div > take our document object > createElement method > we passing in the elementwe we desire. In this it is the div


// adding attributes to the div
div.className = 'my-element';                           // Added classname
div.id = 'my-element';                                  // added new id

// set attribute method
div.setAttribute('title', 'My Element');                // Added a title "My Element"


// Adding to an empty div(innerText) > meant to use to acquire and change an already existing element 
div.innerText = 'Hello World';


// Cont'd but better with innerTextNode
const text = document.createTextNode('Hello Everyone');         // created text node with desired text
div.appendChild(text);                                  // adding the text node to the div with appendChild > Here we are putting a text inside of a div

// Adding it to the page (at the bottom)
document.body.appendChild(div);

// End of the List
document.querySelector('ul').appendChild(div);          // 1st address the 'ul' and then add by appendChild


console.log(div);


