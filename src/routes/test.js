/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// listen for the "submit" event on the form
document
    .getElementById('editForm')
    .addEventListener('submit', function (event) {
    // prevent the form from being submitted
        event.preventDefault();
        fetchGet(`${getSinglePostUrl}/${id}`).then(response => {
            console.log(response);

            if (response.errors) {
                document.getElementById(
                    'flash'
                ).innerHTML = `<span style="color:tomato">${response.errors[0].message}</span>`;
            } else {
                // get the values of the input fields
                // eslint-disable-next-line no-unused-vars
                var title = document.getElementById('title').value;
                var body = document.getElementById('body').value;
                var tags = document.getElementById('tags').value;
                var media = document.getElementById('media').value;
            }
        });

        // check if the input values are valid
        if (
            title.length === 0 ||
      body.length === 0 ||
      tags.length === 0 ||
      media.length === 0 
        ) {
            // show an error message if the input is invalid
            document.getElementById('flash').innerHTML = 'Please fill in all fields';
        } else {
            // submit the form if the input is valid
            document.getElementById('editForm').submit();
        }
    });
