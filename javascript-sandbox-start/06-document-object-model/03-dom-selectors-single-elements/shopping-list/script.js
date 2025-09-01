// JavaScript is most commonly used to get or modify the content or value of the HTML elements on the page, as well as to apply some effects like show, hide, animations etc. But, before you can perform any action you need to find or select the target HTML element.
// Used to target specific area and not areas
// https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-selectors.php

// document.getElementbyId()                                    // grabbing the element > anything within the '()' is our target


// Getting the app title(H1 within elements)
console.log(document.getElementById("app-title"));              // Results in '<h1 id="app-title">Shopping List</h1>'


// Get a specific attribute
console.log(document.getElementById("app-title").id);           // Results in 'app-title'

// Get classname (Attribute)
console.log(document.getElementById("app-title").className);  
// OR
console.log(document.getElementById("app-title").getAttribute('id'));       // Results in 'app-title'


// Set Attributes
document.getElementById('app-title').title = 'Shopping List';


// Set Attribute Method
document.getElementById('app-title').setAttribute('class', 'title');        // set attribute within '()' > we first list the item of focus and the 2nd is what we want to change it to


// Using the 'document.getElementById()' as a variable to prevent from having to type it out many times
const title = document.getElementById('app-title');


console.log(title);



// Get/Change content 
console.log(title.textContent);                             // Results in 'Shopping List' 

// Change it
title.textContent = 'Hello World';                          // Title changes to 'Hello World'

// Change inner Text
title.innerText = 'Tango Down';                             // more commonly used and title changed to 'Tango Down'


// HTML Tags
title.innerHTML = '<strong>Shopping List</strong>';         // Changed title back to 'Shopping List'


// Change Styles
title.style.color = 'orange';                               // Changed title color to orange
title.style.backgroundColor = 'black';                      // Changed title background color to black
title.style.padding = '20px';                               // Changed padding of title
title.style.borderRadius = '50px';                          // Changed radius of the title (Rounded rectangle)


// document.querySelector();                                // 'querySelector' only selects single elements > usually used to select a class 
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));          // Also logs the 'h1'
console.log(document.querySelector('.container'));          // Select by class 
console.log(document.querySelector('input[type="text"]'));   // working with attribute > get the input that has a type of text


// Cont'd using Suedo Selector
console.log(document.querySelector('li').innerText);                    // Pulls the 1st list item = 'Apples'
console.log(document.querySelector('li:nth-child(2)').innerText);       // Results in pulling 'Orange Juice' which is the 2nd list item

const secondItem = document.querySelector('li:nth-child(2)');           // we made a variable for the 2nd item > then targeted the text of that to change to 'Apple Juice'
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'purple';                                      // Changed color of 2nd list item to purple


// Use these methods on other elements 
const list = document.querySelector('ul');                              // Gives us the entire ul (apples, apple juice, oreos & milk)

console.log(list);


// Selecing 1st item on the list
const firstItem = list.querySelector('li');                             // we took the first item on the list and changed coloe red
firstItem.style.color = 'red';








