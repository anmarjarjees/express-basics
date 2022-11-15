/*
Before reading this file, please refer to the following file(s)  and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
- index2.js
*/
import express from "express";
// not in use:
// import data from './data/mock-data.json' assert { type: 'json' };

const app = express();

const PORT = 3000;

// URL => http://localhost:3000/
app.get('/', (req, res) => {
    res.send('<h1>ExpressJS App: The root</h1>');
});

/*
With some complex applications, we might have several route that has the same path
but using different type of HTTP methods.

Look at the example below:
We have the same route path value of "/crud", just as an example,
but different HTTP method:
- Route "/crud" => .get() HTTP method
- Route "/crud" => .post() HTTP method
- Route "/crud" => .put() HTTP method
- Route "/crud" => .delete() HTTP method

all have same URL: http://localhost:3000/crud

If run it in the browser only the get method will be executed,
but with Postman we can practice the others also
*/

app.get('/crud', (req, res) => {
    res.send('Practising .get() HTTP method for "Read/Retrieve"');
});

app.post("/crud", (req, res) => {
    res.send('Practising .post() HTTP method for "Create"');
});

app.put("/crud", (req, res) => {
    res.send('Practising .put() HTTP method for "Update"');
});

app.delete("/crud", (req, res) => {
    res.send('Practising .delete() HTTP method for "Delete"');
});

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});

/*
Now instead of repeating the same route 4 times!
It's better to use Route Chaining.
You can create chainable route handlers for a route path by using app.route(). Because the path is specified at a single location, 
creating modular routes is helpful, as is reducing redundancy and typos.
Link: https://expressjs.com/en/guide/routing.html#app-route

using our "app" express object
but instead of attaching the HTTP method,
we attach .route() express method
- app.route()
inside the route() method, we put the path:
- app.route(path)
Then chaining the required methods:
- app.route(path).get(...).post(...).put(...).etc...
But we have to remove the Route Path first parameter from each method

The same example from Express Guide:
all have same URL: http://localhost:3000/book
*/
app.route('/book')
    .get((req, res) => {
        res.send('Retrieve a book [READ] using .get() HTTP method');
    })
    .post((req, res) => {
        res.send('Add a book [CREATE] using .post() HTTP method');
    })
    .put((req, res) => {
        res.send('Update the book [UPDATE] using .post() HTTP method');
    })
/*
As a conclusion, 
we should use route chaining 
when we have multiple routes using different HTTP methods but with the same route path
*/