// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    const title = document.getElementById('main-title');
    title.textContent = "You Changed the Text!";
});

// Modify CSS styles via JavaScript
document.getElementById('toggle-style-btn').addEventListener('click', function() {
    const content = document.getElementById('content');
    content.classList.toggle('highlight');
});

// Add or remove an element when a button is clicked
document.getElementById('add-element-btn').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.textContent = 'This is a new element added to the page.';
    
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(newElement);
});