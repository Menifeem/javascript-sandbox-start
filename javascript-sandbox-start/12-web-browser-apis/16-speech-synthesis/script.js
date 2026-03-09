// Resource: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

const voiceSelect = document.getElementById('voice-select');                                // Set variable for voice selection

const synth = window.speechSynthesis;                                                       // Set the variable
let voices;


// Creating 2 functions: 1) to speak 2) fill the 'select' box

// 1) Speak Function
function onSubmit(e) {
    e.preventDefault();


    const textInput = document.getElementById('text-input');

    const utterThis = new SpeechSynthesisUtterance(textInput.value);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');        // equal to the voiceSelect element to selectedOptions(first element within the array[0] > getAttribut and data-name which we assigned above)
    for (let i = 0; i< voices.length; i++) {                                                // Loop through the voices > as long as i is less than voices.length 
        if(voices[i].name === selectedOption) {                                             // if voices and curent voice name is equal to the selected option 
            utterThis.voice = voices[i];                                                    // then we will say utter this voice
        }
    }

    synth.speak(utterThis);
}

// Different Voices (Fill the drop downwith the available voices)
function addVoicesToSelect() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {                                           // Here we will loop through the voice options
        const option = document.createElement('option');                                // Creating an option element
        option.textContent = `${voices[i].name}`;                                       // Text for the option > take voices with whatver index we are on '[]' > and then the name attached


        if (voices[i].default) {                                                        // If it is the default voice
            option.textContent += ' - DEFAULT';                                         // then we append '-default'
        }

        option.setAttribute('data-lang', voices[i].lang);                               // set Attribute to current voice plus language'lang'
        option.setAttribute('data-name', voices[i].name);                               // set Attribute to current name plus language'name'
        voiceSelect.appendChild(option);                                                // Add to the select list and pass in 'the option'
    }
}




// 1) 
document.getElementById('form').addEventListener('submit', onSubmit)

// 2) Call the addVoicesToSelect function
addVoicesToSelect();
if(speechSynthesis.onvoiceschanged !== undefined) {                                     // if speechSythensis.onVOicesChanged is not equal to undefined(If if is defined)
    speechSynthesis.onvoiceschanged = addVoicesToSelect;                                // Then we set spechSynthesis.OnVoicesChanged to AddVoicesToSelect
}