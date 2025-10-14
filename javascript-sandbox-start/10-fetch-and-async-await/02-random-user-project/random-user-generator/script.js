// Start by fetchning the data
function fetchUser() {
    showSpinner();                                      // Show spinner bfore we makd the request to fetch
    // fetch user 
    fetch('https://randomuser.me/api')
    .then((res) => res.json())                          // '.then' is used since fetch returns a promise > the 1st '.then' gives us the 'response' object
    .then((data) => {                                   // data is what has been returned from the prev line
        hideSpinner();                                  // Hide spinner when the data comes back
        displayUser(data.results[0]);                   // Pass the data into a nested function
    })
}


// Create displayUser function
function displayUser(user) {
    const userDisplay = document.querySelector('#user');            // Grab the user section within html > (Body class > Div id = user)


    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'pink';
    } else {
        document.body.style.backgroundColor = 'black';
    }


    // setting the user displayed information (Removed the hard coded info and used dynamic path '${}')
    userDisplay.innerHTML = `
    <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="${user.picture.large}"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}           
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city} ${user.location.state}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>
    `

}

// Show spinner
function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';                         // Select the spinner class and set the style to block
}


// Hide Spinner
function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';                         // Select the spinner class and set the style to none
}


// Bringing in the button
document.querySelector('#generate').addEventListener('click', fetchUser);              // id generate is found in html doc line 18


// Calling the function in the global scope
fetchUser();