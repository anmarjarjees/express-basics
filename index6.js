/*
Before reading this file, please refer to the following file(s) and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
- index2.js
- index3.js
- index4.js
- index5.js
*/
import express from "express";

const app = express();

const PORT = 3000;

/*
Practicing the other 2 built-in Middleware Functions:
- express.json:
- express.urlencoded
The other built-in function "express.static" were explained in the previous file
*/

/*
.json() method: 
---------------
Returns middleware that only parses json and only looks at requests 
where the "Content-Type" header matches the type option.
*/

/*
******************************************
NOTE: 
Please comment/uncomment either one from:
- app.use(express.json()) 
- app.use(express.urlencoded()) 
to test/check the output of the both middleware functions
*******************************************
 */

// STEP#1: Specify the format with .use() method:
// Below we are specifying our request to be in JSON object format:
// app.use(express.json());

// Below we are specifying our request to be in JSON url encoded format:
// we need to pass an argument which is the object "{ extended: true }" to accept json object
app.use(express.urlencoded({ extended: true }));

// STEP#2: Using .post() for "Create/Add" with .json() or .urlencoded():
/*
Let's name our route (path) to be "prop" for properties 
as we are going to deal with JSON object properties and values
then using Postman to test the .post() HTTP method

Please be advised that to test the two built-in functions in Postman
there some setting to be changed,
refer to my article "Postman Settings for testing express.json and express.urlencoded"
in the README.md file
*/
// URL: http://localhost:3000/prop
app.post("/prop", (req, res) => {
    console.log(req.body);
    /*
    Consider the following 2 different output:
    > When using .json() => // { prop: 'Our JSON Object Property Value' }
    > When using .urlencoded() => // { prop: ' "Our JSON Object Property Value"' }
    */
    res.send(req.body); // will be seen in Postman
});

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});