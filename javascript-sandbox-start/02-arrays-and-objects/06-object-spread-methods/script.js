let x;
// Another way to create an object
const todo = {};                                    // This '{}' states it will be an object

todo.id = 1;
x = todo;




// Object Constructor
const todo1 = new Object();                                    // This 'New Object' states it will be an object > Set up to a Object Literal

todo1.id = 1;
z = todo1;

// Object Constructor Pt 2
const todo2 = new Object();                                    // This 'New Object' states it will be an object > Set up to a Object Literal

todo2.id = 1;
todo2.name = 'Go Over';
todo2.completed = true
c = todo2;                                                      // Results in '{id: 1, name: 'Go Over', completed: true}'



// Nesting
const person = {
    address: {
        coords: {
            lat: 43.5644,
            lng: -32.3466,
        },
    },
};

v = person.address.coords.lng;                                  // Results in '-32.3466' displaying the longitude



// Spread Operator
const obj1 = {a:1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {obj1, obj2}

b = obj3;                                                       // Results into '{obj1: {…}, obj2: {…}}' an object that has 2 objects inside


// Spread Operator cont'd (Combining the objects inside the object with '...' spread operator)
const obj4 = {...obj1, ...obj2};
n = obj4;                                                       // Results in '{a: 1, b: 2, c: 3, d: 4}'


// Assign method with object
const obj5 = Object.assign({});                                 // Results in empty object '{}' since we did not enter anything
m = obj5;


// Assign Cont'd (Adding properties from obj1)
const obj6 = Object.assign({}, obj2, obj1);                        // Results in Objects assigned to the empty '{}' > console logs '{c: 3, d: 4, a: 1, b: 2}'
l = obj6;



// Dealing with Arrays of objects
const todos = [                                                 // Results in objects in array '[{…}, {…}, {…}, {…}]'
    {id: 1, name: 'John'},
    {id: 2, name: 'James'},
    {id: 3, name: 'Joker'},
    {id: 4, name: 'Jimmy'},
];

k = todos;

// Access a specific project
j = todos[0];                                               // Results in '{id: 1, name: 'John'}' the 1st object
h = todos[0].name;                                          // Results in 'John'



// Get all Keys and input in an array (gathered from line 18 Objects)
g = Object.keys(todo2);                                      // Results in '['id', 'name', 'completed']' > we pull the keys from the Object from line 18 'todos2'



// Length of an Object(1st we pick up the keys and then we chack the length)
f = Object.keys(todo2).length;                              // Results into '3' = id, name, completed


// Array with all the values
d = Object.values(todo2);                                   // Results in '[1, 'Go Over', true]' > pulling the values from an object into an array


// Array of the key value pairs
s = Object.entries(todo2);                                  // Results in '[Array(2), Array(2), Array(2)]' into an array with arrays with the key values 



//Has on Property (Boolean)
a = todo2.hasOwnProperty('name');                           // 'True' due to todo2 object on line 18 has a "name" property




console.log(x);
console.log(z);
console.log(c);
console.log(v);
console.log(b);
console.log(n);
console.log(m);
console.log(l);
console.log(k);
console.log(j);
console.log(h);
console.log(g);
console.log(f);
console.log(d);
console.log(s);
console.log(a);






