// Map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map



// Ex
const numbers = [1, 2, 3, 4, 5];

const doubNumbers = numbers.map(x => x * 2)      // Variable created > grab the array and map it > each item, i want it to multiplied by 2
// const doubNumbers = numbers.map(x => 'Number ' + x * 2)          // Adding an example with a string
console.log(doubNumbers);                       // Results in '[2, 4, 6, 8, 10]'



// Same with For Each
const doubNumbers1 = [];

numbers.forEach(x => doubNumbers1.push(x * 2));         // using the numbers array > loop through(For Each) > For Each # we take the empty array variable 'doubNumbers1' and push the number 8 2  

console.log(doubNumbers1);



// Array
const companies = [
    { name: 'Applebees', category: 'Food', start: 1981, end: 2004 },
    { name: 'Chillis', category: 'Food', start: 1992, end: 2008 },
    { name: 'Arbys', category: 'Food', start: 1999, end: 2007 },
    { name: 'Wells Fargo', category: 'Finances', start: 1989, end: 2010 },
    { name: 'Capital One', category: 'Finances', start: 2009, end: 2014 },
    { name: 'Mcdonalds', category: 'Food', start: 1987, end: 2010 },
    { name: 'Pollo Tropical', category: 'Food', start: 1986, end: 1996 },
    { name: 'Levis', category: 'Retail', start: 2011, end: 2016 },
    { name: 'Apple', category: 'Technology', start: 1981, end: 1989 },
];


// Create an array of company names
const compNames = companies.map(x => x.name);           // Map > for each company(x) we pull the company(x) name

console.log(compNames);



// Create an array of company and category
const compCat = companies.map(x => `Name: ${x.name} - Category: ${x.category}`)     // Map > for each company(x) we pull the company(x) name and category

console.log(compCat);



// Create array of each company in years
const time = companies.map(x => x.end - x.start)

console.log(time);


// Create array of objects with the name and the length of each company in years
const timeOf = companies.map(x => {                 // We take the array 
    return {                                        // Return items and title for the new object array
        Name: x.name,
        Years: x.end - x.start,
    }
})

console.log(timeOf);



// Chain Map Methods (this scenario we are getting the sqr rt and then doubling it)
const squareA = numbers.map(x => Math.sqrt(x)).map(sqrt => sqrt * 2)          // map the numbers array > for each # we square root it

console.log(squareA);                                   // Results in '[1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]'



// Chain with other Methods (Scenario: filter out even #s & double them)
const evenDouble = numbers.filter(x => x % 2 === 0).map(x => x * 2);

console.log(evenDouble);                                // Results in '[4, 8]'