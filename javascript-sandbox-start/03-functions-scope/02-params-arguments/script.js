// Function parameters are variables defined in the function declaration that receive values (arguments) when the function is called

function registeredUser(user) {             // Created a parameter of 'user'
    return user + ' is resgistered';
}

console.log(registeredUser('Tim'));         // Results in 'Tim is resgistered'
console.log(registeredUser());              // Results in 'undefined is resgistered' since a variable 'user' in line 4 was not defined here in the argument



// Default Parameter (Can use with an 'if' statment)
function registeredUser1(user) {
    if (!user) {
        user = 'Bot'
    }             
    return user + ' is resgistered';            // Results in 'Bot is resgistered'
}
console.log(registeredUser1());


// Default Parameter Cont'd (Easier Method)
function registeredUser2(user = 'Bot') {         // If nothing is entered in the argument below then we default to this parameter value
            
    return user + ' is resgistered';
}

console.log(registeredUser2());                  // Results in 'Bot is resgistered'



// Rest Parameter - Rest parameters are used to create functions that accept any number of arguments.
function sum(...numbers) {
    return numbers;
}

console.log(sum(1, 2, 3));                      // Results in an array with the #'s we passed in '[1, 2, 3]'




// Cont'd with For Loop - taking in all the #'s that are passed in and looping together
function sum1(...numbers) {
    let total = 0;                              // First initialize a varible

    for (const num of numbers) {                // Here we loop thru (each one of the numbers)
        total += num;                           // Take the total variable and add num onto each one thru the iteration
    }

    return total;
}

console.log(sum1(1, 2, 3, 4, 5));           // Results in '15' looping thru and adding all together




// Object as Parameters
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`
}

const user = {                              // Here we created the object with the users credentials to pull from for the initial function
    id: 1,
    name: 'Tone',
};

console.log(loginUser(user));               // Results into 'The user Tone with the id of 1 is logged in'




// Array as Parameters
function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);     // 'randomIndex' is math floor(rounding down) a random #(Math.random) and multiply times the length of the array(*arr.length)


    const item = arr[randomIndex];                                  // create 'item' variable to pull a random number that was initially set to the array

    console.log(item);
}

random([1, 43, 54, 75, 8765]);                                      // Results in a random # from the array every refresh




// Can use the rest parameter and remove the array from console callback
function random1(...arr) {                                          // used with rest parameters(...)
    const randomIndex1 = Math.floor(Math.random() * arr.length);     // 'randomIndex' is math floor(rounding down) a random #(Math.random) and multiply times the length of the array(*arr.length)


    const item1 = arr[randomIndex1];                                  // create 'item' variable to pull a random number that was initially set to the array

    console.log(item1);
}

random1(1, 43, 54, 75, 8765); 