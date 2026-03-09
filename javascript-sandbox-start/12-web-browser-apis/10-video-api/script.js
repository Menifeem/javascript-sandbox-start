const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');

play.addEventListener('click', () => video.play());
pause.addEventListener('click', () => video.pause());
stop.addEventListener('click', () => {                                              // Stop is handled differently > occurs on the stop event
    video.pause();                                                                  
    video.currentTime = 0;                                                          // Setting it to 0(beginning)
});


// To get the time
video.addEventListener('timeupdate', () => (currentTime.innerText = video.currentTime));        // using the 'timeupdate' event > use 'currentTime' element and set the innerText of it > and equal that to the video current time