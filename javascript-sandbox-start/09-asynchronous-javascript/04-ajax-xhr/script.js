// All modern browsers have a built-in XMLHttpRequest object to request data from a server.
// AJAX - Ajax stands for Asynchronous Javascript And Xml. Ajax is just a means of loading data from the server and selectively updating parts of a web page without reloading the whole page.


// https://www.w3schools.com/xml/xml_http.asp
// https://www.tutorialrepublic.com/javascript-tutorial/javascript-ajax.php



// Goal is to fetch data from index/Movies files and display on page

// EX
// 1st initialize XML http request object
const xhr = new XMLHttpRequest();

// Calling open method first
xhr.open('GET', './movies.json');                                      // open xhr with the type of action 'GET' > fetching the data from the 'movies.JSON' file(Or can include a url if not a local file)


// Create and event handler for event
// OnReadyState values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
    console.log(this.readyState);                                       // access properties with 'this' keyword
}

xhr.send();



// EX Contd - Only want to do something when 'OnReadyState' value is = 4 (when event is finished)
// getting the reponse or status code
const xhr1 = new XMLHttpRequest();

xhr1.open('GET', './movies.json');  

xhr1.onreadystatechange = function () {
    console.log(this.status);                                       // 'status' is used to acquire the status code
    if(this.readyState === 4 && this.status === 200) {
        // JSON string and wrap it in 'Parse' to convert into an array
        console.log(JSON.parse(this.responseText));                 // 'this.responseText' used to get the data

        // put the data into a variable
        const data = JSON.parse(this.responseText);                 // Resulting to the movies in the data


        // Loop through (for each movie)
        data.forEach(movie => {
            // creating a list item and output it
            const li = document.createElement('li');
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;       // 'movie.title' > we pull the entire object with 'movie' & then we grab the title of the object

            // Select the UL sinc the 'li' has been created
            document.querySelector('#results').appendChild(li);                     // Pull the ul 'id' which equals 'results'
        });
    }
}


xhr1.send();





// Fetch Data from an api(Using my git hub repo as an example)
const xhr2 = new XMLHttpRequest();



xhr2.open('GET', 'https://api.github.com/users/menifeem/repos'); 



xhr2.onreadystatechange = function () {
    console.log(this.status);                                       // 'status' is used to acquire the status code
    if(this.readyState === 4 && this.status === 200) {
        // JSON string and wrap it in 'Parse' to convert into an array
        console.log(JSON.parse(this.responseText));                 // 'this.responseText' used to get the data

        // put the data into a variable
        const data = JSON.parse(this.responseText);                 // Resulting to the movies in the data


        // Loop through (for each movie)
        data.forEach(repo => {                                      // for each of my repos
            // creating a list item and output it
            const li = document.createElement('li');
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;       // 'repo.name' > and then we also grab the description of them

            // Select the UL sinc the 'li' has been created
            document.querySelector('#results').appendChild(li);                     // Pull the ul 'id' which equals 'results'
        });
    }
}


xhr2.send();