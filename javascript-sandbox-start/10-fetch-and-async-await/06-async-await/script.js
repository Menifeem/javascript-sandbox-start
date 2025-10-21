// Async/await is a special syntax in JavaScript that allows you to work with promises in a more comfortable and readable manner. It simplifies the process of writing asynchronous code, making it look and behave more like synchronous code.
// Note: can be used in replacement of the '.then' syntax
// https://javascript.info/async-await

// Ex with a promise created
const promise = new Promise((resolve, reject) => {                                      // Passing in resolve/ reject within the function 
    setTimeout(() => {                                                                  // Focus here is to show how we will consume a promise rather than dealing with an error
        resolve({name: 'John',age: 33});                                                // resolve our promise and passing in a user object
    }, 3000);
});

// So when it comes to async await, one thing we have to do is it has to be in a function that is asynchronous.
async function getPromise() {
    const response = await promise;                                                     // So what we would do here is just simply set a variable called response, and we would set that to the promise, except we have to use Await here because this is this is an asynchronous operation, so we have to await on it to be complete.
    console.log(response);
}

getPromise();



// Ex cont'd with the fetch api
// Note: Reminder with fetch we get 2 promises > We get one with the response object, and then we return the response '.JSON' method and we get the data
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');              // no '.then' is needed since here we are waiting(await) on that request > So when we get the response it'll get put into that res. > another note: But you need to have that here because this is a promise which doesn't execute right away. So you need to wait for it.
    const data = await res.json();                                                      // Now remember, we need to there's another promise with the data. So we're going to say 'const data' and then we're going to set that to await the res dot JSON method

    console.log(data);
}

getUsers();



// Same with an arrow function
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');              // no '.then' is needed since here we are waiting(await) on that request > So when we get the response it'll get put into that res. > another note: But you need to have that here because this is a promise which doesn't execute right away. So you need to wait for it.
    const data = await res.json();                                                      // Now remember, we need to there's another promise with the data. So we're going to say 'const data' and then we're going to set that to await the res dot JSON method

    console.log(data);
}

getPosts();