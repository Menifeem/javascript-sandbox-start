// Document Object in JavaScript is part of the Document Object Model (DOM) and represents the entire HTML or XML document loaded in the browser. It provides properties and methods to interact with and manipulate the document's structure, style, and content

// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// Looking at properties on the DOM
let output;

output = document.all;              // Provides us with the collection of parts associated to the page

// Access elements by index
output = document.all[11];

// Using Length property
output = document.all.length;


// Get everything that is in the HTML tag(Head Body..etc)
output = document.documentElement;


// Access just head or body
output = document.head;
output = document.body;


// Access children in the head or body
output = document.head.children;
output = document.body.children;


// DOC Type
output = document.doctype;

// Domain
output = document.domain;

// URL
output = document.URL;

// Character Set
output = document.characterSet;

// Content Type
output = document.contentType;


// Links in Html collection & specific form'[]'
output = document.forms;
output = document.forms[0];


// Specific attributes on elements
output = document.forms[0].id;                          // 'item-form'

// Method of the form
output = document.forms[0].method;                      // result sin 'get' 

// get the action(pulls the page)
output = document.forms[0].action;


// Change id of form
document.forms[0].id = 'new-id';

// Change links
output = document.links;
output = document.links[0];                             // used to grab any particular link


// Grab the href
output = document.links[0].href;

// Change the href
output = document.links[0].href = 'https://facebook.com'


// Set an id on the link
output = document.links[0].id = 'google-link';


// Change CSS class
output = document.links[0].className = 'google-class';

// See all of the classes
output = document.links[0].classList;


//Images
output = document.images;
output = document.images[0];                            // Results in the first image


// Source of the image
output = document.images[0].src;


// Acccessing forms using an index like an array> using for each
const forms = Array.from(document.forms)                // variable created > grabbing the array from the html collection 'document.forms'
forms.forEach(form => {
    console.log(form);
});




console.log(output);