// Bring everything in
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


// Create array of song titles
const songs = ['hey', 'summer', 'ukulele'];


// Keep track of song playing
let songIndex = 2;                                                                  // 2 means it will being with 'ukulele' (Note: from array count)


// Initially Load song detail (Image, Name & Audio)
loadSong(songs[songIndex]);                                                         // Creating a function and Pass in the 'songs' array and the 'songIndex'

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}


// Play Song
function playSong() {
    musicContainer.classList.add('play');                                           // Take the musicContainer and adding the class of 'play'
    playBtn.querySelector('i.fas').classList.remove('fa-play');                     // Change play button to pause (Remove play and add pause) > icon.tag is 'i.fas' > classList remove to remove the play icon('fa-play') font icon 'fa-play' class
    playBtn.querySelector('i.fas').classList.add('fa-pause');                       // The same but we add the pause
    audio.play();                                                                   // To play the song
}


// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');                                        // Take the musicContainer and adding the class of 'remove'
    playBtn.querySelector('i.fas').classList.add('fa-play');                        // Change play button to play (Remove pause and add play) > icon.tag is 'i.fas' > classList add to add the play icon('fa-play') font icon 'fa-play' class
    playBtn.querySelector('i.fas').classList.remove('fa-pause');                    // The same but we remove pause
    audio.pause();                                                                  // To pause the song
}



// Play Previous Song
function prevSong() {                                                               // looking to change the songIndex that was listed earlier (songIndex = 2)
    songIndex--;                                                                    // Takes 1 away since we are going backwards on the index


    if(songIndex < 0) {                                                             // If we are at the beginning
        songIndex = songs.length - 1;
    }


    loadSong(songs[songIndex]);                                                     // Loading song

    playSong();
}



// Play Next Song
function nextSong() {                                                               // looking to change the songIndex that was listed earlier (songIndex = 2)
    songIndex++;                                                                    // Adds 1  since we are going forward on the index


    if(songIndex > songs.length - 1) {                                             // If we are after the first song
        songIndex = 0;                                                              // If on the final song ans select next then we go back to '0' beginning
    }


    loadSong(songs[songIndex]);                                                     // Loading song

    playSong();
}



// Progress Bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;                                 // 'e.srcElement' gets the audio > duration is the length of time and currentTime is the current time of song
    const progressPercent = (currentTime / duration) * 100;                         // This will give us our percentage
    progress.style.width = `${progressPercent}%`;                                    // Focusing on the progeress bar visual
}



// Click on progress bar
function setProgress (e) {
    const width = this.clientWidth;                                                 // refers to the element we call the width on 
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}



// Play song indicator
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');                    // checking status if is playing (in the index for 'music Container' with the 'play status)


    if(isPlaying) {                                                                 // Will pause if was playing and user clicked the play button
        pauseSong();
    } else {
        playSong();
    }
});




// Prev & Next Buttons
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);                               // event listener on audio ad fire off time update and we will call the function for the progress bar
progressContainer.addEventListener('click', setProgress);                            // Click inside of the progress bar