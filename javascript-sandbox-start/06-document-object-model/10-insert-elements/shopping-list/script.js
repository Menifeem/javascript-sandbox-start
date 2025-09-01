// insertAdjacentElement Example (Before the filter Items input)
function insertElement() {
  const filter = document.querySelector('.filter');

  // Creating new element
  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  // Insert Element
  filter.insertAdjacentElement('beforebegin', h1);          // Take in 2 things > first the position > 2nd is the element we want to insert
}

// insertAdjacentText Example(We choosing the first list item element for location)
function insertText() {
  const item = document.querySelector('li');

  item.insertAdjacentText('afterend', 'insertAdjacentText');  // Takes in the position first and then the text we want
}

// insertAdjacentHTML example (We are choosing to display next to the clear btn)
function insertHTML() {
  const clearBtn = document.querySelector('#clear');          // selecting the id of 'clear'

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');    // Position before clear button and add 'insertAdjacentHTML'
}

// insertBefore Example(Similar to append child > 1st grab the parent > choose item inside of the parent)
function insertBeforeItem() {
  const ul = document.querySelector('ul');                  // Grab the parent 'ul' of the list items 'li'

  const li = document.createElement('li');                  // Create the 'li' element
  li.textContent = 'insertBefore';                          // adding text to the 'li'


  // Selecting the item inside the parent(ul) of where we want to insert before (within the li's)
  const thirdItem = document.querySelector('li:nth-child(3)');    // Variable set to the 3rd list item(li)

  // Insert li before 3rd item but we have to call it on the parent(ul)
  ul.insertBefore(li, thirdItem);                           // insert before > take in my element (li) and reference (thirdItem)


}


insertElement();                                          // 'insertAdjacentElement' listed above 'Filter Items'
insertText();                                             // 'insertAdjacentElement' listed after 'Apples'
insertHTML();                                             // 'insertAdjacentElement' listed before 'Clear All'
insertBeforeItem();                                       // 'insertAdjacentElement' listed before 'Oreos'

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
