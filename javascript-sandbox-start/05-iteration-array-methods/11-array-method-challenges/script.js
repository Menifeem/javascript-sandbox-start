// Challenge 1
// Take the `people` array and create an array called `youngPeople` that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under. The `name` property should have their first and last name.
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];


// My Answer
const youngPeople = people.filter(x => x.age <= 25)           // First I filtered out the ages
.map(x => {                                                   // I mapped out the name and emails
  return {
    name: x.firstName + ' ' + x.lastName,
    email: x.email,
  }
})


console.log(youngPeople);



// Challenge 2
// Add all of the positive numbers in the array.
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter(x => x > 0)                // First I filtered out for only #'s greater than 0
.reduce((x, y) => x + y, 0)                                   // reduce the array to 1 number > set with the accumulator and curr value > then we loop through adding one to the other

console.log(positiveSum);





// Challege 3
// Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.
const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(x => x.charAt(0).toUpperCase(0) + x.slice(1, x.length))      // First we separate the first letter with 'charAt' & Uppercase > then we slice the remaining letters

console.log(capitalizedWords);
