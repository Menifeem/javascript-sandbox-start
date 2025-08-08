// Nested Function - nested function is just a function defined within another function

// Looking at how scopes with with Nested Functions

function first() {
    const x = 100;


    function second() {
        const y = 200;
        console.log(x + y);
    }

    second();                           // In order for 'second' function to run I have to call it within 'first'
}

first();                                // Results in '300'



// Block
if (true) {
    const x = 100;

    if(x === 100) {
        const y = 200;
        console.log(x + y);             // Results in '300' > if 100 is true then add 'y' & then add 'x' to 'y'
    } 
}