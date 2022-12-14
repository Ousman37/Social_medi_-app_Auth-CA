import { profileBaseUrl } from './url.js';
import { fetchGet } from './api.js';
let url = window.location.href;
var name = url.split('/')[4];
console.log('url', url, name);
//Single PROFILE DATA GETTING
let profileGet = async () => {
    fetchGet(`${profileBaseUrl}/${name}`).then(data => {
        console.log('data', data);
        if (data.errors) {
            document.getElementById(
                'flash'
            ).innerHTML = `<span style="color:tomato">${data.errors[0].message}</span>`;
        } else {
            document.getElementById('single-title').innerHTML = data.name;
            document.getElementById('round-img').src = data.avatar;
            document.getElementById('followers').innerHTML = data._count.followers;
            document.getElementById('following').innerHTML = data._count.following;
        }
    });
};

profileGet();

// Get references to the buttons
var followButton = document.getElementById('follow');
var unfollowButton = document.getElementById('unfollow');

// Handle click on the "Follow" button
followButton.addEventListener('click', function () {
    // Update the text on the button to indicate that the user is now following
    followButton.innerHTML = 'Following';

    // Disable the "Follow" button and enable the "Unfollow" button
    followButton.disabled = true;
    unfollowButton.disabled = false;
});

// Handle click on the "Unfollow" button
unfollowButton.addEventListener('click', function () {
    // Update the text on the button to indicate that the user is no longer following
    unfollowButton.innerHTML = 'Follow';

    // Disable the "Unfollow" button and enable the "Follow" button
    unfollowButton.disabled = true;
    followButton.disabled = false;
});
