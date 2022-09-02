/*
Before reading this file, please refer to the following file(s) and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
- index2.js
- index3.js
- index4.js
- index5.js
- index6.js
*/
import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;

// URL => http://localhost:3000/
app.get('/', (req, res) => {
    // Commenting this line:
    // res.send('<h1>ExpressJS App: The root</h1>');
    // Throw an error below:
    throw new Error();
    /*
    Express will display this message:
    Error at file:///YOUR_DRIVE:/Your/Full/File/Path/index7.js:Line-number:colum-number
    */
});

/*
Define error-handling middleware functions
Link: https://expressjs.com/en/guide/error-handling.html#error-handling 
in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next).
Below is the same example from Express Docs:

The code below will override the default result of Express errors
with a better well-formatted form/message for the end-user (client),
while in the server side (with console.error) we can see the actual error message and details:
*/
app.use((err, req, res, next) => {
    // console log the error object "err" with its property "stack" (The stack trace of errors):
    console.error(err.stack);
    // Using .status() method and passing the status value of 500
    // then chaining with .send() method
    res.status(500).send('Something broke!');
});

app.get("/users", (req, res) => {
    // using the response with the method .json() to get the JSON data:
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});