// setInterval() method in JavaScript is used to repeatedly execute a function at specified intervals (in milliseconds)
// clearInterval() method of the Window interface cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing

// https://www.programiz.com/javascript/setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval


// ex
// creating an interval id
const intervalID = setInterval(myCallback, 2000);           // setInterval returns an ID for us > take in a function > pass in the amount of time we want the function to run


function myCallback() {
    console.log(Date.now());
}

// Stop it with 'clearInterval' (this example we use the event listener on the stop button)
document.querySelector('#stop').addEventListener('click', () => {       // grab the stop button id > add click event to it and pass clear interval
    clearInterval(intervalID)
});



// Alternate path to stop
function stopChange() {
    clearInterval(intervalID3)
}

document.querySelector('#stop').addEventListener('click', stopChange);



// Passing in an argument
const intervalID1 = setInterval(myCallback1, 2000, 'Hola');             // passing in an argument with function set to 2 secs > display 'hola'

function myCallback1(a) {                                               // Passing in the argument 'Hola' here with 'a'
    console.log(a, Date.now());
}

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalID1)
});






// Changing the background color when starting 
let intervalID3;                                        //  create variable for id

function startChange() {
    // check if interval is running or not
    if (!intervalID3) {                                 // if not intervalId3 > then we start it(following line)
        intervalID3 = setInterval(random, 1000);         // Adding a value to intervalId3 > we include the function that changes color > for every 2 secs
    }
}


// function changeColor() {
//     // Changing color from 1 to other
//     if(document.body.style.backgroundColor !== 'black') {       // if not back background
//         // if above is true then here we make it the colors below
//         document.body.style.backgroundColor = 'orange';
//         document.body.style.color = 'blue';
//     } else {
//         // Else we set it to the colors below
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'purple';
//     }
// }



// Random color
function random() {
    const rc = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${rc}`;
}


document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);