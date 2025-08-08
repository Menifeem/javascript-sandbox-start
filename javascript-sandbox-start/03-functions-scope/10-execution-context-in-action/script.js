// Execution Context is an abstract concept that defines the environment in which code is evaluated and executed. It determines what variables, functions, and objects are accessible at any given point in the code
// Usually ran behind the scenes

// https://medium.com/@aansh0611/mastering-execution-context-in-javascript-the-ultimate-q-a-guide-9f07d6abeecf

// 2 Phases when the Execution Context is created: 1) Memory Creation 2) Execution 



// Ex
let x = 100;                                    // Creating variables
let y = 50;

function getSum(n1, n2) {                        // Function used to ge thte sum of 2 #s
    let sum = n1 + n2;
    return sum
};

let sum1 = getSum(x, y)                         // Variables created that will pertain the return value of the 'getSum' function
let sum2 = getSum(10, 5)



// Details (Creation / Execution Phase)
let x = 100;                                  // x is allocated memory & stores 'undefined  
let y = 50;                                   // y is allocated memory & stores 'undefined  

function getSum(n1, n2) {                        // 'getSum' function is allocated memory and stores all code                
    let sum = n1 + n2;
    return sum
};

let sum1 = getSum(x, y)                         // 'sum1' is allocated memory and stored 'undefined'       
let sum2 = getSum(10, 5)                        // 'sum2' is allocated memory and stored 'undefined' 


// Cont'd Execution Phase
let x = 100;                                    // Places the value of 100 into x variable             
let y = 50;                                     // Places the value of 50 into y variable       

function getSum(n1, n2) {                        // Skips the funtion because there is nothing to execute          
    let sum = n1 + n2;
    return sum
};

let sum1 = getSum(x, y)                         // Invokes the 'getSum()' function and creates a new function execution context     
let sum2 = getSum(10, 5)