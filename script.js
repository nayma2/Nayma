document.getElementById('submit-btn').addEventListener('click', function() {
    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate the form fields
    if (name && email && subject && message) {
        // Display a success message (you can replace this with actual form submission logic)
        alert(`Thank you, ${name}! Your message has been sent.\n\nSubject: ${subject}\nMessage: ${message}`);
        
        // Optionally, clear the input fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    } else {
        // Display an error message if any field is empty
        alert('Please fill in all fields.');
    }
});