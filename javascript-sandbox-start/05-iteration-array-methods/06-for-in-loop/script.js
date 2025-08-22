// For In loop in JavaScript is used to iterate over all enumerable string properties of an object, including inherited properties. It is commonly used for objects but can also be used with arrays (though not recommended for arrays due to potential unexpected behavior)

// https://coderscratchpad.com/javascript-for-in-loop/

// Loop Through object values
const colorObj = {
    color1: 'red', 
    color2: 'blue', 
    color3: 'green', 
    color4: 'orange', 
};

for (const x in colorObj) {               // To get the keys within the objects
    console.log(x);
}

for (const key in colorObj) {               // To get the value within the objects
    console.log(key, colorObj[key]);
}



// For In loop with Array
const colorArr = ['red', 'green', 'blue', 'orange'];

for (const color in colorArr) {             // Results in '0-4' instead of the array strings
    console.log(color);
}


for (const key in colorArr) {             // Results in the strings within the array
    console.log(colorArr[key]);
}