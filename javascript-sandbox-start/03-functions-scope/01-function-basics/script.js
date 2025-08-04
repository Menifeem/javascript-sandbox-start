// Creating a Function
function sayHello() {
    console.log('Hello World');
};

sayHello();


// Parameters - Passing Data Into a function
function add(num1, num2) {                          // When declaring a function '()' are considered parameters
    console.log(num1 + num2);
};

add(5, 25);                                         // When passing in a value '()' here, these are arguments



// Returning a Value
function subtract(num3, num4) {
    return num3 - num4;
};

const result = subtract(10, 4);

console.log(result);
console.log(result, subtract(84, 34));