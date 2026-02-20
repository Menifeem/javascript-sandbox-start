// Canvas API - provides a means for drawing graphics via JavaScript and the HTML <canvas> element. Among other things, it can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

// 1st bring the element in and create a context for our canvas
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');                                        // Context used to do things such as draw, fill in colors etc

// Draw Rectangle
ctx.fillStyle = 'green';                                                    // FillStyle used to fill something in
ctx.fillRect(10, 10, 150, 100);                                             // FillRect first takes in 'X' & 'Y' and then Width/Height


// Draw Circle (Have to use the 'arc' method)
ctx.arc(300, 300, 100, 0, Math.PI * 2);                                     // 300 X, 300 Y, 0 Start of circle(middle of page), PI for the end of the angle
ctx.fillStyle = 'orange';
ctx.fill();


// Draw Lines
ctx.beginPath();                                                            // 'beginPath' to start the line
ctx.strokeStyle = 'blue';                                                   // Lines need a stroke style to begin
ctx.lineWidth = 10;                                                         // Create a thicker line
ctx.moveTo(10, 10);                                                         // 'moveTo' method > Move to a spcific area
ctx.lineTo(300, 300);                                                       // Draw a line from 300 to 300(the X, Y above)
ctx.stroke();


// Draw Text
ctx.font = '30px Arial';                                                    // Set the font
ctx.lineWidth = 1;                                                          // needed to be added for this new text (strokeText) for line 34
ctx.strokeStyle = 'brown';                                                  // Change line 34 strokeText to different color than line 22(blue)
ctx.fillStyle = 'dark yellow';
ctx.fillText('Champion FFL', 400, 100, 300);                                // We type the expected text & place as X, Y values & max width of the text
ctx.strokeText('I am testing', 300, 500, 300);                              //Stroke text used as an outline


// Adding Image (bring the image into the canvas)
const image = document.querySelector('img');
image.style.display = 'none';                                               // show in the canvas but not the page by just setting the style of display to 'none'

image.addEventListener('load', () => ctx.drawImage(image, 270, 270, 100, 100));         // Waiting for image to load while page is loading > (1) listen for load event, (2) Create function to draw image once it(page) has loaded, (3) Takes in the image and where we want to place it