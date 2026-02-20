// First creating clock functio
function clock() {
    const now = new Date();                                                 // Create the variable to set to the current date
    const canvas = document.getElementById('canvas');                       // Bringing in the canvas > bringing in the 'id' of canvas
    const ctx = canvas.getContext('2d');                                    // call Context(ctx) is where we call the methods from




    // Setup Canvas (We will be restoring the state before saving > Save and Restore after functions)
    ctx.save();                                                                 // Save default state
    ctx.clearRect(0, 0, 500, 500);                                              // Cleans everything > Takes in the X, Y, Width & Height
    ctx.translate(250, 250);                                                    // Since Width, Height is 500 we move this to half way in the rect which places us directly in he middle of the page
    ctx.rotate(-Math.PI / 2);                                                   // Rotate the clock -90 degrees (Or it will not tell the correct time and go in a weird rotation)

    // Set Default Styles
    ctx.strokeStyle = 'black';                                                  // Line colors
    ctx.fillStyle = 'grey';                                                     
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';                                                      // lineCap is the shape of the end of the line


    // Draw closk face/border
    ctx.save();                                                                 // By calling save here it saves everything before it
    ctx.beginPath();                                                            // Call this before we do everything
    ctx.lineWidth = 14;
    ctx.strokeStyle = 'blue';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);                                   // Use 'arc' to draw a circle > takes in the location (X, Y, Radius, StartAngle, EndAngle, CounterClockwise) > 'Math.PI * 2' gives us the full circle
    ctx.stroke();                                                               // Draws the new above lines after the initial was saved
    ctx.fill();                                                                 // Fill the circle with the fillstyle presented initially under 'Default Styles'
    ctx.restore();


    // Draw Hour Lines
    ctx.save();
    for (let i = 0; i < 12; i++) {                                              // Create the for loop to run to 12 
        ctx.beginPath();                                                        // starting point for the marks
        ctx.rotate(Math.PI / 6);                                                // Deploys the 12 lines 
        ctx.moveTo(100, 0);                                                     // Move to location
        ctx.lineTo(120, 0);                                                     // make a line to the final location
        ctx.stroke();
    }

    ctx.restore();


    // Draw Minutle Lines
    ctx.save();
    ctx.lineWidth = 4;
    for (let i = 0; i < 60; i++) {                                              // Create the for loop to run to 60 
        if(i % 5 !== 0) {                                                       // the focus of the hour hands > if not = to 0(12 hour hand) then they will be a little shorter
            ctx.beginPath();                                                    // starting point for the marks
            //ctx.rotate(Math.PI / 30);                                           // Deploys the 60 lines 
            ctx.moveTo(117, 0);                                                 // Move to location (Creating a shorter line with '117')
            ctx.lineTo(120, 0);                                                 // make a line to the final location
            ctx.stroke();
        }

        ctx.rotate(Math.PI / 30);                                               // Want it to rotate after the interation
        
    }

    ctx.restore();


    // Get Current Time
    const hr = now.getHours() % 12;                                             // Get 12 hours
    const min = now.getMinutes();                                               // Get minutes
    const sec = now.getSeconds();                                               // Get Seconds

    console.log(`${hr}:${min}:${sec}`);


    // Draw Hour Hand
    ctx.save();
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);   // Get the position
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();

    ctx.restore();



    // Draw Minute Hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);                 // Get the position
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();

    ctx.restore();


    // Draw Seconds Hand
    ctx.save();
    ctx.rotate((sec * Math.PI / 30));                 // Get the position
    ctx.strokeStyle = 'coral';
    ctx.fillStyle = 'coral';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);                                // Here we begin creating the rounded center piece within the clock holding all hands
    ctx.fill();

    ctx.restore();


    ctx.restore();                                                              // Restore default state

    requestAnimationFrame(clock);                                           // Run the animation within the function
}


requestAnimationFrame(clock);                                               // Run the Animation by calling it back with the clock