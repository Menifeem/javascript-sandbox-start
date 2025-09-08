// Taking an element from the DOM (Logo('img'))
const logo = document.querySelector('img');


/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/ 



logo.addEventListener('click', function(e) {            // Taking in a function once we click on the logo > the function took in an event('e') object
    console.log(e);                                     // Results in objects with manby properties and methods
});

// Cont'd but can be used with a separate function
function onClick(e) {
    console.log(e);
}

logo.addEventListener('click', onClick);                // Results in objects with manby properties and methods


// `target` - The element that triggered the event
function onClick1(e) {
    console.log(e.target);                              // Results in the 'img src' html tag
}
logo.addEventListener('click', onClick1); 

// `currentTarget` - The element that the event listener is attached to 
function onClick2(e) {
    console.log(e.currentTarget);                              // Results in the same as 'Target' event object but it is associated to what it is attached to
}
logo.addEventListener('click', onClick2); 

// currentTarget Cont'd - making the background of item black
function onClick2a(e) {
    console.log(e.currentTarget); 
    // Take the element > target > style to address the background color
    e.target.style.backgroundColor = 'black';                             // Results in the same as 'Target' event object and converting color to black
}           
logo.addEventListener('click', onClick2a); 


// `type` - The type of event that was triggered
function onClick3(e) {
    console.log(e.type);                              // Results in console log 'click'
}
logo.addEventListener('click', onClick3); 


// `timeStamp` - The time that the event was triggered
function onClick4(e) {
    console.log(e.timeStamp);                              // Results in time it was clicked
}
logo.addEventListener('click', onClick4); 


// `clientX` - The x position of the mouse click relative to the window (X is horizontal)
function onClick5(e) {
    console.log(e.clientX);                              // Results in '#' as the position the mouse was selected'
}
logo.addEventListener('click', onClick5); 


// `clientY` - The y position of the mouse click relative to the window
function onClick6(e) {
    console.log(e.clientY);                              // Results in '#' as the position the mouse was selected'
}
logo.addEventListener('click', onClick6); 

// clientX 7 clientY with onDrag
function onDrag(e) {
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('drag', onDrag);


// offsetX` - The x position of the mouse click relative to the element
function onClick7(e) {
    console.log(e.offsetX);                              // Results in '#' as the position the mouse was selected in relation to the image
}
logo.addEventListener('click', onClick7);


// `offsetY` - The y position of the mouse click relative to the element
function onClick8(e) {
    console.log(e.offsetY);                              // Results in '#' as the position the mouse was selected in relation to the image
}
logo.addEventListener('click', onClick8);


// `pageX` - The x position of the mouse click relative to the page
function onClick9(e) {
    console.log(e.pageX);                              // Results in '#' as the position the mouse was selected in relation to the entire page
}
logo.addEventListener('click', onClick9);


// `pageY` - The y position of the mouse click relative to the page
function onClick10(e) {
    console.log(e.pageY);                              // Results in '#' as the position the mouse was selected in relation to the entire page
}
logo.addEventListener('click', onClick10);


// `screenX` - The x position of the mouse click relative to the screen
function onClick11(e) {
    console.log(e.screenX);                              // Results in '#' as the position the mouse was selected in relation to the entire screen
}
logo.addEventListener('click', onClick11);


// `screenY` - The y position of the mouse click relative to the screen
function onClick12(e) {
    console.log(e.screenY);                              // Results in '#' as the position the mouse was selected in relation to the entire screen
}
logo.addEventListener('click', onClick12);


// Prevent Default method - preventDefault() method is used to stop the default action of an event from occurring
document.querySelector('a').addEventListener('click', function(e) {     // 'a' was the only link in the script(a href...)
    e.preventDefault();                                                 // prevents from proceeding to the link

    console.log('Link was clicked');
})








/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
- `Prevent Default method - preventDefault() method is used to stop the default action of an event from occurring`
*/ 