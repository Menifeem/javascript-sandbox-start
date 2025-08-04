// JSON (Javascript Object Notation) -  is a lightweight data interchange format that is easy to read and write for humans and easy to parse and generate for machines. It is often used to transmit data between a server and a web application



// Test from GitHub to practice pulling API's (https://api.github.com/users)
// My Info for API (https://api.github.com/users/menifeem)


// Convert Objects to JSON
const post = {
    id: 1,
    title: 'Post One',
    body: 'Remaining'
};

console.log(post);                          // Results '{id: 1, title: 'Post One', body: 'Remaining'}' keeps as a JSON



// Convert object to JSON string
const post1 = {
    id: 1,
    title: 'Post One',
    body: 'Remaining'
};

const str = JSON.stringify(post1);

console.log(str);                           // Results '{"id":1,"title":"Post One","body":"Remaining"}' turns into a JSON string


// Parse - method in JavaScript is used to parse a JSON string, constructing the JavaScript value or object described by the string.
const post2 = {
    id: 1,
    title: 'Post One',
    body: 'Remaining'
};

const obj = JSON.parse(str)

console.log(obj);                           // Results '{id: 1, title: 'Post One', body: 'Remaining'}' > takes the string and converts to JSON




// Parse an Array
const obj1 = [
    {
    id: 1,
    title: 'Post One',
    body: 'Remaining'
    },
    {
    id2: 1,
    title2: 'Post Two',
    body2: 'Remaining Leftovers'
    },
];

const str2 = JSON.stringify(obj1)

console.log(str2);                          // Results in '[{"id":1,"title":"Post One","body":"Remaining"},{"id2":1,"title2":"Post Two","body2":"Remaining Leftovers"}]' > We see a JSON string with objects within an array



// Pasrse is also used to access a specific property with in JSON
const obj3 = JSON.parse(str)                // 'str' reflects from line 39

console.log(obj3.title);                    // Results in 'Post One' 
