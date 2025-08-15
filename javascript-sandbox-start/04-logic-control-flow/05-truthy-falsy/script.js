// Truthy and Falsy are terms used to describe how values are evaluated in a Boolean context (e.g., in if statements or logical operations)


const email = 'test@test.com';      // consider that a string is equivalent to a 'truthy' value

if (email) {                        // If pass something in an 'if' statement it will be coerced into a boolean
    console.log('This is an email');
}

console.log(Boolean(email));        // Resulted in 'true'



// Falsy values
// - False
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN


// Testing above 'Falsy' Values (If you change the variable into any of these it will result in false)
const x = '';

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is Falsy');           // Results in 'This is Falsy'
}

console.log(Boolean(x));



// Truthy Values
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)


// Testing above 'Truthy' values
const a = ' ';

if (a) {
    console.log('This is truthy');          // Results in 'This is Truthy'
} else {
    console.log('This is Falsy');           
}

console.log(Boolean(a));




// Truthy & Falsy caveats
const children = 0;                     // if set to '0' we see else being called and it shouldn't. We do not have children

if (children !== undefined) {                         // instead use 'not equal to' > resulted in 'You have 0 children'
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter the number of children');
}


// Cont'd 
const children1 = 0;                     
if (!isNaN(children1)) {                         // using is !NaN = is it Not Not a number
    console.log(`You have ${children1} children`);
} else {
    console.log('Please enter the number of children');
}



// Checking for empty arrays
const posts = [];         // if empty array '[](truthy)' it still says else statement > it is corrected if condition added in parameter with 'posts.length > 0' resulting in 'No Posts to List'

if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts to List');
}



// Checking for empty objects
// const user = {
//     name: 'Marquez'
// };

// if (user) {
//     console.log(`Hi ${user.name}`);
// } else {
//     console.log(`Re enter your password ${user.name}`);
// }


const user = {};

if (Object.keys(user).length > 0) {                // 'Object.keys' gives us the array of the keys
    console.log(`Hi ${user.name}`);
} else {
    console.log(`Re enter your password ${user.name}`); // Results in 'Re enter your password undefined' if no user is entered
}



// Loose Equality (==)
console.log(false == 0);                // Results in 'true'
console.log('' == 0);                   // Results in 'true'
console.log(null == undefined);         // Results in 'true'

// Strict Equality
console.log(false === 0);               // Results in 'false'
console.log('' === 0);                  // Results in 'false'
console.log(null === undefined);        // Results in 'false'