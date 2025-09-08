// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element

// https://www.freecodecamp.org/news/event-bubbling-in-javascript/

// Example _ from the 'Add Item' button
const button = document.querySelector('form button');           // look at the form & grab the button from the form

button.addEventListener('click', () => {                        // Pass in function to display alert windown when the 'add item' button was selected
    alert('Button was clicked')
});


// Bringing in the parent to the button ('<div class="form-control">')
const div = document.querySelector('form div:nth-child(2)');    // it is the 2nd 'div' from the scipt and we are setting a variable here

div.addEventListener('click', () => {
    alert('Div was clicked')
});


// cont'd (bringing in the form)
const form = document.querySelector('form');

form.addEventListener('click', () => {
    alert('From was clicked')           // If selecting the button then it will bubble up with alerts starting with 'button was clicked', 'div' and then 'form was clicked'
});                                     // results in alert for 'from' if anywhere outside of the button was clicked


// Contd > adding event listener to the body
document.body.addEventListener('click', () => {                 // Alert will be visible when selecting anywhere on the from
    alert('Body was clicked')
});             


// Stop Propogation method - Used to stop it from bubbling
button.addEventListener('click', (e) => {                        // Pass in function to display alert windown when the 'add item' button was selected
    alert('Button was clicked');
    e.stopPropagation();                                        // now only the 'button was clicked' alert will display
});