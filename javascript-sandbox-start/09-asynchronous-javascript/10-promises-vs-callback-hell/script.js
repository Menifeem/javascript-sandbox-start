function getData(endpoint) {
  // wrappng everything in a promise
  return new Promise((resolve, reject) => {
    
    // placing everything into the promise
    const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {

      if(this.status === 200) {
        
        // calling resolve to whatever the data is from (endpoint)
        resolve(JSON.parse(this.responseText));
      }else {
        reject('Something went wrong')
      }
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
  });
  
}



// To use the function to return a promise (call it)
getData('./movies.json').then((movies) => {               // getData and we pass in the targeted endpoint > then pass in the 'movies' and log it
  console.log(movies);
  return getData('./actors.json');                        // we return data from actors 
})   // We pass actors into the function to the log                         
.then((actors) => {
  console.log(actors);
  return getData('./directors.json');
  // return getData('./directors1.json');
})
.then((directors) => {
  console.log(directors);
})
.catch((error) => console.log(error));

