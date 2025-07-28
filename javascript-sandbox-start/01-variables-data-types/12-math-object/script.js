console.log(Math);                              // Displays properties and methods elated to Math



let x;

// Square Root of a #
x = Math.sqrt(20);                              // results in '4.4721....'


// Absolute #
q = Math.abs(-20);                              // Results in '20'


// Rounding #
w = Math.round(20.5749);                        // Results in '21'


// Round up/Down
e = Math.ceil(20.3);                            // Results in '21'
r = Math.floor(20.8);                           // Results in '20'


// Pow - Returns the value of a number raised to a specific power
t = Math.pow(20, 4);                            // Results in '160000'


// Min/Mx
y = Math.min(20, 45);                           // Results in the lowest # '20'
u = Math.max(20, 45);                           // Results in the highest # '45'


// Random Method
i = Math.random();                              // Nothing in parameters so random # resulting from 0-1
o = Math.random() * 20;                         // Resulting in # from 0-19 > () = 0 and going to 19
p = Math.random() * 20 + 1;                     // Resulting in # from 1-20 > we add '+' and the starting # after '1'

// Random Method + Rounding 
a = Math.floor(Math.random() * 20 + 1);         // Take what we have oringinally, set in '()' and place the desired method at the begining



console.log(x);
console.log(q);
console.log(w);
console.log(e);
console.log(r);
console.log(t);
console.log(y);
console.log(u);
console.log(i);
console.log(o);
console.log(p);
console.log(a);