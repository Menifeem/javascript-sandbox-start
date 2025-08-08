// Function Expressions & Declaration

// Declare a Funtion
function addDollar(value) {                     // addDollar function and taking in a value
    return '$' + value;                         // Returns '$' plus the value
}

console.log(addDollar(100));                    // Results in '$100' since '100' is the value while calling the function


// Function Expression > a function assigned to a variable (ex: 'addPlus')
const addPlus = function(value) {
    return "+" + value;
}

console.log(addPlus(200));                      // Results in '+200'




// Hoisting is a behavior where variable and function declarations are moved to the top of their scope during the compilation phase, before the code is executed. This means you can use variables and functions before they are declared in the code  > Only function declarations are available when hoisting
console.log(addDollar1(500));                    // Callback moved at the beginning before the code is performed/executed

function addDollar1(value) {                     // addDollar function and taking in a value
    return '$' + value;                         // Returns '$' plus the value
}

// Hoisting does not work with Function Expressions


