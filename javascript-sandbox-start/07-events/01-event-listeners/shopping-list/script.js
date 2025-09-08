// Events in JavaScript are actions or occurrences that happen in the browser, often as a result of user interaction or system-generated triggers. They allow developers to make web pages interactive by responding to these actions.

// https://www.w3schools.com/js/js_events.asp


// select our element
const clrBtn = document.querySelector('#clear');            // found in script for 'button id' for 'Clear All' button 


// Older method
function onClear() {
    alert('Clear');
}

// Adding event listener to elements
// - clrBtn.onclick = function () {
// -     alert('Clear Items');                                   // Prompts message when selecting the 'clear all' button
// - }


// Most recommended way (add event listener method)
clrBtn.addEventListener('click', function() {               // Takes in 2 areguments > 1st is the type of event > 2nd is the callback function
    alert('Clear All Items');
})

// same with arrow function
clrBtn.addEventListener('click', () => alert('Clear All Items'));


// Passing in an existing function (line 11)
clrBtn.addEventListener('click', onClear);


// Remove event listener method (Use when removing an element from the DOM)
setTimeout(() => clrBtn.removeEventListener('click', onClear), 5000);           // setTimeout sets a time for the event to occur > addressing clrbtn > passing in the 'click' event with the referenced function 'onClear"



// Trigger event to have the script call it 
setTimeout(() => clrBtn.click(), 5000);                         // it is calling line 31 and addressing to click > 5 secs later we see the alert




// Clearing out all of the list items when selecting clr btn
function ulClear() {
    // Use a variable('itemList' if using multiple times > if not then remove variable)
    const itemList = document.querySelector('ul'); 
    
    
    
    
    
    // option 1 - quick way by setting the html to nothing
    // - itemList.innerHTML = '';   
    
    
    // option 2 - bringing in the actual list items
    // - const items = itemList.querySelectorAll('li');       // take the 'itemlist' = ul & we query all list items
    // - items.forEach((item) => item.remove());         // items in reference to the list items > for each 'item' then we do an removal for the item



    // Option 3 (use of while loop)
    while(itemList.firstChild) {                    // while itemlist we check if there is a first child (if there is a first child then that means there is a list item)
        itemList.removeChild(itemList.removeChild);     // Then we take the item list & use removeChild > Pass in the itemlist with firstchild
    }
}



