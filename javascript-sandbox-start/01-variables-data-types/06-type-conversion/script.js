// Type Conversion - The process to explicitly converting a value from one type to another


// Converting a string to a number
let amount = '100';

console.log(amount, typeof amount);                     // Result = '100 string'


//When someone's submitting a from and a number comes in as a string but you want to run some operations on it > you can't do that with a string, you want to change it to a number
//let amount = '100';

amount = parseInt(amount);          // parseInt used to convert a string to a number

console.log(amount, typeof amount);


// Unary aka '+' > Another way to convert a string to a number
//let amount = '100';

amount = +amount;          // '+' used to convert a string to a number

console.log(amount, typeof amount);



// Converting a decimal string to a number (ParseFloat)
amount = '99.7';

amount = parseFloat(amount);     // parseFloat used to convert a string to a number

console.log(amount, typeof amount);



// 3rd way is with the number constructor
amount = '100';

amount = Number(amount);          // 'Number used to convert a string to a number

console.log(amount, typeof amount);



// Change Number to a String
// amount = 100;

amount = amount.toString();     // here we take the amount and change to a string

console.log(amount, typeof amount);


// Converting number to strng pt 2 with String Constructor
// let amount = 100;

amount = String(amount);     // 'String COnstructor' here we take the amount and change to a string

console.log(amount, typeof amount);





// Boolean Constructor > Turning a number into a boolean
amount = 1;

amount = Boolean(amount);     // 'Boolean Constructor' here we take the number and convert to boolean

console.log(amount, typeof amount);




// Taking a string that isn't a number and attempt to parse it into a number
amount = 'hello';

amount = parseInt(amount);     // 'parse constructor' here we take the string into a number

console.log(amount, typeof amount);     // Results in 'NaN number' > "not a number"



