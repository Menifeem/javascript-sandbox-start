// Naming & Destructuring from Object Literals

// If key & variable are the same then we do not have to have both
const firstName = 'Lisa';
const lastName = 'Menifee';
const age = 33;

const person = {                            // Here we created an Object with keys & variables are the same 
    firstName: firstName,
    lastName: lastName,
    age: age,
};

// If they are the same cont'd > We just remove the variable
const person1 = {                            
    firstName,
    lastName,
    age,
};



// Destructuring
const todo = {
    id: 1, 
    title: 'Take out Trash',
};

const id = todo.id;

// Cont'd > Destructure properites from the objects (Pulling variables out of the object)
const todo1 = {
    id1: 1, 
    title1: 'Take out Trash',
};

//const { id1 } = todo1;                      // Method used to destructure the property > resulting into '1'
const { id1, title1 } = todo1;                // Results in to destructuring '1 'Take out Trash''


// Cont's with added objects
const todo2 = {
    id2: 1, 
    title2: 'Take out Trash',
    user: {
        name: 'Tone',
        age: 33,
    },
};

const { id2, title2, user } = todo2             // Results into pulling properties '1 'Take out Trash' & {name: 'Tone', age: 33}'


// Cont'd > If I want the name only from the user
const todo3 = {
    id3: 1, 
    title3: 'Take out Trash',
    user1: {
        name1: 'Tone',
        age1: 33,
    },
};

const { id3, title3, user1: {name1} } = todo3;          // Results into pulling 'Tone' only

// Rename properties or keys
const {                                                 // Resulting in '1'
    id3: todoId, 
    title4,
    user1: { name },
} = todo3

 // const { id3, title3, user1: {name1} } = todo4; 



 // Destructure arrays
 const numbers = [23, 45, 7657, 87865];

 const [first, second] = numbers;                   // the '[]' are used for destructuring arrays > resulting in '23, 45'



 // Rest Operator (Gathering the rest of the #'s and put into a variable as an array)
 const numbers2 = [23, 45, 7657, 87865];

 const [first1, second1, ...rest] = numbers2;   // Results into '23 45' & '[7657, 87865]'(Into an array for the rest)




console.log(person.age);
console.log(person1.age);
console.log(id);
console.log(id1, title1);
console.log(id2, title2, user);
console.log(name1);
console.log(todoId);
console.log(first, second);
console.log(first1, second1, rest);