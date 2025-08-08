// Block scope refers to the scope of variables declared within a block of code, such as inside curly braces { }. Variables declared with let and const are block-scoped, meaning they are only accessible within the block in which they are defined

// Var is not block level scoped


// Examples
const x = 100;
const foo = 1;
var bar = 2;                                    // Var global variable can be visible in the window object from console (let and const does not)

if (true) {
    const y = 200;
    console.log(x + y);                         // Results in '300'
}

// console.log(x + y);                             // Results in 'ReferenceError: y is not defined...' due to 'y' is only allowed to be used within the function block and not from a global scope like 'x'



// Loop Example
for (let i = 0; i <= 10; i++) {                 // First 'i' is 0 > as long as 'i' <=10 then we will cont to add until we equal 10
    console.log(i);                             // Results in 1-10 listed in console
}

// console.log(i);                                 // Results in 'ReferenceError: i is not defined' since it is not within the block



// Difference between Var, Let, Const
if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log(a);                                 // Results in 'ReferenceError: a is not defined'
// console.log(b);                                 // Results in 'ReferenceError: a is not defined'
console.log(c);                                    // Results in '700' due to 'Var' not being block scoped



// Var is function scoped
function run() {
    var d = 100;
    console.log(d);                                 // Results in '100'
}

run();
console.log(d);                                     // Results in 'ReferenceError: d is not defined' due to var being function scoped and cannot access outside of a function