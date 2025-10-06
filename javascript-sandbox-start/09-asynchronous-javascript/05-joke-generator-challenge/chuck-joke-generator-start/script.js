// MY ATTEMPT
 

// const formBtn = document.querySelector('button');
// const joke = document.querySelector('joke');



// const jokeRequest = new XMLHttpRequest();

// // making a request
// jokeRequest.open('GET', 'https://api.chucknorris.io/jokes/random');

// jokeRequest.onreadystatechange = function () {
//     if(this.readyState === 4 && this.status === 200) {
//         console.log(JSON.parse(this.responseText));


//         const jokeInfo = JSON.parse(this.responseText);

//         jokeInfo.forEach(listing => {
//             const li = document.createElement('div');
//             li.innerHTML = `<div id="joke" class="joke">${listing.name}</div>`
//         })
//     } 
// };

// jokeRequest.send();
// formBtn.addEventListener('click', jokeRequest);



// // jokeRequest.onreadystatechange = function


// // function newJokeItem () {}

// // formBtn.addEventListener('click', newJokeItem); 



// Answer
const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

// Start the function
const generateJoke = () => {
    

    // Make a request 
    const xhr = new XMLHttpRequest();

    // Call open
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');


    // Use onReadyStateChange event
    xhr.onreadystatechange = function () {
        if(this.readyState === 4) {
            
            // creating an nested if for the status
            if(this.status === 200) {
                
                // Focusing on the value within the api (First need to parse it since it is in an array)
                jokeEL.innerHTML = JSON.parse(this.responseText).value           // Response text will focus on the object itself

                
                // If not 200 we will have an else to say what went wrong
            } else{
                jokeEL.innerHTML = 'No More Jokes today!'
            }
        }
    }

    xhr.send();
}

// Event listener
jokeBtn.addEventListener('click', generateJoke);

// Adding an event for when the DOM loads (when content loaded it called the function)
document.addEventListener('DOMContentLoaded', generateJoke);        // When loading the page it automatically called the function
