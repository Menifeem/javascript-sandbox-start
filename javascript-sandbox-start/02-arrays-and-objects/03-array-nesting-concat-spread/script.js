let x;

// Nesting - sitting an array as an index inside of another array
const fruits = ['apple', 'grapes', 'oranges', 'pears'];
const fruits1 = ['kiwi', 'jello', 'strawberry', 'watermelon', 'mango'];

fruits.push(fruits1);                                         // Results in adding 'fruits1' array

// Accessing something within a Nested Array
x = fruits[4][2];                                                  // Results in pulling up 'strawberry' within the nested array > we pull the '4' index to go to the next array and then we select the index for that array


// Nesting both arrays in a new array
const all = [fruits, fruits1];                                  // Results in nesting all arrays

c = all;


// Access 'Jello' In the 2nd array prev nested
v = all[1][1];


// Concat Arrays
b = fruits.concat(fruits1);                                     // Combined both arrays


// Spread Operator (...)
n = [...fruits, ...fruits1];                                    // Here we grab the items from the array


// Flatten Array (Make it all into one array)
const arr = [1, 2, [3, 4], 5, [6, 7], 8];

m = arr.flat();                                                 // Results into making into one array '[1, 2, 3, 4, 5, 6, 7, 8]'



// Static Methods on Array Objects
l = Array.isArray(fruits);                                                // Checks to see if something is an array > Results in 'true' bcuz fruits is an array


// From Method _ Creates an array from a 'from' like value
k = Array.from('12345');                                        // Results in creating an array '['1', '2', '3', '4', '5']'


// Of Method - creates an array from set of values

j = Array.of(v, c, x);                                          // Results in creating an array of the listed prev items '['jello', Array(2), 'strawberry']'



console.log(fruits);
console.log(x);
console.log(c);
console.log(v);
console.log(b);
console.log(n);
console.log(arr);
console.log(m);
console.log(l);
console.log(k);
console.log(j);