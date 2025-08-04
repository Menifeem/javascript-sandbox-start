// Arrays are a special type of object and a date structure in Javascript that stores multiple values
let x; 


// Array Literal
const numbers = [12, 54, 76, 34, 23];
const mixed = [12, 'Hello', true, null];

console.log(numbers);                               // Displays the array


// Array COnstructor
const fruit = new Array('apple', 'oranges', 'mangos', 'bananas', 'grapes');

console.log(fruit);                                 // Array with fruits listed




// Access a specific item
x = numbers[0];                                     // Results in '12' the 0 index within the array

console.log(x);


// Access and add numbers from array
z = numbers[0] + numbers[4];

console.log(z);                                     // Results in adding '12' & '23' = '35'


// Another format into template literals
c = `My favorite fruits are ${fruit[1]}, ${fruit[3]} and my favorite number is ${numbers[1]}`;  

console.log(c);                                     // Results in 'My favorite fruits are oranges, bananas and my favorite number is 54'



// Identify how many items are within the array (Length)
v = numbers.length;

console.log(v);                                     // Results in displaying '5' > counting the items within the numbers array


// Change a value within an array (We exchange 'mangos' for 'pear')
fruit[2] = 'pear';

b = fruit                                           // here we log fruits just so we can see

console.log(b);


// Add to the end of the Array
fruit[fruit.length] = 'blueberry'

n = fruit

console.log(n);                                     // Results into adding 'blueberry' at the end of the array



