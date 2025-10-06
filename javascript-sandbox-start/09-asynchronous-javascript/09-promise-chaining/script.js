// Promise chaining is a technique in JavaScript that allows you to execute multiple asynchronous operations in sequence, where each operation starts after the previous one completes. This is achieved by using the .then() method, which returns a new promise, allowing you to chain multiple .then() calls together.

// https://javascript.info/promise-chaining

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
  .then((user) => {               // Here we get the oject first
    console.log(user);            // console log it 
    
    // Ex: returning the user name
    return user.name;
  })
  // passing the name here
  .then((name) => {               // then the user name goes into this next promise '.then'
    console.log(name);
    
    // attempting to return the user name length property
    return name.length;           // Here we return the lenghth of the name
  })

  // passing in the legth here 
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => console.log(error))
