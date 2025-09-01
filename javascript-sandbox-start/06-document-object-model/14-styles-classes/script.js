//Ex

// Bringing in the paragraph
const text = document.querySelector('p');

// Grab the item list
const itemList = document.querySelector('ul');

// Grabbing all the items (quesrySelectorAll on the itemList)
const allItems = itemList.querySelectorAll('li');


// Run function
function run() {
    // Class Name
    // - console.log(itemList.className);
    // Set the class Name (using the text variable that is focused on the paragraph)
    // - text.className = 'dark';
    // - text.className = 'card dark';               // 'card' is the existing class > always keep the existing and then add the new 'dark' so that it remains consistent



    // Better way with classlist objects
    // console.log(itemList.classList);            // we receive the DOM token list which is similar to an array

    // Looping through the Dom Token list that was presented from the 'classList'
    itemList.classList.forEach(c => console.log(c));


    // Adding a class
    // - text.classList.add('dark');

    // Remove a class
    // - text.classList.remove('card');

    // Toggle Class (Used in reference to dark/light switcher)
    // - text.classList.toggle('dark');


    // Toggle hidden class (here we are focused on the paragraph so that will be hidden)
    // - text.classList.toggle('hidden');

    // Replcae Class
    text.classList.replace('card', 'dark');                 // Here we are replacing card(initial) with dark(new)

    // Change the style (here wa want to change the line height)
    itemList.style.lineHeight = 5;

    // Change all list items(looping through with forEach)
    allItems.forEach((item, index) => {                        // for each item > i want the item and the index
        item.style.color = 'orange';

        // target specific items
        if(index === 2) {                               // If item # 3 (index #2) > we change the color to blue
            item.style.color = 'blue';
        }
    });

}


// click events 
document.querySelector('button').onclick = run;         // We are selecting the button > set it to an event called run(function above)