// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states(Pending / Fulfilled / Rejected)

// https://www.geeksforgeeks.org/javascript/javascript-promise/

// Ex
// To create a promise we use the promise constructor ('new promise...')

const promise = new Promise((resolve, reject) => {                  // Takes in 2 operands (resolve & reject) > resole = complete/successful > reject = error/ incomplete

    // simulating the task with 'setTimeout' > allows us to wait to do something(fetch from server etc)
    setTimeout(() => {
        console.log('Async task complete');
        // call resolve stating everything is ok
        resolve();
    }, 1000);
});


// To handle a promise
promise.then(() => {
    // usually takes in what we pass into resolve > nothing in this case so we just console log
    console.log('Promise consumed');
});



// Example with the 'promise.then' used in the promise above vs a variable

new Promise((resolve, reject) => {                  // Takes in 2 operands (resolve & reject) > resole = complete/successful > reject = error/ incomplete

    // simulating the task with 'setTimeout' > allows us to wait to do something(fetch from server etc)
    setTimeout(() => {
        console.log('Async task 2 complete');
        // call resolve stating everything is ok
        resolve();
    }, 1000);
    // place the '.then' at the end
}).then(() => {console.log('Promise 2 Consumed')});



// Example to return data from a promise(done from 'resolve')
new Promise((resolve, reject) => {                  // Takes in 2 operands (resolve & reject) > resole = complete/successful > reject = error/ incomplete

    // simulating the task with 'setTimeout' > allows us to wait to do something(fetch from server etc)
    setTimeout(() => {
        // call resolve and we have a user that we want to pass
        resolve({name: 'Mark', age: 43, email: 'ooo@mail.com'});
    }, 1000);
    // catching the promise with '.then' > we pull our parameter and log it
}).then((user) => {console.log(user)});






// Handling Errors
const getUser = new Promise((resolve, reject) => {                  // Takes in 2 operands (resolve & reject) > resole = complete/successful > reject = error/ incomplete

    // simulating the task with 'setTimeout' > allows us to wait to do something(fetch from server etc)
    setTimeout(() => {
        
        // Setting a flag for an error
        let error = true;

        // If not error
        if(!error) {
            resolve({name: 'Mark', age: 43, email: 'ooo@mail.com'});    // we will display resolve
        } else {
            reject('Error: Something went wrong');                      // we will display the reject error if rejected
        }
        
        
    }, 1000);
});

// we grab the variable and call it ( we will use '.catch' to catch the error)
getUser
.then((user) => console.log(user))
// pass in whatever the error is that we pass in to reject
.catch((error) => console.log(error))
// Finally runs whether it is resolved or rejected
.finally(() => console.log('The promise has been resolved or rejected'));



// outside of the nested scope and the times so this will be performed first
console.log('Global Scope is here and non blocking. I go first before the setTimeout');
