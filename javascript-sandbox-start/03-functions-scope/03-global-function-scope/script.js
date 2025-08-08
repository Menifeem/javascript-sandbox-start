// Global function is a function that is accessible from anywhere in your code

// Accessing Window objects
alert('Hello');                     // Results in a pop up window with the Alert window displaying
console.log(innerHeight);           // Results in '912' displaying the inner height of the page

// Accessing Window objects Pt.2
function run() {
    console.log(window.innerHeight);            // Results in '912' displaying the inner height of the page
}

run();



// Creating our own variables in a Global Scope
const x = 100;

console.log(x, 'In Global Scope');              // Results into '100 'In Global Scope''


// Creatting own variable in a Global Scope Cont'd (Since line 17 is global, I can access it within functions)
function run1() {
    console.log(window.innerHeight);
    console.log(x, 'Inside the function');            
}

run1();                                         // Results in '100 'Inside the function''



// Creating our own variables in a Global Scope (If Statement)
function run2() {
    console.log(window.innerHeight);
    console.log(x, 'Inside the function');            
}

run2();

if (true) {
    console.log(x, 'Inside Block');
}




// Creating Variable in a function (Functions have their own scopes)
function add() {
    const c = 50;                               // Created the variable 'c' within the function & since it is defined within the function we cannot use it globally
    console.log(c);
}

add();                                          // Results in '50'


// Using a global variable into a function (Line 17 'const x = 100')
function add1() {
    const c = 50;                               
    console.log(c * x);                         // adding the global variable 'x' and multiplying it to the variable within the function
}

add1();                                         // Results in '5000'



// Variable Shadowing: Overriding the line 17 global variable with the variable within the function 
function add2() {
    const c = 50;
    const x = 1;                                // variable being used to override the initial 'x'                            
    console.log(c * x);                         
}

add2();