// The querySelector() method returns the first element that matches a CSS selector. To return all matches (not only the first), use the querySelectorAll() instead

// https://www.w3schools.com/jsref/met_document_queryselector.asp

// querySelectorAll()


const listItem = document.querySelectorAll('.item');            // Focusing on addressing all items within the list items
console.log(listItem);                                          // Results in 'NodeList(4) [li.item, li.item, li.item, li.item]' > in an array-like structure


// Get an individual item
console.log(listItem[1]);                                       // Gives me the 2nd element
console.log(listItem[1].innerText);                             // Results in 'Orange Juice'

// Change color
listItem.forEach(item => {                                      // For each 'item'
    item.style.backgroundColor = 'green';                       // Changed the background to green
    item.style.color = 'red';                                   // Changed the text of them to red
});


// Cont'd but accessing the index
listItem.forEach((item, index) => {                             // For each 'item' we look to the index
    item.style.backgroundColor = 'green';                       // Changed the background to green
    item.style.color = 'red';                                   // Changed the text of them to red


    if (index === 1) {                                          // if index to 1 (2nd item)
        item.remove();                                          // we remove item
    }


    // change text of the first to another text
    if (index === 0) {                                          // we needed to keep the delete button > we grabbed the list item details from elements and included here with the new name 'Google'
        item.innerHTML = `Google                                
        <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
    }
});



// Select with get element by class name(HTML Collection)
const listItem2 = document.getElementsByClassName('item');      // Getting element by classname and focused on the 'item'

console.log(listItem2);                                         // Results in 'HTMLCollection(3) [li.item, li.item, li.item]'
console.log(listItem2[1].innerText);                            // Grabbing an specific item 'Oreos'

// Cont'd with ForEach
// listItem2.forEach(item => {
//     console.log(item.innerText);                                // Result in error since 'listitem2' is an HTMLCollectiona and not an array
// });



// Cont'd with converting the HTML Collection into an array(array.from)
const listItemArr = Array.from(listItem2);                      // we make 'listItem2' into an array

listItemArr.forEach(item => {                                   // For Each item we display in the log
    console.log(item.innerText);
});



// Get Element by Tag Name
const listItem3 = document.getElementsByTagName('li');
console.log(listItem3);                                         // Error since it is an 'HTML Collection' > But we can access specific things
console.log(listItem3[2]);                                      // See all the details within the html that is related tot eh item
console.log(listItem3[2].innerText);                            // Results in 'Milk' for the specific text of the item




