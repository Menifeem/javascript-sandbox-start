// Resource: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

// Speech Recognition: which provides the ability to recognize voice context from an audio source and allows your app to respond appropriately
// Speech Synthesis: a text-to-speech component that allows programs to read out their text content (normally via the device's default speech synthesizer.)

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;               // set to speechRecogntion OR webkitSpeechecognition

// Initialize a new speech recognition object using speech recognition constructor
const rec = new SpeechRecognition();


rec.lang = 'en-us;'                                                                                 // Setting properties
rec.continuous = false;                                                                             // if set asl false it will stop after listening. If true then it will continue

rec.onresult = function(e) {                                                                        // Take rec object and add handler 'onresult'
    const acceptedColors = [                                                                        // Focusing on color of the page matching speech
        'red',
        'orange',
        'blue',
        'black',
        'white',
        'green',
        'purple',
        'brown',
    ]


    for (let i = e.resultIndex; i < e.results.length; i++) {                                        // set to resultIndex > Then as long as i is less than results in the array(As long as results in the array then we keep going) > and increment by 1
        const script = e.results[i][0].transcript/toLowerCase().trim();                             // set to e.results > index will be dynamic'i' and then the first element '0' > keep lower case and trim any whiespace


        if(acceptedColors.includes(script)) {                                                       // if acceptedColors includes 'script' (Whatever we say)
            document.body.style.backgroundColor = script;
        } else {
            alert('Please say a color');
        }

        
        console.log(script);
    }
    // console.log(e.results[0][0]);                                                                // displays the color that was stated that is listed int he console log within the array
}

rec.start();                                                                                        // Property that begins to listens
