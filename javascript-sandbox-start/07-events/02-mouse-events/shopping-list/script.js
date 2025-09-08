// Mouse events in JavaScript are triggered when a user interacts with a webpage using a pointing device like a mouse or trackpad.

// https://www.w3schools.com/jsref/obj_mouseevent.asp

// All events from this lesson revolves around the image
const logo = document.querySelector('img');


// const onClick = () => console.log('Click Event');

// Placing our event listeners(using for the bottom of the page)
const onClick = () => console.log('Click Event');
logo.addEventListener('click', onClick)

// Double click
const onDoubleClick = () => console.log('Double Click Event');
logo.addEventListener('dblclick', onDoubleClick);


// contd 
const sty = () => {
    document.body.style.backgroundColor = 'yellow';
}

logo.addEventListener('click', sty);


// contd with additional addtions
const sty1 = () => {
    if(document.body.style.backgroundColor !== 'yellow') {
        document.body.style.color = 'orange';
        document.body.style.padding = '50px';
    
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'purple';
    }
}

logo.addEventListener('dblclick', sty1);



// Right Click = 'contextmenu'
const onRightClick = () => console.log('right click Event');

logo.addEventListener('contextmenu', onRightClick);


// Mouse Down(Click and hold)
const onMouseDown = () => console.log('mouse down');
logo.addEventListener('mousedown', onMouseDown);



// Mouse up(releasing the hold)
const onMouseUp = () => console.log('mouse up');
logo.addEventListener('mouseup', onMouseUp);


// Wheel
const onMouseWheel = () => console.log('wheel');
logo.addEventListener('wheel', onMouseWheel);


// Hovering
const onMouseOver = () => console.log('mouse over');
logo.addEventListener('mouseover', onMouseOver);


// Leaving hovering
const onMouseOut = () => console.log('mouse out');
logo.addEventListener('mouseout', onMouseOut);


// Dragging (drag start)
const onDragStart = () => console.log('Drag Start');
logo.addEventListener('dragstart', onDragStart);



// Drag(counts the time mouse is dragging item)
const onDrag = () => console.log('Drag');
logo.addEventListener('drag', onDrag);



// Drag End (ending the drag sequence)
const onDragEnd = () => console.log('Drag End');
logo.addEventListener('dragend', onDragEnd);