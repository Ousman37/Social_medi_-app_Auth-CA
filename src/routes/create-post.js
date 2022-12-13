import { createPostUrl } from './url.js';
import { fetchPost } from './api.js';

// Add a submit event listener to the form
document.getElementById('form-create').addEventListener('submit', function (e) {
    // Prevent the form from being submitted
    e.preventDefault();

    // Get the input values
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
    var tags = document.getElementById('tags').value;
    var media = document.getElementById('media').value;
    let postData = {
        title: `${title}`,
        body: `${body}`,
        tags: [`${tags}`],
        media: `${media}`,
    };
    fetchPost(createPostUrl, postData).then(respData => {
        console.log(respData);
        if (respData) {
            document.getElementById('flash').innerHTML =
        '<span style="color:green;font-size:16px"> New Post Created Successfully!</span>';
        }
    });

    // Check if the title field is not empty and contains at least 4 characters
    if (title === '' || title.length < 4) {
    // Display an error message and return
        document.getElementById('flash').innerHTML =
      '<div class="alert alert-danger">Please enter a valid title with at least 4 characters.</div>';
        return;
    }

    // Check if the body field is not empty and contains at least 10 characters
    if (body === '' || body.length < 10) {
    // Display an error message and return
        document.getElementById('flash').innerHTML =
      '<div class="alert alert-danger">Please enter a valid body with at least 10 characters.</div>';
        return;
    }

    // Check if the tags field is not empty and contains at least 3 tags separated by commas
    if (tags === '' || tags.split(',').length < 3) {
    // Display an error message and return
        document.getElementById('flash').innerHTML =
      '<div class="alert alert-danger">Please enter at least 3 tags separated by commas.</div>';
        return;
    }

    // Check if the media field is a valid URL for an image
    if (!/.(jpeg|jpg|gif|png)$/i.test(media)) {
    // Display an error message and return
        document.getElementById('flash').innerHTML =
      '<div class="alert alert-danger">Please enter a valid image URL.</div>';
        return;
    }

    // If all checks pass, submit the form
    document.getElementById('form-create').submit();
});



