import { loginUrl } from './url.js';

let loader = document.getElementById('loading');
function validateForm() {
  loader.classList.remove('display-none');
  // Form validation code goes here
    
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  let userBody = {
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
  let flashMessage = '';

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
