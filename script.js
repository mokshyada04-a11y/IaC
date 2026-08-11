// Get elements from the HTML page
const button = document.getElementById('myBtn');
const text = document.getElementById('text');

// Add an event listener to run code when clicked
button.addEventListener('click', function() {
    text.textContent = 'You clicked the button!';
    text.style.color = '#007bff';
});