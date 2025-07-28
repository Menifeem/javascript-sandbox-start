//

let x;
const name = 'John';
const age = 30;


x = 'Hello, My name is ' + name + ' and I am ' + age + ' years old';


// Template Literals  (AKA Template Strings)
x = `Hello, my name is ${name} and I am ${age} years old.'`;                // Easier concatenation



// String Properties & Methods
const s = 'Hello World';

x = s.length;                                       // We count the lenght of characters 'space is considered"

// Access Value by Key
x = s[0];                                           // Accessing individual characters (Results in H)


// Access Prototype
x = s.__proto__                                     // Displays many methods under console


// Change the case
x = s.toUpperCase();
x = s.toLowerCase();

//Return character at the specified index
x = s.charAt(0);                                    // Returns the 1st character "H"


// Index of a specific character
x = s.indexOf('e');                                 // Results in 1 since it is the 2nd available


// Substring > Search a string for a specififed value
x = s.substring(0, 6);                              // Results in only pulling in from 0 - 6 index/character count
x = s.substring(8);                                 // Starts at 8 and displays everything from there

// Slice
x = s.slice(0, 6);                              // Resuls in 'Hello" > start at 0 and slices 6 and anything after


// Trim                                         // trims the white space 
x = '        Hello World';
x = s.trim();


// Replace
x = s.replace('World', 'All');                  // First enter the desired workd and then enter replacement


// Includes                                     // Returns true or false if found in string
x = s.includes('Hello');                        // Returns true
x = s.includes('Jo');                           // Returns false



// Return primitive value
x = s.valueOf();



// Split
x = s.split();
x = s.split('');                                // '' splits every character



console.log(x);