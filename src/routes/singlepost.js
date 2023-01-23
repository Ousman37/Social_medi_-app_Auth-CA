import { getSinglePostUrl } from './url.js';
import { fetchGet } from './api.js';
let url = window.location.href;
var id = url.split('/')[4];
console.log(id);
//POST DATA
// eslint-disable-next-line no-unused-vars
let postGet = async () => {
    fetchGet(`${getSinglePostUrl}/${id}`).then(data => {
        console.log(data, 'data');
        if (data.errors) {
            document.getElementById(
                'flash'
            ).innerHTML = `<span style="color:tomato">${data.errors[0].message}</span>`;
        } else {
            let media;
            if (data.media) {
                media = data.media;
            } else {
                media = './images/mini_project3.png';
            }
            document.getElementById('single-title').innerText = data.title;
            document.getElementById('round-img').src = media;
            document.getElementById('single-body').innerText = data.body;
        }
    });
};

postGet();
