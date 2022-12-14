/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/src'));
app.use('/update/:id', express.static(__dirname + '/src')); 
app.use('/single-post/:id', express.static(__dirname + '/src')); 
app.use('/single-profile/:name', express.static(__dirname + '/src'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'posts.html'));
});

app.get('/single-post/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'single-post.html'));
});

app.get('/create-post', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'create-post.html'));
});

app.get('/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'update.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'register.html'));
});

// profile
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname,'src', 'profile.html'));
});

app.get('/single-profile/:name', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'single-profile.html'));
}
);

app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', '404.html'));
});

app.listen(8000, () => {
    console.log('Backend server is running at port 8000!');
});

