// Create a function to get the To Dos

// variable for the url api
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';


// Create the get To Dos
const getTodos = () => {
    fetch(apiUrl + '?_limit=5')                                        // Fetching the apiUrl and adding a limit from the url
    .then(res => res.json())                                           // Gives us a promis and we stringify the data with '.json'
    .then(data => {                                                    // Take the data received from that
        data.forEach((todo) => addTodoToDom(todo));
    });
};


// Created a function adding items to the dom
const addTodoToDom = (todo) => {
    const div = document.createElement('div');                         // Creating a new div (focus is to take the new data and insert into the DOM)
            div.classList.add('todo');                                 // Adding a class of Todo for divs
            div.appendChild(document.createTextNode(todo.title));      // appending a text node(textNode will be the title of the Todos)
            div.setAttribute('data-id', todo.id);                      // setting an attribute for any of them that has an id (Custom way is to use 'data-id') > value will be the 'todo.id'

            if(todo.completed) {                                       // If the item in api was listed as completed
                div.classList.add('done');                             // take the div and add classlist to add the class of 'done'
            }

            document.getElementById('todo-list').appendChild(div);     // Adding to the dom > and appending to the div for each of the todos
};




// Todo Function
const createTodo = (e) => {
    e.preventDefault();                                                 // stops the default behavior

    // console.log(e.target.firstElementChild.value);                            // First element child allows us to look into the input > '.value' alloows us to see whatever is entered

    const newTodo = {
        title: e.target.firstElementChild.value,                                    // whatever is entered in the add todo field
        completed: false                                                            // whenever we add a new todo it is already listed as false
    }


    // Need to make a post request with the 'newTodo' in the body > Making a request to the server
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo) ,                                  // passing in the new todo object that will be passed into the body
        headers: {
            'Content-Type': 'application/JSON'
        }
    })
    .then(res => res.JSON)
    .then((data) => addTodoToDom(data)                                    // returned data which is the new object > addTodoToDom to be added for adding new data (After added to the server then here we are adding it to the DOM)
    )
};


//
const toggleCompleted = (e) => {
    if(e.target.classList.contains('todo')) {                               // Target for event delegation > if it has the class of todo
        e.target.classList.toggle('done');                                  // then we want to toggle to 'done'


        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));       // Send a request to update the Todo (targeting the id and if it is done or not)
    }
         
}


// Update Todo Function
const updateTodo = (id, completed) => {                                     // Taking in the 'id' & if it is completed
    fetch(`${apiUrl}/${id}`, {                                             // hitting the api url and the id
        method: 'PUT',                                                     // Set method to a put request
        body: JSON.stringify({completed}),                                  // the data we want to send from the completed value
        headers: {                                                      
        'Content-type': 'application/json'                                  // this is the type of content we want to send
    }                                       

    })
}



// Delete Todo
const deleteTodo = (e) => {
    if(e.target.classList.contains('todo')) {                               // Target for event delegation > if it has the class of todo
        const id = e.target.dataset.id;                                     // Want to get the id to pass into our request
        fetch(`${apiUrl}/${id}`, {                                          // make the delete request
            method: 'DELETE'                                                // Set method to a delete request
        }) 
        .then(res => res.json())
        .then(() => e.target.remove())                                      // we want to remove it from the DOM
    }
}


// Creating init (adding event listeners and firing off everything as the page loads)
const init = () => {

    document.addEventListener('DOMContentLoaded', getTodos);                            // event listenert and listen to the domcontentloaded and then run 'getTodos' function
    document.querySelector('#todo-form').addEventListener('submit', createTodo);        // select the 'todo'form' css > add event listener when user submits we run the 'createTodo' function
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted); 
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo); 



    getTodos();
}


init();