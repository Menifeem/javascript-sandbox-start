// Checking for errors with the status codes


// Website api used to hit urls to get whatever type of response that we want
// https://tools-httpstatus.pickup-services.com/


// Http Status Codes
// https://restfulapi.net/http-status-codes/



// Ex: fetching the correct api
fetch('https://tools-httpstatus.pickup-services.com/200')               // Fethcing api
.then(res => {                                                          // we have the response (which is technically 200)
    return res;                                                         // We return the response
})
.then(() => {                                                           // then we console log 
    console.log('Success');
});



// Ex: '.catch' works with a network error
fetch('https://hello123.net')                                           // targeting an api that does not exist   
.then(res => {                                                          
    return res;                                                         
})
.then(() => {                                                           
    console.log('Success');
})
.catch(error => {                                                       // this is ran and console logged since it catches the error of a invalid api
    console.log('Error Found');
})




// Ex: Check for status error (ex: 404, 500...)
fetch('https://tools-httpstatus.pickup-services.com/404')               
.then(res => {
    // Different ways to check for status error
    console.log(res.status);                                            // Checking for status (resulted in '404')
    console.log(res.ok);                                                // Checking for ok (resulted in 'false') 
    console.log(res.statusText);                                        // Checking for statusText (resulted in 'Not Found')
    return res;                                                         
})
.then(() => {                                                           
    console.log('Success');
})
.catch(error => {
    console.log(error);
})


// Ex Cont'd: Check for status error (ex: 404, 500...) > Checking with 'Ok' value (Easiest way)
fetch('https://tools-httpstatus.pickup-services.com/404')               
.then(res => {
    if (!res.ok) {                                                      // If response is not ok
        throw new Error('Request Failed');                              // Throw in the new error
    }
    return res;                                                         
})
.then(() => {                                                           
    console.log('Success');
})
.catch(error => {
    console.log(error);
})




// Ex Cont'd: narrow it down in case it is a specific status code
fetch('https://tools-httpstatus.pickup-services.com/207')               
.then(res => {
    if (res.status === 404) {                                                      // If response status is = to 404
        throw new Error('Found 404');                                              // Throw in the new error msg
    } else if(res.status === 500) {                                                // Else if status = 500
        throw new Error('Servr Error 500')                                         // throw new error message
    } else if (res.status !== 200) {                                               // if status does not = 200
        throw new Error('Request 200 failed')                                      // throw new error
    }
    return res;                                                         
})
.then(() => {                                                           
    console.log('Success');
})
.catch(error => {
    console.log(error);
})