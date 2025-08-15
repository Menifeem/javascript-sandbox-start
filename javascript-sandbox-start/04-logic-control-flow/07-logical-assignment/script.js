// Logical Assignment Operators combine logical operations (&&, ||, and ??) with assignment (=)
// '||=' Assigns the right side value only if the left side is a falsy value
// '&&=' Assigns the right side value only if the left is a truthy value
// '??=' assigns the right side value only if the left is null or undefined




// '||=' Assigns the right side value only if the left side is a falsy value
let a = false;

if (!a) {
    a = 10;
}                       
console.log(a);         // Here I am saying if 'a' is falsy then it is = to '10'

// Quicker example
let b = '';

b = b || 20;            // if 'b' is false then we display the right side
console.log(b);


// Shorter ex(USE THIS)
let c = false;

c ||= 30;               // If 'c' is false then we display the right side
console.log(c);




// '&&=' Assigns the right side value only if the left is a truthy value
let d = 20;

if(d) {
    d = 20;
}
console.log(d);         // Results in '20' because 'd' is true(20)

// Quicker Example
let e = 20;

e = e && 20;
console.log(e);         // Results in '20' because 'e' is true(20) 


// Shorter Example
let f = 45;

f &&= 45;               // Results in '45' because 'd' is true(45)
console.log(f);




// '??=' assigns the right side value only if the left is null or undefined
let g = null;

if (g === null || g === undefined) {    // If g is null or undefined
    g = 99;                             // We will display '99'
}
console.log(g);             // Results in '99' since left side 'h' is undefined


// Quicker Example
let h = undefined

h = h ?? 87;                // Results in '87' since left side 'h' is undefined
console.log(h);


// Shorter Example(Easiest)
let i = null;

i ??= 30;
console.log(i);             // Results in '30' since left side 'h' is undefined