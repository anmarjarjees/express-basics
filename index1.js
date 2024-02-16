/*
Since we modified our JSON file to use modules,

So instead of using the "CommonJS" way to require modules like this:
const express = require('express');

OR another example:
const bodyParser = require('body-parser')

We will use the ES6 syntax "ES Module" to import the needed packages like this:

import bodyParser from 'body-parser'

so in our case, the ES6 syntax to import "express" will be:

NOTE: 
We used "Mockaroo.com" to help us generate a mock data in JSON format quickly :-)
*/
// First: import "express"
import express from "express";
// importing the json file to our index1.js:
// I have added { type: 'json' }
// Link: https://nodejs.org/api/esm.html#import-assertions
import data from './data/mock-data.json' assert { type: 'json' };

// Like with flask python framework nad nodeJS, define app object:
const app = express(); // could any other name you like

/*
We might need to use or run the application in different places, so it's good to save it into a variable
We can name it "port" or "PORT" in capital by convention
*/
const PORT = 3000; // defining the port number to be 3000 as a convention based on Express Docs

// This line is boilerplate code from Express docs to run our server:
// using the method listen() of "app" object that takes two parameters:
// 1- Port Number
// 2- A function (Using Anonymous Arrow Function)
app.listen(PORT, () => {
  // Notice that console.log() will output the data on the server side as we are using node.js
  // It's not like console.log() for outputting the data on the console window of the browser
  // In the next sections, we will need to transfer the data from the server to the client's browser
  /*
    Also, we cannot use the alert() function 
    as it is a method that belongs to browser "window" object 
    It is not part of JavaScript node.js 
  */
  console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);

  // outputting the data (JSON File):
  console.log(data);
  console.log("\nDone!");
});
// To run this file (ReadMe content) => npm start index1
// You will see this error in the browser => Cannot GET /
// There is no HTTP message (using HTTP method) that was sent to the server
// Will be solved in the next file
// To break the running server => CTRL + C
/* 
Warning: 
To load an ES module, 
set "type": "module" in the package.json 
or use the .mjs extension.
*/