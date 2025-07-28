// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

const myNewString = myString.toUpperCase().charAt(0) + myString.substring(1);

console.log(myNewString);
