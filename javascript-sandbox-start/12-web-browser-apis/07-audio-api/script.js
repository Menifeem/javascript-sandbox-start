const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');


play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
stop.addEventListener('click', () => {                                          // allows the stop functionality to start from the beginning when pressing play again
    audio.pause();
    audio.currentTime = 0;
});

audio.addEventListener('timeupdate', () => {                                    // Sets the current time of audio while being played
    currentTime.innerText = audio.currentTime;
});

volume.addEventListener('change', () => (audio.volume =volume.value));          // sets the volume slider and responds to change of colume slider
