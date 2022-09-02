/*
Before reading this file, please refer to the following file(s) and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
- index2.js
- index3.js
- index4.js
- index5.js
*/
import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;

// URL => http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>ExpressJS App: The root</h1>');
});

app.get("/users", (req, res) => {
    // using the response with the method .json() to get the JSON data:
    res.json(data);
});

/*
.json(): 
Returns middleware that only parses json and only looks at requests 
where the "Content-Type" header matches the type option.
*/

// **********************************************************************************************
// NOTE: Please comment/uncomment either one from app.use() to test the both middleware functions
// **********************************************************************************************

// Below we are specifying our request to be in JSON object format:
// app.use(express.json());

// Below we are specifying our request to be in JSON url encoded format:
// we need to pass the parameter which is the object "{ extended: true }" to accept json object
app.use(express.urlencoded({ extended: true }));

// Using .post() for "Create/Add" with .json() and .urlencoded():
/*
Let's name our route (path) to be "prop" for properties 
as we are going to deal with JSON object properties and values
using Postman to test the .post() http method
*/
// URL: http://localhost:3000/prop
app.post("/prop", (req, res) => {
    console.log(req.body);
    // When using .json() => // { prop: 'Our JSON Object Property Value' }
    // When using .urlencoded() => // { prop: ' "Our JSON Object Property Value"' }
    res.send(req.body); // will be seen in Postman
});

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});