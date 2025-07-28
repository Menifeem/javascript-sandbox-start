// 1. Arithmetic Operators
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 / 5;
x = 5 * 5;
x = 5 % 5;                      // Modulus operator


// Concatenation
x = 'Hello' +  'Everyone';
x = 'Hello' +  ' Everyone';         // Adding a space in between both
x = 'Hello' + ' ' +  'Everyone';    // Another method of adding a space


// Exponent Operator (get the result of the 1st operand to the power of the 2nd)
x = 2 ** 3;


// Increment
x = 3;
x++;                                // adding 1 "++"


// Decrement
x = 5;
x--;                                // subtracting 1 "--"


console.log(x);



// 2. Assignment Operators
b = 10;

b += 5;                             // b(10) and we add 5 and equals 15
b -= 5;
b *= 5;
b /= 5;
b % 5;
b **= 5;

console.log(b);


// 3. Comparison Operators
u = 7 == 7;                         // '==' addresses a comparison between the 2 (ex: 7 compared to 7) > results in true
u = 7 === 7;                        // '===' evaluates the value and the type of value. It is more disciplined
u = 7 != 7;                         // '!=' addresses that it is NOT equal
u = 7 !== 7;                        

// Greater  / Less Than
u = 7 <= 7;                         // 7 is less than and/or equal to 7 results in true
u = 7 >= 7;



console.log(u);
