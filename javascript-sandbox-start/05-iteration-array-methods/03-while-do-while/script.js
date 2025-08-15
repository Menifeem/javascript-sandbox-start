// While — loops through a block of code as long as the condition specified evaluates to true
// Do…while — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true

// https://www.tutorialrepublic.com/javascript-tutorial/javascript-loops.php

let i = 0;                          // Initialize prior to the while loop
// While Loop
while (i <= 20) {                   // in While loops we only use the condition within the '()' parameters
    console.log('Number ' + i);
    i++;                            // We continue to progress through the loop until 20
}



// While loop to loop over arrays
let k = 0;

const arr = [10, 20, 60, 70, 80];

while (k < arr.length) {            // Our condition here is if 'k' ia < arr length
    console.log(arr[k]);            // we will log the arr to 'k' variable and here as the index
    k++;                            // Add by increments  

}



// Nest While Loops
let j = 0

while (j <= 5) {
    console.log('Number ' + j);

    let h = 1;                                  // creating another variable since we are nesting another while loop
    while (h <= 5) {
        console.log(`${j} * ${h} = ${j * h}`);
        h++;
    }

    j++
}



// Do While Loop - used when always want the block of code to run once even if the condition is never met
let g = 0;
// Note: the Do code will always run even if the while is never met
do {                                // no '()' for DO in do-while loops
    console.log('Number ' + g);     // Do here we calling it to do - log the statment in increments
    g++;
} while (g <= 4);                   // Here we add the condition where if it is ;ess than or equal to 4


