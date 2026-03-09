// Creating an audio element for each of the keys

window.addEventListener('keydown', playSound)


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);                  // Getting the audio element with the selected key > audio element and array from data-key with 3(event) + the key selected(keycode)

    const key = document.querySelector(`.key[data-key="${e.keyCode}]`);                     // '.key' = div with the class of key

    // Ref an audio tag that is associated with the key
    if(!audio) return;                                                                      // If no audio when selecting the key then nothing will happen 

    // Set audio current time
    audio.currentTime = 0;


    audio.play();

    key.classList.add('playing');



    // Flash as we hit the key (Function that runs in 100 ms) > Remove that targeted class
    setTimeout(() => {
        key.classList.remove('playing');
    }, 100);


    // console.log(audio, key);
}
