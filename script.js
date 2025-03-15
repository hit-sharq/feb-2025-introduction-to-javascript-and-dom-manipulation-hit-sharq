// JavaScript code to manipulate the DOM

const textElement = document.getElementById('text');
const changeTextButton = document.getElementById('changeTextButton');
const toggleElementButton = document.getElementById('toggleElementButton');
const newElement = document.getElementById('newElement');

// Function to change text content dynamically
changeTextButton.addEventListener('click', () => {
    textElement.textContent = "The text has been changed!";
    textElement.style.color = 'blue';
    textElement.style.fontSize = '20px';
    textElement.style.backgroundColor = 'lightgray';
    textElement.style.border = '1px solid black';
    textElement.style.cursor = 'pointer';
    textElement.addEventListener('click', () => {
        alert("You clicked on the text!");
    });
});

// Function to toggle the visibility of an element
toggleElementButton.addEventListener('click', () => {
    if (newElement.style.display === 'none') {
        newElement.style.display = 'block';
    } else {
        newElement.style.display = 'none';
        newElement.textContent = '';
        newElement.style.backgroundColor = '';
        newElement.style.border = '';
        newElement.style.fontSize = '';
        newElement.style.color = '';
    }
});

// Function to add a new element
function addElement() {
    const newElement = document.createElement('p');
    newElement.textContent = 'A new paragraph has been added!';
    document.body.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const elements = document.querySelectorAll('p');
    if (elements.length > 0) {
        elements[elements.length - 1].remove();
    }
}

// Event listeners for add and remove buttons
document.getElementById('addElementButton').addEventListener('click', addElement);
document.getElementById('removeElementButton').addEventListener('click', removeElement);
