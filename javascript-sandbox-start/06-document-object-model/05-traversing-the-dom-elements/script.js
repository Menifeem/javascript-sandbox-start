// Traversing the DOM (Document Object Model) is a fundamental skill for web developers using JavaScript. Mastering DOM traversal will enable you to manipulate web pages dynamically, creating interactive and responsive user experiences

// https://www.w3docs.com/learn-javascript/traversing-the-dom.html
// Node Types: https://www.w3schools.com/jsref/prop_node_nodetype.asp


let output;

// Child Node Property (here we performed it on the parent)
const parent = document.querySelector('.parent');               // we selected the class of 'parent' for the querySelector

output = parent.childNodes;                                     // set output = to the parent element to the childNodes

console.log(output);                        // Results in 'NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]'



// Cont'd
output1 = parent.childNodes[0];

console.log(output1);

// Contd
output2 = parent.childNodes[0].textContent;

console.log(output2);                       // Gives us nothing for the text content since the childnode[0] is blank

// Cont'd
output3 = parent.childNodes[0].nodeName;

console.log(output3);                       // Results in '#text' property


// cont'd
output4 = parent.childNodes[3].nodeName;

console.log(output4);                       // Results in 'DIV' since it is the first element

// Cont'd
output4 = parent.childNodes[3].textContent;

console.log(output4);                       // Results in 'Child 1'


// Cont'd
output4 = parent.childNodes[3].innerHTML;   

console.log(output4);                       // Results in 'Child 1'


// Cont'd - Finding the HTML that surrounds it
output4 = parent.childNodes[3].outerHTML;   

console.log(output4);                       // Results in '<div class="child">Child 1</div>' > Gives us the div with the classname of child one



// Change
output4 = parent.childNodes[3].innerText = 'Child 10';   

console.log(output4);                       // Results in changing the firt item to 'Child 10'


// Change color
output4 = parent.childNodes[5].style.color = 'purple';   

console.log(output4);                       // Changed the 2nd child item to purple


// First Child and Last Child
output = parent.firstChild;

console.log(output);                        // Results in '#text'


output = parent.lastChild;

console.log(output);                        // Results in '#text'



// Adding a textnode
parent.lastChild.textContent = 'Hola';      // Added 'Hola' in the list





// Parent nodes from the child
const child = document.querySelector('.child');

output = child.parentNode;              // results in 'div.child'
output = child.parentElement;           // Same result

child.parentNode.style.backgroundColor = 'yellow';
child.parentNode.style.padding = '40px';



// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');           // Get the class child > ge the 'nth' > child 2 to get the 2ns one

output = secondItem;

// Next sibling
output = secondItem.nextSibling;

// Prev Sibling
output = secondItem.previousSibling;

console.log(output);