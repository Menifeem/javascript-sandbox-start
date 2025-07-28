// Primitive Types: Stored directly in the "stack", where it is accessed from 
// Examples: String, Number, Boolean, Null, Undefined. Symbol, BigInt

const name = 'John';
const age = 30;

let newName = name;             // New Variable created and assigned prev variable 'name'
newName = 'Tommy';              // reassigned variable since it was set to 'let' on prev line

console.log(name, newName);     // call the initial name and then the newName


// Reference Types: Stored in the "heap" and accessed by reference
// Examples: Arrays, Functions, Objects

const person = {
    name: 'Zack',
    age: 22,
    siblings: 7,
    team: "Chicago Bears",
}


let newperson = person;             // Variable created 
newperson.name = 'Alex';            // New variable and used '.name' to access the object to make a change

console.log(person, newperson);

