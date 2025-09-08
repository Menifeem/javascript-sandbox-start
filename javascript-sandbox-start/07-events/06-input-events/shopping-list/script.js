// The input event fires when the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action (such as typing in a textbox or checking a checkbox)

// https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event


// First bringing in the inputs
const itemInput = document.getElementById('item-input');            //
const priotityInput = document.getElementById('priority-input');    // The select list    
const checkbox = document.getElementById('checkbox');               // Checkbox
const heading = document.querySelector('h1');                       // Shopping list heading(can be used in case we want to output something)

// Now the item input
function onInput(e) {
    console.log('Input');
    console.log(e.target);                                        // 'target' allows us to see the value '<input> a......'
    // To get the value typed in (better to use)
    console.log(e.target.value);                                    // Tells us whatever is entered

    // Set the heading 
    heading.textContent = e.target.value;                           // changes the header to whatever is entered
}



// Checkbox ref (Focuses on the 'recurring item' checkbox)
function onChecked(e) {
    //console.log(e.target.checked);

    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';        // header changes to checked or not checked
}

itemInput.addEventListener('input', onInput);                     // event when entering('input' action) any key for the 'Enter Item' field  > we reference the function 
priotityInput.addEventListener('input', onInput);                   // here we take the 'priorityInput' value and reference to the function actions
priotityInput.addEventListener('change', onInput);                  // Can also use 'change' event as well for select lists
checkbox.addEventListener('input', onChecked);                      // addresses true or false if checkbox is selected



// Focus (clicking within an area) & blur (clicking outside of an area) > this is focused aroung the 'Enter Item' section
// often used for styling
function onFocus(e) {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'orange';

}

function onBlur(e) {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('focus', onFocus); 
itemInput.addEventListener('blur', onBlur); 
