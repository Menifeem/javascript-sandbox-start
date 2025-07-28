let x;


const num = 5;

console.log(typeof num);                                    // results in 'number'



// Number Objects using Number Constructor
const num1 = new Number(5);

console.log(typeof num1);                                   // Results in 'object'


// To String (Gives us the number as a string)
let v;

const num2 = new Number(612);

v = num2.toString();
// v = num2.length;                                            // Results in 'undefined' bcuz there isnt a lenth in numbers
q = num2.toString().length;                                    // Acquire about the length of a # or determine hoe many digits there are then we turn it into a string and add length(Ex: if variable is 300 the string will return '3')                                                    

// To fix - allow you to specify the # of decimal points
w = num2.toFixed(2);                                       // Results in '612.00'


// To Precision (we count the entire number > if variable a decimal in it then we respond with the placement of the desired decimal)
e = num2.toPrecision(2);


// To Exponential - method is used to convert a number into its exponential (scientific) notation. It returns a string representing the number in exponential form
r = num2.toExponential(3);


// To Local - method returns a Date object as a string, using locale settings.
t = num2.toLocaleString('en-US');


// Value of - method of Object instances converts the this value to an object. This method is meant to be overridden by derived objects for custom type conversion logic
y = num2.valueOf();


// Highest / Lowest Number(object) value
u = Number.MAX_VALUE;
i = Number.MIN_VALUE;


console.log(v);
console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log(t);
console.log(y);
console.log(u);
console.log(i);

console.log(typeof v);

