//A callback function is a function that is passed as an argument to another function and executed later.

// https://www.geeksforgeeks.org/javascript/javascript-callbacks/



function toggle(e) {
  console.log('callback ran');
  e.target.classList.toggle('danger');        // 'classList' targets a class > 'danger' is the color from CSS code
}

document.querySelector('button').addEventListener('click', toggle);




// EX 
// > First creating an array of posts
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
];

// simulating we are fetching data from a server
function getPosts () {
  // wrap it in a 'setTimeout' > takes times with a server network request so setTimeout is helpful
  setTimeout(() => {
    // Get the posts
    posts.forEach(function (post) {                                     // forEach post we grab the following function < forEach post
      // Add to the DOM
      const div = document.createElement('div');                        // Creating a div element
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;  // set the div html to the following 
      document.querySelector('#posts').appendChild(div);                // Select the id of 'posts' and add
    })
  }, 1000);
}


// call the function
getPosts();






// Ex2 - Create a function to create a new post
// > When creating a post we are reaching out to a server, making a post/http request and sending data to add to post
function createPost(post) {
  setTimeout(() => {
    // Add post (push post > get the array and push)
    posts.push(post);
  }, 2000);
};

// Creating a post
createPost({title: 'Post Three', body: 'This is post three'})






// Ex2 will not display the new 'Post Three' due to we will not know how long it will take with the server so it will not run. This alternative is using a call back function by using 'getPost' a callback for 'createPost'
// What should happen
function createPost1(post, cb) {                              // Passing in posts array and cb function
  setTimeout(() => {
    // Add post (push post > get the array and push)
    posts.push(post);
    // Execute the 'cb' function after the post has been created here > doesnt call 'getPosts' until after it has been added here
    cb();
  }, 2000);
};

// Creating a post / Passing in 'getPosts' as a callback to 'createPost1'
createPost1({title: 'Post Four', body: 'This is post four'}, getPosts);        