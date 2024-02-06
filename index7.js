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
/*
Practicing "Handling Errors".
Refer to my article "Error Handling" in README.md file
*/
// URL => http://localhost:3000/
app.get('/', (req, res) => {
    // Throwing an error instead of sending anything:
    // Throw an error below:
    throw new Error();
    /*
    Express will display this message:
    Error at file:///YOUR_DRIVE:/Your/Full/File/Path/index7.js:Line-number:colum-number
    */
});

/*
Define error-handling middleware function:
Link: https://expressjs.com/en/guide/error-handling.html#error-handling 

NOTE:
Error-handling middleware function is written at the end of the file after all the other functions,
which immediately above the app.listen()

In the same way as other middleware functions, 
except error-handling functions have four arguments instead of three: (err, req, res, next).
Below is the same example from Express Docs:

The code below will override the default result of Express errors
with a better well-formatted form/message for the end-user (client),
while in the server side (with console.error) we can see the actual error message and details:
*/
app.use((err, req, res, next) => {
    /*
    For us (as programmers), 
    we need to console/print the stack trace error in the server side
    
    console log the error object "err" with its property "stack" 
    "stack": represent the stack trace of errors) as with "Java" and "C#":
    */
    console.error(err.stack);
    // Using .status() method and passing the status value of 500
    /*
    NOTE:
    The HTTP status code 500 is a generic error response. 
    It means that the server encountered an unexpected condition 
    that prevented it from fulfilling the request. 
    Ref Link: https://docs.apigee.com/api-platform/troubleshoot/runtime/500-internal-server-error-0#symptom
    */

    // then chaining with .send() method:
    res.status(500).send('Unpredicted Error!');
});

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});