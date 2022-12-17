/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function deletePost(id) {
    const baseUrl = 'https://api.noroff.dev/api/v1';
    const updAndDelPostUrl = `${baseUrl}/social/posts/${id}`;
    console.log(id);
    let token = '';
    if (localStorage.getItem('token')) {
        console.log(localStorage.getItem('token'));
        token = localStorage.getItem('token');

        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        fetch(updAndDelPostUrl, options)
            .then(response => response.json())
            .then(response => {
                if (response.errors) {
                    document.getElementById(
                        'flash'
                    ).innerHTML = `<span style="color:tomato">${response.errors[0].message}
                    <a style="color:#ffffff;background:red;padding:5px" href="/">X</a></span>`;
                } else {
                    document.getElementById('flash').innerHTML =
            '<span style="color:green">Post Deleted Successfully!</span>';
                    window.location.reload();
                }
            });
    }
}
