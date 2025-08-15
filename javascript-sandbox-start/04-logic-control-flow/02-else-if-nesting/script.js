// ELSE IF statement in JavaScript is used to specify a new condition to test if the first condition is false

// Ex: 
let time = 15;
let greeting;

if (time < 10) {                        // If time(15) is less than 10 > call console
greeting = "Good morning";
} else if (time < 20) {                 // else if time(15) less than 20 > call console
greeting = "Good day";
} else {                                // ELSE if neither is true then call console
greeting = "Good evening";
}

console.log(greeting);                  // Results in 'Good day'


// Ex:
const d = new Date(10, 30, 2022, 8, 0, 0);
const hour = d.getHours();

console.log(hour);                      // Results in '8'


// Cont'd 
const a = new Date(10, 30, 2022, 14, 0, 0);
const hour1 = a.getHours();

if (hour1 < 12) {
    console.log('Good Morning');
} else if (hour1 > 12) {
    console.log('Good Afternoon');              // Results in '14' & 'Good Afternoon'
} else {
    console.log('Good Evening');
}

console.log(hour1); 




// Nest IF statements (give us more options)
const q = new Date(10, 30, 2022, 21, 0, 0);
const hour2 = q.getHours();

if (hour2 < 12) {
    console.log('Good Morning');

    if (hour2 === 6) {                          // Results in 'Good Morning', 'Wake Up' if hour set to '6'
        console.log('Wake Up');
    }
} else if (hour2 <= 15) {
    console.log('Good Afternoon');              
} else {
    console.log('Good Evening');

    if (hour2 >= 20) {
        console.log('ZZZZ');                    // Results in 'Good Evening', 'ZZZZ' if hour set to '21'
    }
}


console.log(hour2);



// Multiple Conditions
const i = new Date(10, 30, 2022, 9, 0, 0);
const hour3 = i.getHours();

if (hour3 > 7 && hour3 < 15) {                  // If it is > than 7 but less than 15 we will display 'It is work time'
    console.log('It is work time');
}


// Cont'd with 'OR'
const w = new Date(10, 30, 2022, 6, 0, 0);
const hour4 = w.getHours();

if (hour4 === 6 || hour4 === 20) {              // If = to 6 OR = to 20
    console.log('Brush your Teeth');            // Results in 'Brush your Teeth'
}