//  Create a function within other functions to fetch data rather than calling fetch from every function where we need it


// Calling the fetch data below from this function
async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');                                     // So anytime we need to get data from the API, we'll call this function and we'll pass in the endpoint
    
    results.forEach(movie => {
        const div = document.createElement('div');                                              // document dot create element, and we're creating a div
        div.classList.add('card');                                                              // div and we'll do class list, dot add and we're going to add the class of card

                                                                                                // what we're saying here is if there's a movie poster path, because if there's no no image, this will be null or false or something. But if it is there, we're going to show that image. If not, then we're going to we're going to show that flicks
        div.innerHTML = `<a href="movie-details.html?id=${movie.id}">                                     
            ${
                movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />` : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>`;

          //Adding to the Dom
          document.querySelector('#popular-movies').appendChild(div);
    });
    
}



// Display pPopular TV Shows
async function displayPopularShows() {
    const { results } = await fetchAPIData('tv/popular');                                     // So anytime we need to get data from the API, we'll call this function and we'll pass in the endpoint
    
    results.forEach(show => {
        const div = document.createElement('div');                                              // document dot create element, and we're creating a div
        div.classList.add('card');                                                              // div and we'll do class list, dot add and we're going to add the class of card

                                                                                                // what we're saying here is if there's a movie poster path, because if there's no no image, this will be null or false or something. But if it is there, we're going to show that image. If not, then we're going to we're going to show that flicks
        div.innerHTML = `<a href="tv-details.html?id=${show.id}">                                     
            ${
                show.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />` : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">Air Date: ${show.first_air_date}</small>
            </p>
          </div>`;

          //Adding to the Dom
          document.querySelector('#popular-movies').appendChild(div);
    });
    
}





// Display Movie Details Page
async function displayMovieDetails() {
    const movieId = window.location.search.split('=')                           // So what we can do is use the split method, which will turn it into an array and we can split it wherever we want   (2:08 on lesson 141)                             
    [1];

    // get the movie
    const movie = await fetchAPIData(`movie/${movieId}`);                       // GIves us the data for the 'movieId'


    // Overlay for Background image
    displayBackgroundImage('movie', movie.backdrop_path)                        // Creating function and passing 2 different types(Movies and shows) / grab the movie and attaching backdrop path

    const div = document.createElement('div');                                  // Creating an element (Creating a div)

    div.innerHTML = `<div class="details-top">
          <div>
            ${
                movie.poster_path                                               // lines 95-105 provides us with the movie cover 
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />` : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10                             // Set the rating focused around the movie
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
              ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}               // here is we can map through and create an array of list items and then turn that into a string with dot join  
            </ul>
            <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(movie.budget)}</li>
            <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(movie.revenue)}</li>
            <li><span class="text-secondary">Runtime:</span> ${movie.runtime} Minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies.map((company) => `<span>${company.name}</span>`).join('')};
          </div>
        </div>`;


        document.querySelector('#movie-details').appendChild('div');                    // Adding movie details to the DOM and then appending it as a child
}



// Display Show Details Page 
async function displayShowDetails() {
    const showId = window.location.search.split('=')                           // So what we can do is use the split method, which will turn it into an array and we can split it wherever we want   (2:08 on lesson 141)                             
    [1];

    // get the show
    const show = await fetchAPIData(`tv/${showId}`);                       // GIves us the data for the 'movieId'


    // Overlay for Background image
    displayBackgroundImage('tv', show.backdrop_path)                        // Creating function and passing 2 different types(Movies and shows) / grab the show data from line above and attaching backdrop path

    const div = document.createElement('div');                                  // Creating an element (Creating a div)

    div.innerHTML = `<div class="details-top">
          <div>
            ${
                show.poster_path                                               // lines 95-105 provides us with the show cover 
                ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />` : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
            }
          </div>
          <div>
            <h2>${show.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${show.vote_average.toFixed(1)} / 10                             // Set the rating focused around the movie
            </p>
            <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
            <p>
              ${show.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}               // here is we can map through and create an array of list items and then turn that into a string with dot join  
            </ul>
            <a href="${show.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes}</li>
            <li><span class="text-secondary">Last Episode to Air:</span> ${show.last_episode_to_air.name}</li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${show.production_companies.map((company) => `<span>${company.name}</span>`).join('')};
          </div>
        </div>`;


        document.querySelector('#show-details').appendChild('div');                    // Adding movie details to the DOM and then appending it as a child
}




