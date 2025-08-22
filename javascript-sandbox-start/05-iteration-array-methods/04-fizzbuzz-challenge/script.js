// # FizzBuzz Challenge 1

for (i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("FIZZ");
        continue;
    } if (i % 5 == 0) {
        console.log("BUZZ");
        continue;
    } if (i % 15 == 0) {
        console.log("FizzBuzz");
        continue;
    }
    console.log(i);
}


// Correct Code
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 == 0) {
//     	console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//     	console.log("Fizz");
//     } else if (i % 5 == 0) {
//     	console.log("Buzz");
//     } else {
//     	console.log(i);
//     }
// }



// # FizzBuzz Challenge 2
