// requestAnimationFrame - method is a powerful tool in JavaScript for creating smooth animations. It tells the browser that you wish to perform an animation and requests that the browser call a specified function to update the animation before the next repaint

// https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame


function step () {
    console.log('Hello');
}

// Call the requestAnimationFrame method to call in to pass in the step function above
// This will tell the browser to call in the step function before the next repaint
requestAnimationFrame(step);                                                        // This will call the function only once


// Keep repainting
function step1 () {
    console.log('Hello');


    requestAnimationFrame(step1);
}

requestAnimationFrame(step1);                                                       // This method calls it to keep repainting



// The callbacks below taking in a timestamp > "The time when it starts as it goes"
// function step2 (timestamp) {
//     console.log(timestamp);


//     requestAnimationFrame(step2);
// }

// requestAnimationFrame(step2); 



// See how much time has passed since the timestap starts
let start;
let done = false;

function step3(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;                                                  // get the time that has passed
    if (elapsed > 2000) {                                                               // making it stop after 2 secs
        done = true;
    }  
    
    if(done) {                                                                          // Then here we check for 'done' and if true we then stop the repaint
        return;
    }


    console.log(elapsed);

    requestAnimationFrame(step3);
}

requestAnimationFrame(step3);




// Focusing on moving the ball on the page
const image = document.querySelector('img');                                            // here we bring in the image
let start1;
let done1 = false;

function step4(timestamp) {
    if (start1 === undefined) {
        start1 = timestamp;
    }

    const elapsed1 = timestamp - start1;                                                  // get the time that has passed
    if (elapsed1 > 7000) {                                                               // making it stop after 2 secs
        done1 = true;
    }  
    
    if(done1) {                                                                          // Then here we check for 'done' and if true we then stop the repaint
        return;
    }


    image.style.transform = `translateX(${elapsed1 / 20}px) rotate(${elapsed1 / 20}deg)`;                            //'translateX.....' focuses on the X axis and the value is dynamix using the 'elapsed' variable
    // have the ball rotate as it translates on the desired axis

    requestAnimationFrame(step4);
}

requestAnimationFrame(step4);