// Display Backdrop On Details Pages
function displayBackgroundImage(type, backgroundPath) {                                 // take in the type and also the background path
    const overlayDiv = document.createElement('div');                                   // create our div, so I'm going to call this overlay div and set that to document dot create element and we're creating a div and then we just have a bunch of properties that we need to add.
    overlayDiv.style.backgroundImage = `url(https://image.tmbd.org/t/p/original/${backgroundPath})`;
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundPosition = 'center';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1';                                                     // Z index is negative one to be sure that it's behind the content.
    overlayDiv.style.opacity = '0.1';                                                   // opacity is set to 0.1 because we do want it to be obviously, we want it to be faded.

    // Checking the type if movie or show
    if (type === 'movie') {
        document.querySelector('#movie-details').appendChild(overlayDiv);               // if the type is equal to movie, then we're going to use document dot query selector and we want the ID of movie dash details and then we're going to append child and we're going to append the overlay Div
    } else {
        document.querySelector('#show-details').appendChild(overlayDiv);
    }

}



// Display Slider Movies
async function displaySlider() {                                                      // Made function async sine we are fetching from an API
  const { results } = await fetchAPIData('movie/now_playing');                        // destructure the results and we want to await on the fetch API data function and the endpoint that we're going to want to hit is going to be movie slash now playing

  results.forEach((movie) => {                                                       // loop through the results > for each of the results(in the array)
    const div = document.createElement('div');                                        // we create a new div
    div.classList.add('swiper-slide');                                                // add 'swiper-slide' class to the div being created

    // Adding the swiper class html to the div (Made id dynamic on line below)
    div.innerHTML = `                                                                 
            <a href="movie-details.html?id=${movie.id}">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
            </h4>
          `

    //Adding to the DOM
    document.querySelector('.swiper-wrapper').appendChild(div);                       // Selecting the wrapper and append the div 


    initSwiper();
  });
}




function initSwiper() {
  const swiper = new swiper('.swiper', {
    slidesPerView: 1,                                                                 // we're going to pass in the class the class of swiper. So that's the element to target. And then for the options, we can pass in an object and the options
    spaceBetween: 30,
    freeMode: true,                                                                   // means for the ability to click and drag yourself
    loop: true,                                                                       // ability to loop through and not stop as you are progressing
    autoplay: {
      delay: 4000,                                                                    // delay between slides (4 secs)
      disableOnInteraction: false,                                                    //  if you hover over it then it stops
    },
    breakpoints: {
      500: {                                                                          // 500 is the pixel size > 500 pixels and up, you know, if the width is 500 pixels and up, then we'll set it to two
        slidesPerView: 2
      },
      700: {                                                                          // 700 is the pixel size > set slides to view at 3
        slidesPerView: 3
      },
      1200: {                                                                          // 1200 is the pixel size > set slides to 4 per view
        slidesPerView: 4
      },
    }
  });

}






// Fetch Data from TMDB API
async function fetchAPIData(endpoint) {                                         // call function fetchAPIData' and take in an endpoint
    const API_KEY = '0ab3596a0ae9a57d68f84a72cdf0423c';                         // variable for api key > Note: this is not the path to go when in production
    const API_URL = 'https://api.themoviedb.org/3/';


    showSpinner();                                                              // Show spinnner is called here before making a request

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);            // first thing we want is the URL and then we want the endpoint > then we have to put a question mark with the API key as a query string and then oops. And then we want to set that to our API underscore key >>  language and set that to n dash us

    const data = await response.json();                                         // Here we are obtaining the data > we want to await on the promise we get from response dot JSON

    hideSpinner();                                                              // hide spinner called once the data is actually fetched before we return it

    return data;                                                                // returning that data

}



// Show Spinner
function showSpinner() {
    document.querySelector('.spinner').classList.add('show')                    //  div with the class of spinner and if we add the class of show, then it shows
}


// Hide Spinner
function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}




// Function for the commas within the budget/revenue amounts etc
function addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');             // this is the regular expression to, to basically count after every three zeros to add a comma
}




// Init App
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displaySlider();                                                  // this display slider, we only want to run on the home page, so we're going to go right to index.html
            displayPopularMovies();
            break;
        case '/shows.html':
            displayPopularShows;
            break;
        case '/movies-details.html':
            displayMovieDetails();
            break;
        case '/tc-details.html':
            displayShowDetails();
            break;
        case '/search.html':
            console.log('Search');
            break;
    }
}