// 1st Way - Listen on the window for an event
window.addEventListener('keydown', (e) => {         // checking for events when a key selected & call a function
    // Take the insert element and remove the dynamics(whatever # or key pre populated in script)
    const insert = document.getElementById('insert');

    // Taking insert and setting up innerHTML(pulled from script and pasted here)    
    insert.innerHTML = `
    <div class="key">
        ${e.key === ' ' ? 'Space' : e.key}                    
        <small>e.key</small>
    </div>

    <div class="key">
        ${e.keyCode}
        <small>e.keyCode</small>
    </div>

    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>`
});

window.addEventListener('keydown', showKeyCodes);




// 2nd Way 
function showKeyCodes(e) {
    const insert1 = document.getElementById('insert');

    // to avoid duplicating this clears prev entry to start the new one
    insert1.innerHTML = '';

    // Creating an object
    const keycodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };


    // Loop through the object with (For-in Loop) & creating a div for each ot the key events above
    for(let key in keycodes) {
        // First creating an element(div element)
        const div = document.createElement('div');

        // Add key class to it 
        div.className = 'key';

        // add a small element
        const small = document.createElement('small');

        // The text we want use in it
        const keyText = document.createTextNode(key);     

        // We want the text from the actual keycode
        const keyC = document.createTextNode(keycodes[key]);     // from the index from line 34 whatever is selected at the end it references this

        // Append the Textnodes to the element
        small.appendChild(keyText);     // 'small' text is found in the html texts above (lines 8-20)

        // put the actual value into the key
        div.appendChild(keyC);

        // Append small element into the div
        div.appendChild(small);


        // Add div to the DOM
        insert1.appendChild(div)





    }
}

window.addEventListener('keydown', showKeyCodes);




// First find item > if statement to display what was typed
// My initial attempts before the lesson started
// const c = document.getElementsByClassName('key');

// const key = (z) => {
//     if(z.key === 'keypress') {
//         document.getElementsByClassName('key');
//     }

// }

// function code(c) {
//     if(c.key === c) {
//         alert('You pressed ' + `${c}`)
//     }
// }

// code(c);
// console.log('e.key ' );
// key(d);