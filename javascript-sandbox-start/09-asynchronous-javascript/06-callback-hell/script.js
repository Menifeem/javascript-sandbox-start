// https://www.w3schools.com/js/js_callback.asp


//
function getData(endpoint, cb) {                // to see in the order that we requested it then we apply the callback to getData(cb)

    // creating an xhr object
    const xhr = new XMLHttpRequest();

    // open to a 'get' request to whatever endpoint that is passed in
    xhr.open('GET', endpoint);


    // Event handler for the 'onReadyStateChange'
    xhr.onreadystatechange = function () {

        // Check ready state & status
        if(this.readyState === 4 && this.status === 200) {
            
            // If prev is true then we are running the responseText through JSON.parse
            // console.log(JSON.parse(this.responseText));

            cb(JSON.parse(this.responseText));
        }
    }


    // We want to send it somewhere random to either of the other JSON files(movies, directors, actors) > while setting a timer
    setTimeout(() => {
        xhr.send();
    
    // Making the millisecs as random between 1-4 secs
    }, Math.floor(Math.random() * 3000) + 1000);        // Math.floor & round down Math.random(returns # between 0 & 1) since it is passed in > make it a whole # between 1000 - 4000(* 3000 - which gives me a # between 0 & 3000) > add 1000 to now give us between 1000 - 4000
}



// Call get data
// getData('./movies.json');
// getData('./actors.json');
// getData('./directors.json');

// Call get data but with the callback this time to see results in order as expected(Movies, actors and then directors)
// Created a function that takes in a callback
getData('./movies.json', (data) => {            // takes in the param 'data' and then console it
    console.log(data);

    // Get the actors
    getData('./actors.json', (data) => {
        console.log(data);

        // get the Directors
        getData('./directors.json', (data) => {
            console.log(data);
        })
    })

});
