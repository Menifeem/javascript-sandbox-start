// 2 types of Data types (Primitive & Reference/Objects)


// Primitive Types
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt



// Reference / Objects Types
// Object Literals
// Arrays
// Functions



// String
const first_name = 'Sara';

const output = first_name
console.log(output, typeof output);         // Acquiring the 'type' from the firstname variable with use of 'typeOf'

// Number
const age = 30

const output2 = age;
console.log(output2, typeof output2);       // Acquiring the type from the number variable. Resulting in "30 'number'"

// Boolean
const hasKids = true;

const output3 = hasKids
console.log(output3, typeof output3);       // Acquiring te type of boolean variable, resulting in "true 'boolean'"


// Null
const aptNumber = null;

const output4 = aptNumber;
console.log(output4, typeof output4);       // Setting an intentional empty value. Resulting in "null 'object'"


// Undefined
let score;

const output5 = score;
console.log(output5, typeof output5);       // Resulting in "undefined" since we did not define "score" variable


// Symbol
const id = Symbol('id');

const output6 = id;
console.log(output6, typeof output6);       // Resulting in "Symbol(id) 'symbol'"


//BigInt (too big for the # type)
const n = 9007199254740991n;

const output7 = n;
console.log(output7, typeof output7);       // Resulting in the type of BigInt


// Reference Types
const numbers = [1, 2, 3, 4, 5];

const output8 = numbers;
console.log(output8, typeof output8);       // Resulting in displaying the arrays


// Reference Types > Object Literals
const person = {
    name: 'Jane',
    age: 55,
    kids: false,
};

const output9 = person

console.log(output9.name, typeof output9);      // Resulting in displaying the imtes from the object



// Reference Types > Functions
function Hello() {
    console.log('Greeting to All');
}

const output10 = Hello;
console.log(output10, typeof output10);         // Resulting in displaying the function and type ('function')