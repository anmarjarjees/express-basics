/*
Before reading this file, 
please refer to the following file(s) and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
*/
import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;
/*
Route - Routing
Routing refers to how an application's endpoints (URIs) respond to client requests. 
Route is consisted of;
- a path
- an HTTP request method

These routing methods, like .get() below, specify a callback function called 
when the application receives a request to the specified route (endpoint) and HTTP method. 
Link: https://expressjs.com/en/guide/routing.html

Each HTTP method takes two arguments:
- Path
- Handler/callback 
*/

// 1: Practising .get() HTTP method:
/*
Based on CRUD, we use .get() for "Read"
respond with "hello world" when a "GET" request is made to the homepage
1. Using the root path with the symbol of '/' as the root for the first parameter
2. The second parameter is the "Route Handler" which is a "callback function".
This "callback function "behaves like middleware to handle a request. 
You can provide multiple callback functions that behave like middleware to handle a request as we will see later.
Link: https://expressjs.com/en/guide/routing.html
This callback is usually written as an anonymous arrow function with two parameters:
- "req" for "request" 
- "res" for "response"
Notice that we can use or call a another function by its name but it's more practical and common way to use this:
*/

// URL => http://localhost:3000/
app.get('/', (req, res) => {
    // sending the info to the user's browser
    // Passing HTML elements also:
    // using .send() method of res (response)
    res.send('<h1>Hello world! the root</h1>');
    /*
    To recap (review the README.md):
   .send() is one of the res (for response) common methods
   it's used to send HTTP response
    */
});

/*
NOTE: The code above could be written using an anonymous function:
app.get('/', function(req, res) {
  res.send('Hello World!');
});
*/

// URL => http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('<h1>About Express</h1>');
});

// Another example with getting data from a JSON FILE
/*
NOTE: We need to use "Postman" to test "put", "post", "delete"
For practising, we are going to get the data from JSON file
To test it we can use the Postman and the browser
*/
// URL => http://localhost:3000/users
app.get("/users", (req, res) => {
    // using the response with the method ".json()"" to get the JSON data 
    // and send a JSON response to the route handler:
    res.json(data);
});

/*
2: Practising .post() HTTP method:
Based on the CRUD system, .post() is used for "Create"
Let's name our path => /create
*/
// URL => http://localhost:3000/create
app.post("/create", (req, res) => {
    res.send('Practising .post() HTTP method for "Create" using the rout "/create"');
});

/*
3: Practising .put() HTTP method:
Based on the CRUD system, .put() is used for "Update"
Let's name our path => /update
*/
// URL => http://localhost:3000/update
app.put("/update", (req, res) => {
    res.send('Practising .put() HTTP method for "Update" using the rout "/update"');
});

/*
4: Practising .delete() HTTP method:
Based on the CRUD system, .delete() is used for "Delete"
Let's name our path => /delete
*/
// URL => http://localhost:3000/delete
app.delete("/delete", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete" using the rout "/delete"');
});

/*
In all the examples above, we used a single handler (one callback) to handle the Route,
we can add more than one handler (callbacks) to handle the Route also but it a rare case,
Let's take just a quick look about how to add two handlers for example.

The routing methods can have more than one callback function as arguments. 
To add additional callbacks, we can add a third parameter use the function next()
With multiple callback functions, it is important to provide next as an argument to the callback function 
and then call next() within the body of the function to hand off control to the next callback.

NOTE:
Don't forget that .next() are used as a third argument of the callback function that could be any other name!
But to avoid the confusion, by convention it's named "next" 
*/

// GET Method with next()
// URL => http://localhost:3000/next 
app.get("/next", (req, res, next) => {
    // Don't forget, only one response can be sent to the client 
    // as response method terminates request - response cycle
    // this first res() code is ignored in order to jump to the next response()
    // res.send("...");
    console.log("Practising next() function as the first response (first route callback)!");
    /*
    Notice that the next() function below will invoke the next middleware function
    */
    next(); // adding the next() method to prepare for the next part (block of code):
}, // adding , then write the second callback which is the next one to be called:
    (req, res) => {
        // sending a message to the user
        res.send("Practising next() function as the second and last response (second route callback)!");
        console.log("Practising next() function as the second and last response (second route callback)!");
    }
);

// GET Method with downloading a file, let's name our Route to be "/file"
// URL => http://localhost:3000/file
app.get('/file', (req, res) => {
    /*
    Transfers the file at path as an "attachment". 
    Browsers will prompt the user for download
    Link: https://expressjs.com/en/4x/api.html#res.download
    */
    // the basic example 
    res.download('data/info.txt');
});

/*
Practicing .get() with response .redirect() method
let's name our route to be "/redirect"
*/
// URL => http://localhost:3000/redirect
app.get('/redirect', (req, res) => {
    /*
    Redirects to the URL derived from the specified path, 
    with specified status, 
    a positive integer that corresponds to an HTTP status code . 
    If not specified, status defaults to "302" "Found".
    Link: https://expressjs.com/en/4x/api.html#res.redirect
    */
    // res.redirect(); // undefined
    // res.redirect('http://localhost:3000/'); // Going to the root (home page)
    res.redirect('https://expressjs.com/'); // Going to another website
    /*
    As explained in README.md, redirect() method can have:
    - Relative link (within our application)
    - Absolute link (to another website)
    */
});

// URL => http://localhost:3000/status
app.get('/status', (req, res) => {
    /*
    Link: https://expressjs.com/en/4x/api.html#res.sendStatus
    */
    // the basic example 
    res.sendStatus(404); // Not Found

    /*
    HTTP response status codes:
    Link: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    */
    // res.sendStatus(403); // Forbidden
});


app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});