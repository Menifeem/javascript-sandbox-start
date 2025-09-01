// Challenge
// You may think that since there is an `insertBefore()` method, there is also an `insertAfter()`, but there isn't. In this challenge, I want you to create a custom `insertAfter()` function. If you don't want to do it as a challenge, that's fine, just follow along.

// My Code
function insertAfter() {
    const li = document.createElement('li');
    li.textContent = 'Insert Me After!';

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('li');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);


    const firstItem = document.querySelector('li:nth-child(1)');

    firstItem.insertAdjacentElement('afterend', li);
}


insertAfter();




// Answer
// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

// - We take the `existingEl` and get the parent with either the `parentElement` or `parentNode` property.
// We call `insertBefore()` on the parent and then pass in `newEl` and the element AFTER `existingEl`. We can get that with the `nextSibling` property