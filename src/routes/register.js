import { registerUrl } from './url.js';
import { fetchPost } from './api.js';
// Get all input fields in the form
const inputs = document.querySelectorAll('.form-signin input');

function validateForm() {
    // Loop through each input field
    inputs.forEach(input => {
    // Check if the input is required and has a pattern attribute
        if (input.required && input.pattern) {
            // Add a 'input' event listener to the input field
            // eslint-disable-next-line no-unused-vars
            input.addEventListener('input', function (e) {
                // Get the pattern and value of the input field
                const pattern = new RegExp(this.pattern);
                const value = this.value;
                let email = document.getElementById('email').value;
                let username = document.getElementById('username').value;
                let password = document.getElementById('password').value;
                let avatar = document.getElementById('avatar').value;
                let banner = document.getElementById('banner').value;
                //Destructuring
                let userBody = {
                    name: `${username}`,
                    email: `${email}`,
                    password: `${password}`,
                    avatar: `${avatar}`,
                    banner: `${banner}`,
                };
                // eslint-disable-next-line no-unused-vars
                fetchPost(registerUrl, userBody).then(response => {
                    console.log(response);
                    if (response.errors) {
                        document.getElementById(
                            'flash'
                        ).innerHTML = `<span style='color:red;'>${response.errors[0].message}</span>`;
                    } else {
                        document.getElementById('flash').innerHTML =
              '<span style=\'color:green;\'>You Have Successfully Registered.</span>';
                    }
                });

                // Check if the value matches the pattern
                if (pattern.test(value)) {
                    // If the value matches the pattern, remove any error messages
                    this.setCustomValidity('');
                } else {
                    // If the value does not match the pattern, display an error message
                    this.setCustomValidity('Invalid input');
                }
            });
        }
    });
}

const form = document.getElementById('register-form');
form.addEventListener('submit', validateForm);

// let registerPost = () => {};
// document
//   .getElementById('register-submit')
//   .addEventListener('click', registerPost);
