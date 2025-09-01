// function createNewItem(item) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const button = document.createElement('button');
//   button.className = 'remove-item btn-link text-red';

//   const icon = document.createElement('i');
//   icon.className = 'fa-solid fa-xmark';

//   button.appendChild(icon);
//   li.appendChild(button);

//   document.querySelector('.items').appendChild(li);
// }

// createNewItem('Cheese');



function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  const icon = createIcon('fa-solid fa-xmark');

  // button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

// createNewItem('Cheese');


// Creating multiple functions so that it is reusable later if needed
function createButton(classes) {
   const button = document.createElement('button');
  button.className = classes;                 // set the btn classname to the classes that is passed in as an argument


  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);                   // Taking the icon 'x' and adding to the button
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItem('Cheese');