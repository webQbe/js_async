// Callbacks

// array of blog posts
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

// get posts from array and display on page
function getPosts(){

    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {

            // add each post to output
            output += `<li>${post.title}</li>`;

        });

        // add output to page
        document.body.innerHTML = output;

    }, 1000); // wait 1 second

}

getPosts();