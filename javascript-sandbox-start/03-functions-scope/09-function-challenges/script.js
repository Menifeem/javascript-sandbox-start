// #1 Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
const getCelsius = (Fahrenheit) => { return ((Fahrenheit - 32) * 5) / 9};
console.log(getCelsius(45));            // Resulted in '7.222222222222222'



// #2 Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array.
// function minMax(x) {
//     return `{min: ${min}, max: ${max}}`
// }

// const x = {
//     min: Math.min(...),
//     max: Math.max(...);

//     }


// console.log(minMax[1, 2, 3, 4, 56, -32]);

function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    console.log(`{min: ${min}, max: ${max}}`)
    // return `{min: ${min}, max: ${max}}`
}

minMax([1, 2, 3, 4, 56, -32]);              // Resulted in '{min: -32, max: 56}'




// #3 Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.
(function(x, y) {
    console.log(`The area of the rectangle with a lenth of ${x} and a width of ${y} is ${x * y}`);
})(10, 5);

// Search for examples of when & where to use IIFE









