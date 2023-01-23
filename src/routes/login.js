import { loginUrl } from './url.js';

const loadingElement = document.getElementById('loading');

function showLoading() {
    loadingElement.style.display = 'block';
}

function hideLoading() {
    loadingElement.style.display = 'none';
}

showLoading();

setTimeout(hideLoading, 5000);

async function validateForm(event) {
    event.preventDefault(); // prevent the form from being submitted

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userBody = {
        email,
        password,
    };

    const opts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userBody),
    };

    try {
        showLoading();
        const res = await fetch(loginUrl, opts);
        const resp = await res.json();

        if (resp.accessToken) {
            localStorage.setItem('token', resp.accessToken);
            window.location = '/';
        } else {
            document.getElementById('login-error').innerHTML = resp.errors[0].message;
        }
    } catch (error) {
        console.error(error);
    } finally {
        hideLoading();
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', validateForm);
