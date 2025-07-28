// Ways to declare a variable
// var, let, const

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

let age = 30;

console.log(age);


// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

let name1 = 'Brad';

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase


// Reassigning Variables
age = 31;

console.log(age);

let score; // here we just declare a variable but not assign it
score = 1; // here we assigned the variable to '1'

console.log(score);


if (true) {                 // if "true"
    score = score + 1;      // score = score + 1 > line 32 we declared a variable
}

console.log(score);


// Practice the same with 'const'
const x = 100;

// x = 200;                    // will receve an error here because we cannot reassing a const error

// const score1;               // Error because we cannot just declare and not initialize




// Testing while using arrays
const arr = [1, 2, 3, 4];

//arr = [1, 2, 3, 4, 5];      // cannot just reassign the array this way

arr.push(5);                // Use push method to add to the array and console log if after
console.log(arr);


// Testing with objects
const person = {
    name: 'Joey',
    age: 31,
    email: 'joey.lively@email.com',
};

// change the name
person.name = 'Kevin';

console.log(person);




// Declare multiple values at once
let a, b, c;

const d = 10, 
    e= 20, 
    f = 55;

console.log(d);

