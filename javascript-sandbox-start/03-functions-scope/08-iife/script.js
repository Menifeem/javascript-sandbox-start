//Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is executed immediately after it is defined. It is commonly used to create a private scope, avoiding variable pollution in the global scope

// Creating and Invoking a function at the same time


// const user = 'john';                // Results in error since the user was defined in 'OtherScript' > Can be resolved with an 'IIFE'

// IIFE begins with '()()' 
// First '()' is the function and the second is callback

// Using IIFE to handle the error conflict between the scripts

(function() {                           // IIFE function is placed within '()'
    const user = 'john';                // User here is only for the scope in the IFFE > The 'OtherScript' is a global variable
    console.log(user);
})
();                                     // Results in 'john'



// Cont'd with creating an additional function
(function() {                           
    const user = 'john';                
    console.log(user);

    const hello = () => console.log('Hello from the IIFE');
    hello();                            // Has to be callback here since scoped inside the IIFE
})
();  



// Cont'd adding parameters
(function(name) {                                       
    console.log('Hello ' + name);

})
('Timothy');                            // Results in 'Hello Timothy'



// Named IIFE
(function hello() {
    console.log('Hello');
})();                                   // Results in 'Hello'
