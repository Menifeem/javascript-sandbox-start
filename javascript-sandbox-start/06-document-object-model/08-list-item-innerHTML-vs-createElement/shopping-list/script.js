// Quick & Dirty
function createListItem(item) {
    const li = document.createElement('li');                // We created an li element node

    // we set the innerHTML for the li to be the button information below
    li.innerHTML = `${item}                                 
    <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;


    document.querySelector('.items').appendChild(li);       // We appended the li node here
}

createListItem('Eggs');


// Clean & Performant
function createNewIteam(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');        // We create the button and attach the classname
    button.className = 'remove-item btn-link text-red';


    const icon = document.createElement('li');              // We added the icon and attached the classname 'x'
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);                               // We added the icon to the button
    li.appendChild(button);                                 // We added the button to the li 


    // console.log(li.innerHTML);
    document.querySelector('.items').appendChild(li);
}



createNewIteam('Cheese');