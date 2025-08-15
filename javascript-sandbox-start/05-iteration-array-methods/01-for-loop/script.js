// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax


// For Loop is a control flow statement that allows code to be executed repeatedly based on a condition. It consists of three parts: initialization, condition, and increment/decrement


// For Loop
for (let i = 0; i <= 10; i++) {
    console.log('Number ' + i);         // Results in 'Number...' until it lands to 10
}


// For Loop cont'd > checking if 'i' is =,<,> than something
for (let i = 0; i <= 10; i++) {
    if (i === 7) {                              // If '7' is met
        console.log('7 is my lucky number');    // We log the statement
    } else {
        console.log('Number ' + i);             // Or else we continue with the traditional 'Number 7'
    }
}                                               // allows us to only see one '7' relative within the loop



// Nest Loops
for (let i = 1; i <=10; i++) {
    console.log('Num ' + i);

    for (let j = 1; j <= 10; j++) {             // Opened a new for loop but this time using 'j' variable > each number under 'i', we present the logged expression
        console.log(`${i} * ${j} = ${i * j}`);  // For each loop from the initial one 'i', we will loop for 'j'
    }
}



// For Loop to Loop through an array
const names = ['Joe', 'Tim', 'Erin', 'Frankie'];

for (let i = 0; i < names.length; i++) {        // as long as 'i' is less than length of the array > we cont 'i++' > note: 'i' represents as an index here
    console.log(names[i]);
}


// Small Challenge
const names1 = ['Joe', 'Tim', 'Erin', 'Frankie'];

for (let i = 0; i < names1.length; i++) {        
    if(i === 2) {
        console.log(`${names1[i]} is the best!`);
    } else {
        console.log(names1[i]);
    }
}


// Cont'd but checking with value
const names2 = ['Joe', 'Tim', 'Erin', 'Frankie'];

for (let i = 0; i < names2.length; i++) {        
    if(names2[i] === 'Tim') {                        // If we loop and find Frankie
        console.log(`${names2[i]} is the best!`);       // Results in 'Frankie is the best!'
    } else {
        console.log(names2[i]);
    }
}