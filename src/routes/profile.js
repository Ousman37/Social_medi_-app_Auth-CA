// eslint-disable-next-line no-unused-vars
import { profileBaseUrl } from './url.js';

// eslint-disable-next-line no-unused-vars
const getAllProfile = async () => {
    let token = '';
    if (localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'));
        token = localStorage.getItem('token');

        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(profileBaseUrl, options);
        const data = await response.json();
        console.log('fetch Data', data);
        // eslint-disable-next-line no-unused-vars
        const postContainer = document.getElementById('container-card');
        let str = '';
        data.forEach(profile => {
            let media;
            if (profile.avatar) {
                media = profile.avatar;
            } else {
                media = './images/mini_project3.png';
            }

            str += `<div class="container-item card" style=" width:300px;height:auto">
       
      <img class="round-img" src="${media}" alt="Card image cap">
     
      <div>
      <a href="/single-profile/${profile.name}">View  My Profile</a>
      </div>
    </div>`;
        });

        document.getElementById('profile-container').innerHTML = str;
    } else {
        window.location = '/login';
    }
};

getAllProfile();
