/*
Before reading this file, please refer to the following file(s) and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
- index2.js
- index3.js
*/
import express from "express";
import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;

// URL => http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>ExpressJS App: The root</h1>');
});

/*
Route: Path and Method
path (which is the end point to access any page)=> /users
The method define the action to be taken at the end point => .get()
*/
app.get("/users", (req, res) => {
    // using the response with the method .json() to get the JSON data:
    res.json(data);
});

// GET HTTP method with Route Parameters:
/*
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
Link: https://expressjs.com/en/guide/routing.html

passing the id of 34

Notice that we are using a colon ":" to precede the route parameters
*/
// http://localhost:3000/users/34
app.get("/users/:userId", (req, res) => {
    // for testing console.log the parameters:
    console.log(req.params); // displayed in the terminal
    res.send("User ID: " + req.params.userId); // displayed in the browser
});
/*
Results:
- In browser => User ID:34
- In terminal => { userId: '34' }
*/

// another example: assuming we have data that represents Members
// Let's hard coding a memberId and memberAge for example:
// http://localhost:3000/members/28/age/47
app.get("/members/:memberId/age/:age", (req, res) => {
    // for testing console.log the parameters:
    console.log(req.params); // displayed in the terminal
    // Output: { memberId: '28', age: '47' }

    // we can assign the returned parameters values to variables:
    /*
    Notice that all the values will be a string data type,
    if you want to save them as numbers we need to convert them using
    - Number()
    - parseInt()
    - parseFloat()
    */
    const memberId = Number(req.params.memberId);
    const memberAge = Number(req.params.age);
    res.send(`Member ID: ${memberId} <br> Member Age: ${memberAge}`); // displayed in the browser
    /*
    Output:
    Member ID: 28
    Member Age: 47
    */
});

// Now let's use our JSON data file:
// Targeting our JSON file through the id property value
// http://localhost:3000/employees/12
app.get("/employees/:id", (req, res) => {
    // We need to convert the id returned value from string to number
    // as our json file has the id value as numeric value
    const empId = Number(req.params.id);
    // getting all the data from the JSON file:
    // Don't forget that we are importing the data from the JSON file above
    /*
    Using JS array method .filter() to filter the returned data based on the id
    The filter() method:
    - creates a new array filled with elements that pass a test provided by a function.
    - does not execute the function for empty elements.
    - method does not change the original array.

    filter( function )
    Link: https://www.w3schools.com/jsref/jsref_filter.asp
    */
    const employee = data.filter((employee) => {
        return employee.id === empId;
    });
    res.send(employee);
    // [{"id":12,"first_name":"Timmi","last_name":"Carnew","email":"tcarnewb@xrea.com","gender":"Female","job_title":"Technical Writer"}]
});

// let repeat the same code again with simple change inside the .filter() method:
// to differentiate between the two get methods, let's change the url to be workers instead of employees
// http://localhost:3000/workers/12
app.get("/workers/:id/", (req, res) => {
    const workerId = Number(req.params.id);
    /*
    Below, I used "element" just to show that we can use any temporary varaible name 
    to refer to each element inside the array that we need to filter.

    also notice that we ignored the { } for the arrow function and we skipped the keyword "return"
    it's a simplified version of using:
    
    (element) => {
        return element.id === workerId;
    }
    */
    const worker = data.filter((element) => element.id === workerId);
    res.send(worker); // the same result/output as above
});

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});