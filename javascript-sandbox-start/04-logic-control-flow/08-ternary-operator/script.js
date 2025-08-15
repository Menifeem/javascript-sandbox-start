//  Ternary Operator is a shorthand way to write an if-else statement in JavaScript. It takes the form of condition ? value1 : value2, where condition is a boolean expression, and value1 and value2 are expressions of any type. If condition is true, the ternary operator returns value1; if condition is false, it returns value2
// https://www.codewithharry.com/tutorial/ternary-operator

const age = 19;


// Using an IF statement
if (age >= 18) {
    console.log('You can vote');            // Results in 'You can vote' > since variabe age is set to 18
} else {
    console.log('You cannot vote!');
}


// Writing above as a 1 liner with Tenary Operator(3 parts: Condition / If True / If False)
// '?' used as 'if' & ':' used as else
const age1 = 15;

age1 >= 18 ? console.log('You can Vote!') : console.log('No You cannot');   // Results in 'No You cannot'




// Set a value to a variable (Setting as variable value based on condition)
const canVote = age >= 18 ? true : false;       // Set 'canVote as the variable > age(19) >= 18, if true we log it, if false we log it

console.log(canVote);


// Cont'd but as a string
const canVote1 = age >= 18 ? 'Please sign in' : 'You are not 18';

console.log(canVote1);


// Multiple Statements(Long Version)
const auth = true;                                  // variable created set to true
let redirect;                                       // this is set to something else in response if 'auth' is true or false

if(auth) {                                          // If 'auth' is true
    alert('Welcome to the dashboard');              // Display alert message
    redirect = '/dashboard';                        // Redirect user to dashboard
} else {
    alert('Access Denied');                         // If not then alert that access has been denied
    redirect = '/login'                             // Redirected to login page
}

console.log(redirect);



// Multiple Statements(Short Version with Tenary)
const auth1 = false;

const redirect1 = auth1 ? (alert('Welcome to the Dash1'), '/dashboard1') : (alert('DENIED'), '/login');         // In '()' We set the alert and variable in each after tenary(?)

console.log(redirect1);



// Using the 'AND' operator as a shorthand
auth ? console.log("WELCOME") : null;               // Evaluating if 'auth is true or false > then log welcome but we do not want to do anything if ELSE so we use 'null' since we have to have an else using Tenary

// Cont'd with '&&' (if we do not want to use an 'ELSE')
auth && console.log('HOLA');                        