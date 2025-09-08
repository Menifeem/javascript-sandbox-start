// Here we are adding events to multiple elements

// Example 1 - We are focusing on the list items here(Adding an event listener to each one)
const listItems = document.querySelectorAll('li');

// For Each Item
listItems.forEach(item => {
    //add event listener
    item.addEventListener('click', (e) => {
        console.log(e.target);                      // Results in displaying the any of the list items that I am selecting
        
        // Taking the target(line 10) and remove whatever I am clicking on 
        e.target.remove();
    });
    
});



// (most preferred method) Example 2 - Use of Event Delegation to add a single event listener onto the parent and then target whatever we want to delete
// First select the parent
const list = document.querySelector('ul');

// Put the event listener on the parent
list.addEventListener('click', (e) => {
    console.log(e.target);

    // Target the list item that we are selecting with 'e.target...'
    if(e.target.tagName === 'LI') {                 // If the event.target.tagName = LI
        e.target.remove();
    }
})


// Cont'd but using mouse hover
list.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'LI') {                 // If the event.target.tagName = LI
        e.target.style.backgroundColor = 'blue';
        e.target.style.color = 'orange';
    }
})