// The Element.remove() method removes the element from its parent node. If it has no parent node, calling remove() does nothing

// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

// 2 methods: 'remove()' & 'removeChild()'
// 'remove()' is being alled on the element that we want to remove
// 'removeChild()' is being called on the parent element and pass in the item we want to remove



// 'remove()' Example 
function removeClearBtn() {
    document.querySelector('#clear').remove();      // Select the clear btn = id of '#clear' > announce to remove
}

removeClearBtn();

// Example same with a variable
// function removeClearBtn1() {
//     const clearBtn = document.querySelector('#clear');
//     clearBtn.remove();      // Select the clear btn = id of '#clear' > announce to remove
// }

// removeClearBtn1();



// 'removeChild()' Example
function removeFirstItem() {
    
    // Get the parent first('ul') since we are using 'removeChild()'
    const ul = document.querySelector('ul');

    // Select item we want to remove
    const li = document.querySelector('li');

    // Call on the parent to remove
    ul.removeChild(li)
}

removeFirstItem();


// Cont'd with remove child
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);           // referencing the child # and include the argument that allows us to change when we call it at the end


    ul.removeChild(li);
}

removeItem(1);                                          // Removed first item('Orange Juice')


// Cont'd
function removeItem1(itemNumber) {
    const li = document.querySelector('li:nth-child(2)');

    li.remove();
}


removeItem1();


// Cont'd with QuerySelectorAll
function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber];           // Using querySelectorAll for 'li's' and this gives an array-like structure(nodeList) and we can access th index'[itemNumber]'


    ul.removeChild(li);
}

//removeItem2();



// cont'd While using 'remove()'
function removeItem3(itemNumber) {
    // First we grab all of the list items > querySelectAll turns this into an array(nodeList)
    const li = document.querySelectorAll('li');
    
    // Take the 'li' > reference the array > direct to remove the addressed index
    li[itemNumber - 1].remove();
}

removeItem3(1);


// Cont'd shortened
const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

removeItem4();