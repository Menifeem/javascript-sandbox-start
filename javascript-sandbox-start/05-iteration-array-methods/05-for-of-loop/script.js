// For...Of loop is a much more efficient way to iterate over iterables than using a for...in loop. The for...of loop iterates over the property value while the for...in loop is used to iterate through the keys (property name) of an object

// Example
const items = ['book', 'table', 'chair', 'desk'];

for (const v of items) {             // created variable within the loop and searching through the array
    console.log(v);                 // Results in items from the array
}


// Array with Objects
const items1 = ['book', 'table', 'chair', 'desk'];
const users = [
    { name: 'Mark'},
    { name: 'Nicole'},
    { name: 'Terry'},
]


for (const x of users) {
    console.log(x.name);            // Results in all the names (properties) are in the log
}



// Loop Over Strings
const str = 'Hello Everyone';

for (const b of str)
    console.log(b);                 // Results in displaying the letters from the 'Hello Everyone'




// Loop Over Maps
const map = new Map();
map.set('name', 'John');            // Lines 37/38 we added key value pairs
map.set('age', 30);

for (const[key, value] of map) {        // Here we grab the key and value by the use of '[]' brackets here
    console.log(key, value);
}