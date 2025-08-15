// Switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered

// Ex
const d = new Date(2022, 1, 14, 8, 0, 0);
const month = d.getMonth();

console.log(month);                         // Results in '1'


// Switch (taking in different cases for the value)
const a = new Date(2022, 3, 14, 8, 0, 0);
const month1 = a.getMonth();


switch (month1) {
    case 1:
        console.log('It is Jan');
        break;                                          // Include a 'break' after each case
    case 2:
        console.log('It is Feb');
        break;
    case 3:
        console.log('It is Mar');                       // 'It is Mar' displays since 'const a' is '3'
        break;
    default:                                            // 'Default' is needed if the cases are reflecting 
        console.log('Nothing matches the months listed');
}



// Switches cont'd (with ranges but it is usually used with immediate values ex: 'month1')
const s = new Date(2022, 3, 14, 20, 0, 0);
const month2 = s.getMonth();
const hour = s.getHours();


switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('GoodNight');           // Results in 'GoodNight' due to the hour listed
}