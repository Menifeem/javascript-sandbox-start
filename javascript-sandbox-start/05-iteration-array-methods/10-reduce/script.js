// Array.prototype.reduce method in JavaScript is used to execute a reducer function on each element of an array, resulting in a single output value.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// Ex Long Version (Getting the sum of all the numbers)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {           // take in prev and current value
    return accumulator + currentValue;                                      // Return the prev value and add to the current value
}, 0);                                                                      // Here we set the initial value '0'

console.log(sum);                                                           // Resulted in '55'                                                                                                    



// Shorter Version
const sum1 = numbers.reduce((ini, curr) => ini + curr, 0);                  // take in the initial & current values > For each of them we will add the initial to the current > starting with '0'

console.log(sum1);                                                          // Resulted in '55'    



// Using a For Loop (using a function expression)
const sum2 = () => {
    let ini = 0;                                                            // Initialize the accumulator
    for (const x of numbers) {                                              // For each within the array(numbers)
        ini += x;                                                           // Take the initial and add the current
    }
    return ini;                                                             // We return whatever the accumlator is  
};

console.log(sum2());                                                        // Resulted in '55' 



// Another Example with Cart array
const cart = [
    { id: 1, name: 'Pineapple', price: 2.00 },
    { id: 2, name: 'Banana', price: 4.00 },
    { id: 3, name: 'Coffee', price: 12.00 },
]


const overall = cart.reduce((x, y) => x + y.price, 0);                      // accumulator and current value in parameters > Reduce cart called > take the initial 'x' and loop while adding the prices 'x.price'

console.log(overall);