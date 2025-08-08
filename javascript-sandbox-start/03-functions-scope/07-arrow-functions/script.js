// Arrow Functions, a compact alternative to traditional functions, with different syntax and semantics


// Basic function
function add(a, b) {
    return a + b;
}

console.log(add);

// Rewrite function into an arrow function with function expression 
const add1 = (a, b) => {
    return a + b;
}

console.log(add1(4, 4));                // Results into '8'


// Implicit Return - arrow Cont'd making it shorter
const subtract = (a, b) => a - b;       // '=>' used

console.log(subtract(5, 2));            // Results in '3'



// Shortening if the function has a singular parameter
const double = (a) => a * 4;            // take in 'a' variable and return with multiplying it by 4

console.log(double(13));                // Results in '52'



// Returning an Object
const createObj = () => ({ name: 'Brad',});             // Use '()' when returning an object via arrow function method


console.log(createObj());               // Results in '{name: 'Brad'}'



// High Order Array methods and callbacks
const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function (n) {          // take 'numbers' + forEach and pass in a function that takes in 'n' as a number
    console.log(n);                     // Results in 1-7 in console log
})

// Change into an arrow function in a callback
numbers.forEach((n) => console.log(n));         // take numbers.forEach > used '()' instead of 'function' and console log

