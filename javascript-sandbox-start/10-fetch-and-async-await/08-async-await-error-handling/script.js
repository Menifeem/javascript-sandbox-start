// Error handling in async/await causes a lot of confusion. There are numerous patterns for handling errors in async functions,


// https://thecodebarbarian.com/async-await-error-handling-in-javascript.html

// Ex 
const getUsers  = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');                         // Making a request to this api

        const data = await response.json();                                                                 // Now if I want to get the data, then I'll just say const data set that to await because this is a promise. Remember the response object has a JSON method to return the JSON data
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
};


getUsers();                                                                                                 // results in the 10 users from this api pulled




// Ex 2: Error handling with the fetch API if we hit a status like 404 or 500. > Catching with 'try-catch'
const getAccess  = async () => {
    try {
        const response = await fetch('https://tools-httpstatus.pickup-services.com/404');          
        
        if(!response.ok) {                                                                                  // if response is not ok then we throw the new error below
            throw new Error('Request Failed');                                                              // Now the code no longer runs the remaining lines under 'try' and instead goes directly to 'catch'
        }

        const data = await response.text();                                                                 // The api gives us a text file. So instead of JSON, I use '.text'                                                            
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
};

getAccess();




// Ex 3
const getPosts  = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');          
        
        if(!response.ok) {                                                                                  
            throw new Error('Request Failed');                                                              
        }

        const data = await response.json();                                                                                                                        
        console.log(data);

    
};

getPosts();



// Ex 4: Another way to catch an error (outside of 'try-catch')
const getPosts1  = async () => {
    const response = await fetch('https://tools-httpstatus.pickup-services.com/500');          
        
        if(!response.ok) {                                                                                  
            throw new Error('Request Failed');                                          // we throw the new error but below we were missing the '.catch' functionality so we add to the callback at the end                                                          
        }

        const data = await response.json();                                                                                                                        
        console.log(data);

    
};

getPosts1().catch(error => console.log(error));