// JavaScript Array forEach () method is a built-in function that executes a provided function once for each array element. It does not return a new array and does not modify the original array. It's commonly used for iteration and performing actions on each array element.

// https://www.geeksforgeeks.org/javascript/javascript-array-foreach-method/



// Ex
const socials = ['Twitter', 'Linkedin', 'Facebook', 'Instagram']

console.log(socials.__proto__);     // '__proto__' produces methods that can be used

socials.forEach(function (item) {           // 'socials' array, for each item we created a function with item and logged it
    console.log(item);
});



// Alternate Way
socials.forEach((item) => console.log(item));


// Cont'd
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));       // parameters included the item, index of the items and the full array



// Passing in a named function
function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);            // Allows line 27 - 29 function to run for every item in the array



// With Objects
const sc = [
    { name: 'Twitter', url: 'https://twitter.com'},
    { name: 'Facebook', url: 'https://Facebook.com'},
    { name: 'LinkedIn', url: 'https://LinkedIn.com'},
    { name: 'Instagram', url: 'https://Intsagram.com'},
];

sc.forEach((item) => console.log(item.url));        // Log each item here & '.url' or '.name' to pull the properties 