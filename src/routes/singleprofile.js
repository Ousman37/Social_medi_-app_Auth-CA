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
            document.getElementById('single-img').src = data.avatar;
            document.getElementById('followers').innerHTML = data._count.followers;
            document.getElementById('following').innerHTML = data._count.following;
        }
    });
};

profileGet();
