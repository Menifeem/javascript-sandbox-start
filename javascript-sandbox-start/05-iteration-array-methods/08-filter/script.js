// Filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = numbers.filter(function (x) {           // variable created > added array "numbers" > filter and created function for desired results
    return x % 2 === 0;                                 // Finding #'s divisible by 2 with the modulus operator "%"
})

console.log(evenNum);                                   // Results in '[2, 4, 6, 8, 10]'



// Shorter Version
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum1 = numbers1.filter((x) => x % 2 === 0);   // Variable > added array and filtered it > arrow function 'x is => x if divisible by 2'

console.log(evenNum1);                                  // [2, 4, 6, 8, 10]



// Same with ForEach
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNum2 = []; 

numbers2.forEach((x) => {
    if (x % 2 === 0) {
        evenNum2.push(x);
    }
});

console.log(evenNum2);



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

// Get Only Retail Company
const retail = companies.filter((x) => x.category === 'Food');          // variable created > take array & filter it > for each company'x' > we want to access the category 'x.category' > is = to 'Food' 

console.log(retail);                                                    // Results in an array of all listings with Food




// Get Companies that started in or after 1980 and ended in or before 2005
const time = companies.filter((x) => x.start > 1980 && x.end < 2005);

console.log(time);



// Get companies that lasted 10 years or more
const duration = companies.filter((x) => x.end - x.start >= 10);

console.log(duration);