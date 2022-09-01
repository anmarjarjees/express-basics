/*
Before reading this file, please refer to the following file(s) and review them with the same sequence for better understanding and to clarify the code below:
- index1.js
- index2.js
- index3.js
- index4.js
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

// Targeting the "img" folder inside the "public" folder:
/*
express.static(root, [options])
The root argument specifies the root directory from which to serve static assets. 
For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public:
app.use(express.static('public'))
Link: https://expressjs.com/en/starter/static-files.html
*/
app.use(express.static('public'));
/*
Now to access these files:
localhost:3000/img/dish1.jpg
localhost:3000/img/dish2.jpg
localhost:3000/img/dish3.jpg
*/

/*
To create a virtual path prefix (where the path does not actually exist in the file system) 
for files that are served by the express.static function,
specify a mount path for the static directory, as shown below:

app.use('/static', express.static('public'))

since we specified the static folder to be "public" => app.use(express.static('public'));
and the "img" folder inside the public
Our first static folder is "img" => so we can name our new route to be "/img"
Our new route will be "/img" 

.use(RouteURL, express.static(StaticFolder));
*/
app.use('/img', express.static('img'));
// localhost:3000/img/imageName.ext

app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} and the local server URL: http://localhost:3000/`);
});