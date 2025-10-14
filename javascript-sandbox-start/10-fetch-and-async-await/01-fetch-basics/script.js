// Fetch API is a modern JavaScript interface for making HTTP requests to servers. It provides a cleaner and more powerful alternative to the older XMLHttpRequest object
// Fetch API returns a promise
// https://www.javascripttutorial.net/web-apis/javascript-fetch-api/


// Standard Promise syntax
fetch('./movies.json').then();                  // '.then' is needed since 'fetch' returns a promise


// Cont'd
fetch('./movies.json')
// response object is the 1st response we receive with the 'fetch' api
.then(response => {
    console.log(response);                      // Provides information on the response itself in the console
});



// Cont'd pt 3(We want the data from the api)
fetch('./movies.json')
// response object is the 1st response we receive with the 'fetch' api
.then(response => {
    // Get the Data with the return method here
    return response.json();                      
})
// What we receive from the 1st '.then' is what we get as the next '.then' argument
.then(data => {
    console.log(data);                          // Here we show the movies from the api
})


// Simplified Fetching a JSON File 
fetch('./movies.json')
    .then(response => response.json())          // response object is the 1st response we receive with the 'fetch' api
    .then(data => console.log(data));           // Here we show the movies from the api > // What we receive from the 1st '.then' is what we get as the next '.then' argument



// Fethching a text file
fetch('./text.txt')
    .then(response => response.text())          // Fetches the text 
    .then(data => console.log(data));           // Console logs the text




// Fetching from an api
fetch('https://api.github.com/users/menifeem/repos')
    .then(response => response.json())          
    //.then(data => console.log(data))
    .then(x => document.querySelector('h1').textContent = x.login);     // Selecting the 'h1' for text content and selecting the data