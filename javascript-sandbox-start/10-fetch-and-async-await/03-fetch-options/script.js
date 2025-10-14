// Fetch API is a modern JavaScript interface for making HTTP requests to servers. It provides a cleaner and more powerful alternative to the older XMLHttpRequest object

// Options: 
// Method: Used for post, put or delete requests
// Header: to send and custom http headers that we want > https://developer.mozilla.org/en-US/docs/Web/API/Headers
// Body: have post request and then have the data come through the form and put to the bdy of the request >  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch



// Testing with an api > https://jsonplaceholder.typicode.com/

// EX: Make a post request, adding the options of the method, body & header
function createPost(post) {                                                 // taking in a post object
    fetch('https://jsonplaceholder.typicode.com/posts', {                   // Pass in an object of options 
        method: 'POST',                                                     // specify I want the method to be 'POST' > When using post, we are data to the server so we need to add the data to the body 
        body: JSON.stringify({                                              // since post is an object, here we will turn it into a string
            title: post.title,                                              // checking within the objects of the api to pull specific items
            body: post.body
        }),
        headers: {                                                          // Here we are grabbing the headers option/ in http we can send headers and grab the content type of the data we are sending
            'Content-Type': 'application/json',                             // When you add 'Content-Type': 'application/json' to the headers of your HTTP request, you are informing the server that the data you are sending is formatted as JSON. This is particularly important in methods like POST or PUT, where you are sending data to be processed by the server.
            hello: 'World',                                                 // Sending a header called 'Hello' & set to a string of 'World'
            token: 'abc123'                                                 // A token is sent in many cases > A token is sent in HTTP requests to authenticate the user and provide a means of identifying them to the server.
        }
    }).then(res => res.json())                                              // our response object and we return res.json
    .then(data => console.log(data));                                       // From the data that resulted we are console logging it
}


createPost({title: 'My Post', body: 'This is my post'});