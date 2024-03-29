/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const baseUrl = 'https://api.noroff.dev/api/v1';

//POST DATA
let postGet = async () => {
    let token = '';
    if (localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'));
        token = localStorage.getItem('token');

        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(`${baseUrl}/social/posts`, options);
        const data = await response.json();
        console.log('fetch Data', data);
        const postContainer = document.getElementById('container-card');
        let str = '';
        data.forEach(post => {
            let media;
            if (post.media) {
                media = post.media;
            } else {
                media = './images/mini_project3.png';
            }

            str += `<div class="container-item card" style="width:300px;height:auto">
      <span class="item-title" style='font-size:16px;word-wrap:break-word'>${post.title}</span>
      <img class="card-img-top" src="${media}" alt="Card image cap">
          
      <div class="card-body">
        <p class="card-text item-body" style="word-wrap:break-word">${post.body}
        </p>
      </div>
      <div> 
      <a href="/single-post/${post.id}">View This</a>
    <a href="/update/${post.id}">Update</a>
<a class="button" style="display: inline-block;
   background: #fff transparent;border: 1px solid red;color: red;font-weight: bold;
      font-size: 1.9rem;padding: 5px 8px;
  text-align: center;text-decoration: none;display:inline-block;
  font-size: 1.2rem;cursor: pointer;
  transition: all 0.3s linear;"  onclick="deletePost(${post.id})">Delete</a>
      </div>
    </div>`;
        });
        postContainer.innerHTML = str;
    } else {
        window.location = '/login';
    }
};

postGet();

//LOG OUT
document.getElementById('btn-logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location = '/login';
});


// User search the post content feed ====*//
document.getElementById('search_input').addEventListener('keyup', () => {
    let inpVal = document.getElementById('search_input').value.toUpperCase();
    const postContainer = document.getElementById('container-card');
    const itemArray = postContainer.getElementsByClassName('container-item');
    for (let i = 0; i < itemArray.length; i++) {
        let presentItem = itemArray[i];
        let presentTitle = presentItem
            .getElementsByClassName('item-title')[0]
            .innerText.toUpperCase();
        let presentBody = presentItem
            .getElementsByClassName('item-body')[0]
            .innerText.toUpperCase();
        if (
            presentBody.indexOf(inpVal) !== -1 ||
      presentTitle.indexOf(inpVal) !== -1
        ) {
            itemArray[i].style.display = 'block';
        } else {
            itemArray[i].style.display = 'none';
        }
    }
});
