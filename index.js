/*
Since we modified our JSON file to use modules,
so instead of using this:
var express = require('express');
We can use this:
*/
import express from "express";

// Like with flask python framework nad nodeJS, define app object:
const app = express(); // could any other name you like

/*
We might need to use or run the application in different places, so it's good to save it into a variable
We can name it "port" or "PORT" in capital by convention
*/
const PORT = 3000; // defining the port number to be 3000 as a convention based on Express Docs


/*
Routing
Routing refers to how an application’s endpoints (URIs) respond to client requests. 

These routing methods, like .get() below, specify a callback function called 
when the application receives a request to the specified route (endpoint) and HTTP method. 
Link: https://expressjs.com/en/guide/routing.html

Two HTTP methods:
- .get()
- .post()
*/
// respond with "hello world" when a GET request is made to the homepage
// Using the root path with the symbol of '/' as the root for the first parameter
// anonymous arrow function with two parameters: req and res
// Notice that we can use or call a another function by its name but it's more practical and common way to use this:

// URL => http://localhost:3000/
app.get('/', (req, res) => {
    // sending the info to the user's browser
    // Passing HTML elements also:
    res.send('<h1>Hello world! the root</h1>');
});

// Another example:
// URL => http://localhost:3000/about
app.get('/about', (req, res) => {
    res.send('<h1>About Express</h1>');
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

// This line is boilerplate code from Express docs to run our server:
// using the method listen() of "app" object that takes two parameters:
// 1- Port Number
// 2- Anonymous Arrow Function
app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});

// To break the running server => CTRL + C