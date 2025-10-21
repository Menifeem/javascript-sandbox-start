// The try...catch statement is comprised of a try block and either a catch block, a finally block, or both. The code in the try block is executed first, and if it throws an exception, the code in the catch block will be executed. The code in the finally block will always be executed before control flow exits the entire construct

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

// note: So it's a syntax that allows us to write specific code if an error occurs and a specific code if there's no error.

// The most common way to deal with errors with async await is to use a try catch statement.

// Ex: 
//console.log(x);                                                                 // ReferenceError: x is not define at script.js:10:13

// To catch the prev received error
try {
    console.log(r);                                                             // Taking the code that throws an error and moved into the 'try'
} catch(error) {                                                                // Catch taking in a variable (representing the error that is thrown)
    console.log('Error: ' + error);
}



// Note: Now you don't want to just fill your code with try catch blocks that you don't need. You should use a try catch when you're doing something that may result in an error and you plan on handling that error. So for example, if you're making an API request or an HTTP request and you're not sure if the request will succeed, you can use a try catch statement to handle that error if it occurs and you can do something with that message like display it on the page.

// Ex: throwing our own error
function double(number) {                                                       // Function taking in the variable 'number'
    if(isNaN(number)) {                                                         // if 'isNan' - is not a number > with 'number'
        throw new Error(number + ' is not a number');                           // throw new error of 'number'(param) is not a number
    }

    return number * 2;
}

// put our cade above to try/catch to test if it catches the error
try {
    const y = double(5);                                                     // set variable to reference the function above & here we can change the param to a number or NaN to catch an error
    console.log(y);
} catch(error) {
    console.log(error);
}