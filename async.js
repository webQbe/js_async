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


// Create new posts
function createPost(post, callback){

    setTimeout(() => {

        // insert new post to posts array
        posts.push(post);

        // add callback 
        // to call a function right after new post is pushed
        callback();

    }, 2000);// wait 2 seconds

}

// Create a post
// Call getPosts() as callback function
createPost(
    { title: 'Post Three', body: 'This is post three' }, 
    getPosts
);


// Now it waits all seconds and displays all posts