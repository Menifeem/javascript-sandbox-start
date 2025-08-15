// Logical operators in JavaScript are used to perform logical operations on values and return either true or false. These operators are commonly used in decision-making statements like if or while loops to control the flow of execution based on conditions
// Resource: https://www.geeksforgeeks.org/javascript/javascript-logical-operators/
// '&&' = AND > '||' = OR


// && 'AND Operator'
console.log(10 > 20 && 30 > 15);        // Results in 'false'. If everything isn't true then false will be the result
console.log(10 < 20 && 30 > 15);        // Results in 'true'


// || 'OR Operator'
console.log(10 > 20 || 30 > 15);        // Results in 'true'. One or the other are true 
console.log(10 > 20 && 30 < 15);        // Results in 'false'. Both are false



// Example '&&' will return first falsy value or last value
let a;

a = 10 && 20;

console.log(a);                         // Returns '20' since non are falsy, it gives us the last


// Ex Cont'd
let s;

s = 10 && 0 && 20;

console.log(s);                         // Returns '0' since it is a falsy value 


// Ex Cont'd with an empty string(falsy value)
let d;

d = 10 && '' && 0 && 20;

console.log(d);                         // Results in an '' empty string since it is the first falsy value



// When this will be used example(If empty, then what do we show)
const posts = [];

posts.length > 0 && console.log(posts[0]);      // Condition if post > 0 we will display that but if not then we display nothing



// || - will return the first truthy value or last value
let r;

r = 10 || 20;                            // Results in '10' since that is the first truthy value
// r = 0 || 20;                             // Results in '20' since that is the first truthy value
// r = 0 || null || '' || undefined;       // Results in 'undefined' since it is the last value and no truthy values


console.log(r); 


// ?? - Returns the right side operand when the left is null or undefined
let e;

e = 10 ?? 20;                           // Results in '10' since the left is not null or undefined
e = null ?? 20;                         // Results in '20' since left is null
e = undefined ?? 45;                    // Results in '45' since left side is 45
e = 0 ?? 180;                           // Results in '0' since the left side is not null or undefined


console.log(e);