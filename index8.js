/*
Before reading this file, please refer to the following file(s) and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
- index2.js
- index3.js
- index4.js
- index5.js
- index6.js
- index7.js
*/
import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;
/*
Practicing "Debugging in Express"
nothing new in this code, it's about running the DEBUG CLI command
Refer to my article "Debugging Express" in README.md file
*/

// URL => http://localhost:3000/users
app.get("/users", (req, res) => {
    // using the response with the method .json() to get the JSON data:
    res.json(data);
});

// http://localhost:3000/workers/12
app.get("/workers/:id/", (req, res) => {
    // using JS Number() to convert the text value to number
    const workerId = Number(req.params.id);
    const worker = data.filter((element) => element.id === workerId);
    res.send(worker); // the same result/output as above
});

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});