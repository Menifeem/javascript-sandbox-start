// Object Literals - common data structure that holds key/value pairs

// Ex: const person = {
//     name: 'tim',                        // Keys ex: 'name', 'age', 'location'
//     age: 34,                            // Values ex: 'tim', '34', 'georgia'
//     location: 'georgia'
// }


let x;

const person = {
    name: 'tim',                        // Keys ex: 'name', 'age', 'location'
    age: 34,                            // Values ex: 'tim', '34', 'georgia'
    location: 'georgia',
    isAdmin: true, 
    address: {
        street: '123 Main st',
        city: 'athens',
        state: 'georgia',
    },
    hobbies: ['music', 'sports'],
};



// Pull the name 
x = person.name;                        // Results in 'tim'


// Pull the key with '[]'
c = person['age'];                      // Results in '34'


// Extract values/keys from an object within an object
v = person.address.state;               // Results in 'Georgia'



// Extracting from an array within the object
b = person.hobbies                      // Results in '['music', 'sports']'
n = person.hobbies[1]                   // Results in 'sports' > this is the 1 index within the array



// Update properties
person.age = 44
m = person                              // Person age is now 44


// Delete Method - Remove a property
delete person.location;
l = person;                             // Location removed from the object


// add a property
person.hasChildren = false;
k = person;                             // 'hasChildren' has been added to the person object



// Function added as a property
person.greet = function () {
    console.log(`Hello my name is ${this.name} and I am from ${this.address.street}`);
};

person.greet();                         // Results in 'Hello my name is tim and I am from 123 Main st'



// Creating keys using multiple words
const person1 = {                       // Results in 'tarv' > have to use the brackets when multi word keys are visible
    'first name': 'brad',
    'last name': 'tarv',
}

j = person1['last name'];






console.log(person);
console.log(x);
console.log(c);
console.log(v);
console.log(b);
console.log(n);
console.log(m);
console.log(l);
console.log(k);
console.log(j);


