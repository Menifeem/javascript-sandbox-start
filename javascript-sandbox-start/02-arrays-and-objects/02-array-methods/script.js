// Arrays Methods 
let x;

const arr = [12, 21, 35, 65, 76];
const arr1 = [12, 21, 35, 65, 76];
const arr2 = [12, 21, 35, 65, 76];
const arr3 = [12, 21, 35, 65, 76];
const arr4 = [12, 21, 35, 65, 76];
const arr5 = [12, 21, 35, 65, 76];


// Push Method - Puts a value at the end of an array
arr.push(121);                              // Results in '[12, 21, 35, 65, 76, 121]'


// Pop Method - Remove a Value from the end
arr.pop();                                  // Results in '[12, 21, 35, 65, 76]'


// Unshift Method - Adds to the beginning
arr.unshift(5);                             // Results in '[5, 12, 21, 35, 65, 76]'


// Shift Method - Remove from the beginning
arr.shift();                                // Results in '[12, 21, 35, 65, 76]'


// Reverse Method - Reverses the array
arr.reverse();                              // Results in '[76, 65, 35, 21, 12]'


// Includes Method - Checks if a value is in the array
x = arr1.includes(21);                       // Results in 'true' since '21' is in the array


// Index of Method - Provides the index of a specific value
x = arr1.indexOf(65);                        // Results in '1' since '65' is in the 1 index location


// Slice Method - returns selected elements in a new array
x = arr2.slice(1);                           // Results in '[65, 35, 21, 12]' > cutting out anything before 1 index location
x = arr2.slice(1, 4);                        // Results in '[65, 35, 21]' > cutting out anything before 1 and removing the 4


// Splice Method - method in JavaScript is a powerful tool for adding, removing, or replacing elements in an array
x = arr3.splice(0, 3);                       // Results in '[76, 65, 35]' > the final # is the placement of the end of the last index you would like to add



// Delete Method - Delete an item
c = arr4.splice(3, 1);                       // Starts with the index we are targeting and '1' meaning we are stopping and that 1 index indentify and remove


// Chain Methods
v = arr4.splice(1, 4);                         // starting at 1 index and going 4 over from that > resulting in '[65, 35, 21, 12]' 

// Chain Method contd with REVERSE
b = arr4.splice(1, 4).reverse();                 // Takes our array from the splice and reverses it

// Chain Method Cont'd with TO STRING
n = arr5.splice(1, 4).reverse().toString();

// Chain Method Cont'd with TO STRING WITH CharAT on string
m = arr5.splice(1, 4).reverse().toString().charAt(0);               // Results in '7' to display the 1st character in the string









console.log(arr);
console.log(x);
console.log(x, arr1);                        // Resulted in '[76, 65, 35]' & the #'s that were removed '[21, 12]' and it is now the new array
console.log(c, arr2);
console.log(v);
console.log(b);
console.log(n);
console.log(m);