// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let valid = true;
        if (nameInput.value.trim() === '') {
            valid = false;
            alert('Name is required.');
        }
        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            valid = false;
            alert('Valid email is required.');
        }
        return valid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});