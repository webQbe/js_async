/* // Callbacks

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


// Now it waits all seconds and displays all posts */

/* // Promises

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts(){

    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000); 

}


function createPost(post){

    // instead of passing callback return a promise
    // promise calls resolve to resolve a promise successfully
    // promise calls reject when there is an error

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            posts.push(post);

            // error checking 
            const error = false;

            if(!error) {

                // if no errors
                resolve();

            } else {

                // if errors exist
                reject('Error: Something went wrong!');

            }

        }, 2000);
    })
   
}


createPost({ title: 'Post Three', body: 'This is post three' })
.then(getPosts) // similar to callback function
.catch(err => console.log(err)); // error handling */

/* // Promise.all

const promise1 = Promise.resolve('Hello World!'); // without reject
const promise2 = 10; // variable
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye!'));

// fetch data
// then call function
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Take all variables
// then display values from each variable
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values)); */


// Async / Await

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); 

}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!');
            }
        }, 2000);
    })
   
}


async function init(){

    // wait for asynchronous process to complete
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();

}

// call function
init();


// Async / Await with fetch()
async function fetchUsers(){

    // wait for fetch() to complete
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // wait for json() to complete
    const data = await res.json();

    // log data
    console.log(data);

}

// call function
fetchUsers();

// .then() or .catch() not used with  Async / Await 