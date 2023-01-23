/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// listen for the "submit" event on the form
document
    .getElementById('editForm')
    .addEventListener('submit', function (event) {
    // prevent the form from being submitted
        event.preventDefault();
        fetchGet(`${getSinglePostUrl}/${id}`).then(response => {
            console.log(response);

            if (response.errors) {
                document.getElementById(
                    'flash'
                ).innerHTML = `<span style="color:tomato">${response.errors[0].message}</span>`;
            } else {
                // get the values of the input fields
                // eslint-disable-next-line no-unused-vars
                var title = document.getElementById('title').value;
                var body = document.getElementById('body').value;
                var tags = document.getElementById('tags').value;
                var media = document.getElementById('media').value;
            }
        });

        // check if the input values are valid
        if (
            title.length === 0 ||
      body.length === 0 ||
      tags.length === 0 ||
      media.length === 0 
        ) {
            // show an error message if the input is invalid
            document.getElementById('flash').innerHTML = 'Please fill in all fields';
        } else {
            // submit the form if the input is valid
            document.getElementById('editForm').submit();
        }
    });


    


import { loginUrl } from './url.js';

const loader = document.getElementById('loading');

function validateForm() {
    //loader.classList.remove('display-none');
    // Form validation code goes here

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userBody = {
        email: `${email}`,
        password: `${password}`,
    };

    //POST /api/v1/social/auth/login
    const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userBody),
    };

    // eslint-disable-next-line no-unused-vars
    const flashMessage = '';

    fetch(loginUrl, opts)
        .then(res => res.json())
        .then(resp => {
            loader.classList.add('display-none');

            if (resp.accessToken) {
                localStorage.setItem('token', `${resp.accessToken}`);
                window.location = '/';
            } else {
                document.getElementById('login-error').innerHTML =
              resp.errors[0].message;
            }
        });

    console.log(validateForm);
    // Email validation
    const emailRegex = /^[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        return false;
    }

    // Password validation
    const passwordRegex =
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!passwordRegex.test(password.value)) {
        alert('Please enter a valid password');
        return false;
    }
    return true;
}

// let email = document.getElementById('email').value;
// let password = document.getElementById('password').value;

const form = document.getElementById('form');
form.addEventListener('submit', validateForm);
