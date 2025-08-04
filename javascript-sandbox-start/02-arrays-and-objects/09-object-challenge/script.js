const library = [
    {title: 'Temporary', author: 'Joan', status: {
        own: true,
        reading: false,
        read: false},
    },
    {title: 'Chargers Are Trash', author: 'Mat', status: {
        own: true,
        reading: false,
        read: false},
    },
    {title: 'Terry to the Ravens', author: 'Scharvin', status: {
        own: true,
        reading: false,
        read: false},
    },
];

// You finished reading all of the books. Set the `read` value for all of them to true. Do not edit the initial object. Set the values using dot notation.
library[0].status.read = true; library[1].status.read = true; library[2].status.read = true;



// Step 3: Destructure the title from the first book and rename the variable to `firstBook`

// x = { library: title = 'firstBook' }
// const [library ,title[0] = 'firstBook',] = x
// const [title[0]: 'firstbook'] = x
// library [{title[0]} = 'firstBook'] = x;
// const [ title ] = library
// x = library[0]{ title= 'firstBook' };
// const [ { title: firstbook } ] = library;
const [ { title: firstbook } ] = library;



// Turn the library object into a JSON string
const jsonStr = JSON.stringify(library);


console.log(jsonStr);