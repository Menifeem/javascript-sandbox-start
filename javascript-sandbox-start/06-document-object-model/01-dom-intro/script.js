// Document Object Model (DOM) in JavaScript is a programming interface that represents the structure of an HTML or XML document as a tree of objects. It allows developers to access, manipulate, and modify the content, structure, and styles of a web page dynamically

// https://www.w3schools.com/js/js_htmldom.asp

// Quick look at the window objects 
console.log(window);                        // Within this yuo can find the 'document' object to view tools that can be used
console.log(window.document);               // Another path for the windown objects
console.dir(window.document);               // Can see the properties and methods etc

// References the Body element
console.log(document.body);


console.log(document.body.innerHTML);       // seeing the HTML within the body


console.log(document.body.innerText);       // View the texts


// Getting all the links on a page(HTML Collection)
console.log(document.links);                // Tells me how many links are associated

console.log(document.links[0]);


// Change from read only
document.body.innerHTML = '<h1>Hello to ALL</h1>';          // Replaces all the text from the body


// Write something to the browser 
document.write('Hello to Everyone');        // It adds to the end of the last text on the file to display on the browser


// Method to select emlements in the DOM(Attempting to select the main id)
console.log(document.getElementById('main'));               // Get element by id from the script and 'main' is the id we want to grab here

// cont'd
const main = document.getElementById('main');               // set variable for 'main' to target the main element
main.innerHTML = '<h1> Hello I am working today</h1>';      // we then set the 'main.innerHTML'to a different text


// Query selector
document.querySelector('#main h1').innerText = 'Hola';      // '#' can choose classes and or elements > attaching the inner text 




