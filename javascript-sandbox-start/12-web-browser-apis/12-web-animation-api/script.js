// Briinging in the items that we need
const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const speedDown = document.getElementById('slow-down');


// Create array for our animation
const rollAnimation = [{                                                            // Formatting the object from .css into an array
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white',
},
{
    color: 'blue', 
    offset: 0.3
},
{
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',                         // Rotate the ball
    color: 'white',
},
];



// Creating options
const rollOptions = {
    duration: 3000,
    iterations: Infinity,
}


// Create the animation
const roll = ball.animate(rollAnimation, rollOptions);                              // We set 'roll' to add animation to the ball and taking in the functions to ensure rules are followed


// Add Pause/ Play
play.addEventListener('click', () => { 
    roll.playbackRate = 1;
    roll.play() });                          // hit play while in reverse
pause.addEventListener('click', () => roll.pause());

// Reverse
reverse.addEventListener('click', () => roll.reverse());


// Speed up
speedUp.addEventListener('click', () => (roll.playbackRate = roll.playbackRate * 2));

// Slow down
speedDown.addEventListener('click', () => (roll.playbackRate = roll.playbackRate * 0.5));