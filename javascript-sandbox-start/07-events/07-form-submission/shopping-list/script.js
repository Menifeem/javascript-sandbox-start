//  The submit () method submits the form (same as clicking the Submit button). Tip: Use the reset () method to reset the form.

// First we are getting the From from the script file
const form = document.getElementById('item-form');


function onSubmit(e) {
    e.preventDefault();                                     // this is used to continue to display what is submitted and not continue on in a rapid pace
    console.log('submit');


    // Get the values that are being submitted to the form(2 different ways: 'value'(target.value) and 'form data' object)
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if(item === '' || priority === '0') {           // if item or priority are not selected and/or '0' then we prompt the following alert
        alert('Please fill in all fields');
        return;
    }


}

form.addEventListener('submit', onSubmit);                  // add event listener to form and include a 'submit' event


// Using Form data object
function onSubmit2(e) {
    e.preventDefault();

    // initialize formData variable
    const formData = new FormData(form);                // Passing in our form from line 4

    // Here we want to use the 'getData' method
    const item = formData.get('item');              // When using 'fromData' make sure there is a name in the script
    const priority = formData.get('priority');  


    console.log(item, priority);                    // We see the entered items and the selected item(lines 13 & 14)


    // Get all entries using entry method
    const entries = formData.entries();
    console.log(entries);                           // Results in an interator and we will need to loop through it to find or attend to a specific

    for(let entry of entries) {
        console.log(entry);                         // Results in an array that gives me both the name and value > '['item', 'fdh']'
        // Access the specific value
        console.log(entry[1]);
    }
}

form.addEventListener('submit', onSubmit2); 