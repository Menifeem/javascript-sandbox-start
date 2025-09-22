// setTimeout() method allows you to execute a piece of code after a certain amount of time has passed. You can think of the method as a way to set a timer to run JavaScript code at a certain time
// clearTimeout() method of the Window interface cancels a timeout previously established by calling Window.setTimeout()


// https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/
// https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout


// setTimeout()
setTimeout(function () {                // taking in a function
    console.log('Hello');
}, 2000);                               // argument for the time we want to wait to push function

// used for comparison purposes > this displayed 1st since there wasnt a timer for the console to display verbiage
console.log('Hello Again');



// Using a named function 
// > setTimeout(changeText, 3000);           // using a named function > set the seconds to 2000


function changeText() {                 // Function used to change the button
    document.querySelector('button').textContent = 'Hi Everyone'
}



// Clear Timeout (need to have the timer id)
const timerId = setTimeout(changeText, 2000);           // variable assigned & executing with the function and timer

// Contd using clearTimeout on an event on that same button 
document.querySelector('button').addEventListener('click', () => {      // adding an event listener on the button when we click it
    console.log(timerId);                                               // when the click happens we log this
    clearTimeout(timerId);                                              // Pass in the timer in variable to the clearTimeout method
    console.log('Timer Cancelled');
})