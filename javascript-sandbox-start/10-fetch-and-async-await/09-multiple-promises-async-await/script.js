// Focus is seeing multiple responses from async/await

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

// Doing the same as above but with async/await                             // We're just setting a variable of movies and we're getting it from movies '.JSON'.
async function getAllData() {
  const movies = await getData('./movies.json');    // Note: 'getData' grabs the data associated            // So what I'm going to do is just create a variable and call it movies. And I want to await on the getdata function that returns a promise. And I'm going to pass in here dot slash movies dot JSON
  

  const actors = await getData('./actors.json');                            // So what I'm going to do is just create a variable and call it actors. And I want to await on the getdata function that returns a promise. And I'm going to pass in here dot slash actors dot JSON
  

  const directors = await getData('./directors.json');                      // So what I'm going to do is just create a variable and call it directors. And I want to await on the getdata function that returns a promise. And I'm going to pass in here dot slash directors dot JSON
  
  console.log(movies, actors, directors);
}

getAllData();




//  fetch this data using async await with the fetch API
async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');                         // here we will receive a response when fetching
  const movies = await moviesRes.json();                                  // we'll create a variable called movies and that's going to have the data. So we need to await on the response of what I called it movie.

  const actorsRes = await fetch('./actors.json');                         // fetch the actors.json
  const actors = await actorsRes.json();                                  // Acquiring the actors data

  const directorsRes = await fetch('./directors.json');                   
  const directors = await directorsRes.json();  


  console.log(movies, actors, directors);
}


getAllDataWithFetch();





// Use 'promise.all' with async/await
async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] =await Promise.all([     // response object from these fetch requests in these variables > it was pulled out from the promise that lines 81-83 gave us
    fetch('./movies.json'),                                           // a promise with the response object??
    fetch('./actors.json'),
    fetch('./directors.json'),
  ])

  
  const movies = await moviesRes.json();                                    // const movies and set that to movies res dot JSON to get the data > 'await' is needed to get the data > without it then we acquire the promise
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();


  console.log(movies, actors, directors);
}

getAllDataPromiseAll();