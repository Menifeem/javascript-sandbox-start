// To replace a DOM element in JavaScript, you can use the replaceChild() method or modern approaches like replaceWith()

// https://www.javascripttutorial.net/dom/manipulating/replace-a-dom-element/


// Creating a few functions to use / 'replaceWith()'
function replaceFirstItem() {
    // First we want to grab the item we want to replace
    const firstItem = document.querySelector('li:first-child');


    // Create New  element (Here we creating a list item)
    const li = document.createElement('li');                // creating a list item to replace the current list item('li')
    li.textContent = 'Auburn';


    // To replace('replaceWith()' method)
    firstItem.replaceWith(li);                              // take the first item and then replace with the new item('li') that we take in
}

replaceFirstItem();



// Using 'replaceChild()' method / in this particular scenario we learn about use of 'outerHTML'
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');       // We are setting variable for the 2nd list item

    // Attach secondItem to outer HTML(setting the outter tags('<li>'))
    secondItem.outerHTML = '<li>War Eagle</li>';
}

replaceSecondItem();



// Replacing all ListItems within the list with the For each loop and then change the outter HTML for each one
function allItems() {
    // First we get all of the list items
    const lis = document.querySelectorAll('li');

    // we use a forEach since prev ste returns a node list
    // lis.forEach((item, index) => {                  // taking all > forEach of them we also grab the 'item' & 'index'
    //     /// item.outerHTML = '<li>War Eagle</li>'       // For each item we set the outer HTML to 'War Eagle'
        
    //     // or using 'innerHTML' as another option > dont have to use the '<..>' tags
    //     /// item.innerHTML = 'Tigers'


    //     // Choosing a specific 'li' and adjusting it
    //     if(index === 1) {
    //         item.innerHTML = 'Second Item';
    //     } else {
    //         item.innerHTML = 'Tigers'

    //     }
        
    // });

    // Cont'd but shortening it up using Ternary instead of an 'IF'
    lis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Try Again</li>');                // Setting 'item.outerHTML' to a condition > if 'index' = 1 then 'Second Item' or else '
    

}

allItems();



// Another way is by use of the parentelement with 'replaceChild' method
// Want to replace the 'h1' with an 'h2' > first select the parent = 'header' > then the item we want to replace and replace with new item
function replaceChildHeading() {
    const header = document.querySelector('header');            // Selecting the 'header' element
    const h1 = document.querySelector('header h1');             // Selecting the 'h1' element


    // Create a new element
    const h2 = document.createElement('h2');
    h2.id = 'app-title';                                        // adding id > equals to 'app-title'
    h2.textContent = 'New Header';                              // This is the text we want to display


    // Header cont'd
    header.replaceChild(h2, h1);                                // Replace header 'h2' with the 'h1'

}

replaceChildHeading();                                          // 'New Header' as new header



