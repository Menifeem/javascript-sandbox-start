// Key Down, Key Up and Key press are different events

const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {console.log('keypress');};

itemInput.addEventListener('keypress', onKeyPress);         // waiting for the keypress event and then it fires off the function


// KeyUp 
const onKeyUp = (e) => {console.log('keyup');};

itemInput.addEventListener('keyup', onKeyUp);               // waiting for the keyup event and then it fires off the function


// keydown
const onKeyDown = (e) => {console.log('keydown');};

itemInput.addEventListener('keydown', onKeyDown); 


// Getting the key that was pressed
const onKeyDown1 = (e) => {
    // Key
    // - console.log(e.key);
    // Test for a certain key
    if(e.key === 'Enter') {
        alert('You Pressed Enter')
    }


    // keyCode (gives an actual #)
    // Resource: https://www.toptal.com/developers/keycode/table-of-all-keycodes
    // Check for Enter
    if(e.keycode === 13) {
        alert('You pressed 13')
    }


    // Code
    // - console.log(e.code);
    if(e.code === 'Digit1') {
        console.log('Wait Please');
    }


    // Repeat property (used on keyDown)
    if (e.repeat) {
        console.log('You are holding down ' + e.key);
    }


    // when holding shift, control and atl keys
    console.log('Shift: ' + e.shiftKey);            // False if not shifted and true if shifted
    console.log('Control: ' + e.ctrlKey);            // False if ctrl not selected and true if it is
    console.log('Alt: ' + e.altKey);                 // False if alt not selected and true if it is


    
};

itemInput.addEventListener('keydown', onKeyDown1); 