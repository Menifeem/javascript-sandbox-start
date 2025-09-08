// Page loading Events (Focusing on the script tag in the head of the script file ('<script src="./script.js"></script>'))
window.onload = function() {                    // Since the script here was before the file we would receive and error. This allows the page to load first
    document.querySelector('h1').textContent = 'Hello World';
}

// Another path but with the use of 'addEventListener'
window.addEventListener('load', () => (document.querySelector('h1').textContent = 'Hello World'));
// Same with Console Log
window.addEventListener('load', () => console.log('Page Loaded'));



// Use of DomContentLoaded (This loads as soon as the DOM is parsed and loaded)
window.addEventListener('DOMContentLoaded', () => (document.querySelector('h1').textContent = 'Hello World'));
// Same with Console Log
window.addEventListener('DOMContentLoaded', () => console.log('DOM Loaded'));


// Console log on Global scope
console.log('Run Me');                  // This would be first since it doesnt have to wait for the script


// Defer Attribute (Defer added within the script itself)
document.querySelector('h1').innerText = 'Hello World';



// Resize
window.addEventListener('resize', () => {       // Here the header displays the innerHeight and innerWidth #'s in the header as the page is being resized
    document.querySelector('h1').innerText = `Resized to ${window.innerHeight} * ${window.innerWidth}`;
})


// Scroll Event
window.addEventListener('scroll', () => {       // Logs as user scrolls page
    console.log(`Scrolled: ${window.screenX} * ${window.scrollY}`);


    // Cont' with the focus of the navigation bar becoming translucent as I scroll
    if(window.scrollY > 70) {                   // When scrolling > 70 the color changes to orange and blue, when not, it remains white and black
        document.body.style.backgroundColor = 'Orange';
        document.body.style.color = 'blue';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
});



// Focus - Clicking in the window
window.addEventListener('focus', () => {        
    document.querySelectorAll('p').forEach(p => {       // Selecting all th eof the paragraph > for each paragraph
        p.style.color = 'blue';                         // Color changes to blue
    })
})


// Blur - Clicking out of the window
window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach(p => {
        p.style.color = 'yellow';
    })
})
