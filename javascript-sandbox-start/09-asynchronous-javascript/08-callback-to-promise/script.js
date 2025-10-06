// Created a 'posts' array
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];


// Function that runs 2 secs after the page loads
function createPost(post, cb) {                 // function takes in a callback('cb')
  setTimeout(() => {
    posts.push(post);
    cb();                                       // this runs the callback after we call the post in the line above
  }, 2000);
}


// Function to get the posts above and then it runs in 2 sec
function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}


// Ran 'createPost' > adding the 3rd one > 'getPosts' adds it to the page
createPost({ title: 'Post Three', body: 'This is post' }, getPosts);






// EX - Change 'createPost' to use a promise instead of a callback

// Created a 'posts' array
const posts1 = [
  { title: 'Post Four', body: 'This is post four' },
  { title: 'Post Five', body: 'This is post five' },
];


// Function that runs 2 secs after the page loads
// function createPost1(post) {                 // function takes in a callback('cb')

//   // Wrapping everything in a promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     posts1.push(post);
//     resolve();                                       // this runs 'resolve'
//   }, 2000);
//   });
  
// }



// Mimicking an error
function createPost1(post) {                 // function takes in a callback('cb')

  // Wrapping everything in a promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;

      if(!error) {
        posts1.push(post);
        resolve();
      } else {
        reject('Error Error Error')
      }                                     
  }, 2000);
  });
  
}




// Function to get the posts above and then it runs in 2 sec
function getPosts1() {
  setTimeout(() => {
    posts1.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 1000);
}


// adding function for error
function showError(error) {
  // Show what we want here on the page
  const h3 = document.createElement('h3');                      // create element titled 'h3'
  h3.innerHTML = `<strong>${error}</strong>`;
  document.getElementById('posts').appendChild(h3);             // adding to the DOM
}


// Ran 'createPost' > adding the 6th one > 'getPosts' is used after '.then' when using promise abovee
createPost1({ title: 'Post Six', body: 'This is post six' }).then(getPosts1);


// Catch an error we use .catch
createPost1({ title: 'Post Six', body: 'This is post six' })
.then(getPosts1)          // '.then' handles a promise
.catch(showError);        // '.catch' handles a error > & here we are adding a named function