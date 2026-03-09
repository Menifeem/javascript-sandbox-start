const play = document.getElementById('play');
const stop = document.getElementById('stop');
const video = document.getElementById('video');
const timestamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');

// My Initial Attempt
// play.addEventListener('click', () => {
//     if(video.play) {
//         a
//     }
// });
// stop.addEventListener('click', () => {
//     video.pause();
//     video.timestamp = 0;
// });

// Play when clicking the play button and by clicking the video itself
function playPause() {
    if(video.paused) {                                                  // fisrt check if video is paused with the use of the property 'paused'
        video.play();                                                   // show the play button
    } else {
        video.pause();                                                    // if not playing then remain paused
    }
}


// Stop Video 
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}



// Updating icon when video is in play/pause
function updateIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';            // If paused then we set the html to a font icon
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';           // If not paused then we set the html to a font icon
    }
}


// Progress Bar
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;


    // Time to update with Progress bar
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;                      // take timestamp element(numbers) set innerHTML to the mins and secs
}


// Set progress while playing vid
function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;       // '+progress' sets it(value) to a number
}



// Play when clicking the play button and by clicking the video itself
video.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress);

stop.addEventListener('stop', stopVideo);
play.addEventListener('click', playPause);
progress.addEventListener('click', setProgress);