// IF statements are used to execute a block of code based on a specified condition
// Code will not run if it isn't related 

// Format
if (true) {
    console.log('This is true');
}


if (false) {
    console.log('This is not true');
}



// Expressions with Operators > https://www.w3schools.com/js/js_operators.asp
const x = 10;
const y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`);           // Results in '10 is greater than 5'
}


// Cont'd Expessions with Operators
const c = 1;
const v = 5;

if (c < v) {
    console.log(`${c} is less than ${v}`);           // Results in '1 is less than 5'
}


// IF / ELSE
const a = 1;
const s = 5;

if (a === s) {
    console.log(`${a} is less than ${s}`);           
} else {
    console.log('Please disregard');                // Results in 'Please disregard'
}



// Block IF statements / Scope
if (x !== y) {                                      // If 'x' does not = 'y'
    const z = 20;                           
    console.log(`${z} is 20`);                      // Resulted in '20 is 20'
}



// Shorthand IF Statements (Removed '{}')
if (x >= y) console.log(`Checking again`);          // Results in 'Checking again'


// Cont'd with ELSE & added console calls(include a ',')
const e = 1;
const r = 5;

if (e < r) console.log(`${e} is less than ${r}`), console.log('Added comma'); else console.log('Try Again');                // Results in '1 is less than 5' & 'Added comma'


