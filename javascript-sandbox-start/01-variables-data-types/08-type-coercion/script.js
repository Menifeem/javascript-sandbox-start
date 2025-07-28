// Coercion - automatic or implicit conversion of values from one data type to another (such as strings to numbers)

let x;

x = 5 + '5';                    // conversion changes 5 to string '5' (it concatenated with the '+')> console '55 string'
x = 5 + Number('5');            // We convert the string here by stating the type "Number" to be called and in parameters, the item we are converting
x = 5 * '5';                    // In this case the rules were different with multiplcation involved and it multiplied 
x = 5 + null;                   // Resuls in 0, as null is treated like a 0
x = Number(null)        
x = Number(true);               // Results in '1' as a true number
x = Number(false);              // Results in '0' as a false number
x = 5 + true;                   // Results in '6' as true = 1
x = 5 + false;                  // Results in '5' as false = 0
x = 5 + undefined;              // Resules in 'NaN' since it is undefined




console.log(x, typeof x);