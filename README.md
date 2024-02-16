# Express-Basics
A quick introduction to "Express", the minimalist web framework for Node.js 

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

Quick Demonstration for:
- installing ExpressJs
- Creating a web server based on the Express JS "Getting Started" and "Guide" :-)
- Using Express Routing to generate sever-side code

# Repo Code Files:
This repo includes the following JavaScript files. To clearly understand Express, you should go with the following sequence. Also this readme file will show you the relevant code file based on each topic.
- index1.js
- index2.js
- index3.js
- index4.js
- index5.js
- index6.js
- index7.js
- index8.js

# Installation and Setting up the Project:
We can install Express and initialize/set up the project from scratch, or we can use the "Express Application Generator". Please refer to my repo ["express-application"](https://github.com/anmarjarjees/express-application) for more details about installing and running Express application using the "Express application generator" tool.

## Installing Express
The installation steps were taken form [ExpressJS](https://expressjs.com/en/starter/installing.html)

### Verify the Node installation and version
1. You have already installed Node.js. Create a directory/folder to hold your application, and make that your working directory. In my case it's the same as its remote GitHub repo name "express-basics"
    - Open VS Code Terminal, You can click the arrow to choose your favourite CLI:
        - GitBash (the cross-platform CLI)
        - Powershell (Only for Windows users)
        !["CLI Options"](/repo-assets/cli-options.png)
    - You can check if you have node.js by running this command to check its version:
        - node -v
        OR:
        - node --version

NOTE: for quick review about using node, check my GitHub repo about ["Starting with Node"](https://github.com/anmarjarjees/node.js-start)

## Initiating the package JSON file
2. Navigate to your project folder which is "Express-Basics" in our case, then use the "npm init" command to create a "package.json" file for your application. For more information on how package.json works, see [Specifics of npm's package.json handling](https://docs.npmjs.com/cli/v10/configuring-npm/package-json).

> npm init

NOTE: 
Enter app.js, sever.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name which will be "index.js".

This command will create a "package.json" file that contains information about the application and much more important the "dependencies" package(s). No packages is shown at the beginning:
```
{
  "name": "express-basics",
  "version": "1.0.0",
  "description": "The basics of Express.JS",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/anmarjarjees/express-basics.git"
  },
  "keywords": [
    "ExpressJS"
  ],
  "author": "Anmar Jarjees",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/anmarjarjees/express-basics/issues"
  },
  "homepage": "https://github.com/anmarjarjees/express-basics#readme"
}
```
After running the command "npm init", you will have above "package.json" file

NOTE:
- You can add -y to skip all the questions:
```
> npm init -y
```

### NOTE To Recap:
remember that we used this property: ["main": "index.js"] in node.js subject so we can specify the default JavaScript file to launch our application through the use of this command:
```
> node .
```
so we can specify a different default JavaScript file with the "main" property to act as the main entry point to run our application.  However we will use nodemon to run/test out project locally and this setting will be needed for the publishing.

3. Now install Express in your working directory (folder) and save it in the dependencies list:
```
> npm install express
```

Or just using "i" for install:
```
> npm i express
```

To install Express temporarily and not add it to the dependencies list:
```
> npm install express --no-save
```

After installing "express", your folder will have these two new content:
- node_modules
- package-lock.json

NOTE: the JSON file "package-lock.json" is used by node to lock the current versions of the dependencies/modules that we have installed in this project. We do NOT touch this file, it's just used by node when are run the command "npm install" in another device so node will make sure to install the same versions of the dependencies that we used in our project.

Plus modifying the "package.json" file. After install "express", you will have the dependencies package:
```
"dependencies": {
    "express": "^4.18.1"
}
```
4. Create your starting point JS file like: index.js, app.js, or...
refer to my code file: index.js

5. Another optional package but very important is called "nodemon". Based on what they say in nodemon official website: Nodemon is a utility that will monitor for any changes in your source code and automatically restart your server. In other words, it will restart your server automatically every time you save your file.
- [nodemon npm](https://www.npmjs.com/package/nodemon)
- [nodemon.io](https://nodemon.io/)
- You can also install nodemon as a dependency:
```
> npm install nodemon
```

- Or installing nodemon as a **development dependency** since we only need it for the development environment:

The code syntax for installing any package/tool as dev dependency:
  - [npm install <package-name> --save-dev]:

So the command will be:
```
> npm install nodemon --save-dev  
```

## The differences between dependency and development dependency:
- "dependencies": Packages required by your application in production.
- "devDependencies": Packages that are only needed for local development and testing

To learn more, check this article ["Specifying dependencies and devDependencies in a package.json file"](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

inside package.json, you can see that "express" is for sure onr of the dependencies, while "nodemon" is mainly needed for development:
```
  "dependencies": {
    "express": "^4.18.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
```

NOTE:

You can install more than one package together within a single command:
in the example below, we are installing "express" and "nodemon" by running this one command:
```
> npm install express nodemon
```

6. Modify the **"package.json"** file by adding a new property inside the "script". Remember that with pure node environment, we can run any .js file using this command as we did before:
```
node file-name
```

But since we installed **"nodemon"**, to make the use of it, we need to add a new property "start" inside the original object property "scripts" to start our application with nodemon. 

Below is the default content for "scripts" inside the JSON file:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  }
```

First, We can remove this property "test" with its value as we are not going to use it **(optional step)**.

Then modify the content by adding "start" script with the following values:
```
   "scripts": {
    "start": "nodemon index1.js"
  },
```

Tip: 
If your application entry point file for example "index1" already identified in the "main" property, so you can exclude the file name:
    - You can just write:
    ```
        > "start": "nodemon"
    ```
#### NOTE:
By default the entry point (the main file) will be set to "index.js" when we initialize the package.json file, but remember that if your entry point which is the .js file has different name other than "index", you will have to specify the name


7. Finally, one more last change, if you are planning to load JSON files in your project, you will have to specify this also:
    - add a separate flag **"--experimental-json-modules"** to enable experimental support for import of JSON files. 
 You can read more about this topic in this old article about ["--experimental-modules"](https://nodejs.medium.com/announcing-a-new-experimental-modules-1be8d2d6c2ff). So the final line in "package.json" will be like this:

```
 "scripts": {
    "start": "nodemon --experimental-json-modules"
  },
```


Now we could also more specify the entry-point .js file beside specifying it in the "main" ["main":"index5.js"] as shown below, but since we specify it in the main property it should work fine also:
```
 "scripts": {
    "start": "nodemon --experimental-json-modules index5.js"
  },
```
Swap nodemon instead of node to run your code, and now your process will automatically restart when your code changes.


8. One more optional but good change, remember that in node.js we used require() function to include other modules as it's the original way to import/embed modules since the first versions of node.js and still working with the new versions. 

However, we can also use the ["import"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) with ["exports"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements which are the native JavaScript modules, so we can also go with the new versions to import modules. This technique has been introduced in ES6. So if you like to go with this option, you will need to modify the "package,json" file by adding a new property and value: 
```
"type": "module",
```

Here is what VS Code will tell us:
    **"When set to "module", the type field allows a package to specify all .js files within are ES modules. If the "type" field is omitted or set to "commonjs", all .js files are treated as CommonJS."**
    
    You can add it anywhere at the beginning: **"type": "module"**:
```
{
  "type": "module",
  "name": "express-basics",
  "version": "1.0.0",
  "description": "The basics of Express.JS",
  "main": "index.js",
```

9. To run the app (with node or nodemon):
- The default command without using "nodemon" (assuming that the file is index.js), notice that no need to specify .js extension as note will default it to .js:
  ```
    > node index
  ```

Or since the file name is "index" we can even use this code as we learnt with node.js:
  ```
    > node .
  ```

Otherwise, you have to specify:
  ```
    > node index1
  ```

- Since we installed **"nodemon"** so the "run" command after installing **"nodemon"** and changed the "script" inside the JSON file:
```
    > npm start
```
Notice that npm will start running the "main" JavaScript file which is "index1.js" according to our JSON file. So to run and test all the other .js files in this repo, we need to specify each one:
```
 > npm start index2
```

Yes we can just use this command assuming that the entry point file is "index.js" if we go by the default initialized settings of JSON:
```
    > npm start
```

In other words, if you want to run other file as an entry point to your app and the name is not "index", you have two options:
- Either change the value of the "main" inside JSON file:  "main": "any-name.js"
- Or you have to write/specify the file name, example:
```
    > npm start index1
```

 |***:computer: Code Reference: index1.js***|
 |:---:|


# Other Setting for "script.js"
Notice for local testing, learning, and loading JSON content, we can use these simplified settings as we did above:
```
 "scripts": {
    "start": "nodemon --experimental-json-modules"
  },
```

But for both dev. and production we can use these settings by specifying a new property for example "dev" by convention:
```
  "scripts": {
    "start": "script.js",
    "dev": "nodemon"
  },
```

In such case, to run/test our application, we use:
```
npm run dev
```

# Express.js and Node.js
![ExpressJs and Node.JS HTTP Diagram](/repo-assets/express-workflow.jpg)

# Response methods
The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

Method => Description
- res.download() => Prompt a file to be downloaded (a file will be transferred as an attachment).
- res.end() =>	End the response process. 
- res.json() =>	Send a JSON response. { The one that we will be focusing on in our current project }
- res.jsonp() =>	Send a JSON response with JSONP support.
- res.redirect() =>	Redirect a request (Redirect the user to another specified path).
- res.render() =>	Render a view template.
- res.send() =>	Send a response of various types. { The one that we will be focusing on in our current project }
- res.sendFile() =>	Send a file as an octet stream.
- res.sendStatus() =>	Set the response status code and send its string representation as the response body.

You can install another package named "nodemon server" which is a very useful tool to start your server. This will restart our server automatically for every change we make 

## API Testing:
For testing the API request, we will ["Mockaroo.com"](https://www.mockaroo.com/). Mockaroo lets you generate up to 1,000 rows of realistic test data in CSV, JSON, SQL, and Excel formats. You can check [Mocking a REST API with Mockaroo](https://youtu.be/H91_P_Zr2M0) video.

I have done the following changes:
- Changing the table by adding "Job Title" field instead of "IP Address"
- Reduce the number of returned rows to 30
- Change the format from "CSV" to "JSON"
![My Mackaroo Schema](/repo-assets/my-mackaroo-schema.jpg)

- Then download the json file and save it into your project folder inside a sub-folder named "data" by convention.

- You can open the json file with VS code and press the same hotkeys "ALT+SHIFT+F" to format the lines

NOTE: 
The project folder contains a sub-folder named "data", the "data" folder contains:
- mock-data.json => the JSON file that contains mock data generated by 'Mockaroo"
- info.txt => a simple text file that contains one line to practice file download

# Route - Routing:
Routing refers to how an application's endpoints (URIs) respond to client requests. 
Route is consisted of:
- a path
- an HTTP request method

## HTTP Methods:
HTTP defines a set of [request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) to indicate the desired action to be performed for a given resource. 
We can use the four HTTP methods: Create, Read, Update, and Delete to implement the "CRUD" operations. So the four HTTP method for the "CRUD" are:
- GET [.get()] => The GET method requests a representation of the specified resource. Requests using GET should only retrieve data from the server
- POST [.post()] => The POST method submits an entity to the specified resource (sends data to the server), often causing a change in state or side effects on the server.
- PUT [.put()] => The PUT method replaces (updates) all current representations of the target resource with the request payload.
- DELETE [.delete()] => The DELETE method deletes the specified resource.

## HTTP Messages:
[HTTP messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) are how data is exchanged between a server and a client. There are two types of messages: requests sent by the client to trigger an action on the server, and responses, the answer from the server. You can check this quick article about ["The structure of HTTP request"](https://www.oreilly.com/library/view/http-the-definitive/1565925092/ch01s05.html). Also you can learn about all the ["HTTP Status Messages"](https://www.w3schools.com/tags/ref_httpmessages.asp)
 - HTTP Request: Sending a request from the client to the server
 - HTTP Response: Sending an a response (answer) from the server to the client
 ![http-communications.jpg](repo-assets/http-communications.jpg)

# Postman and JSON Data
In our application we used the four commonly used HTTP methods for CRUD operations, but we are able to only test the .get() method. For trying and testing the other three method, we will use a free tool to test all our Routes named "Postman".

## [What is Postman?](https://www.postman.com/)
Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.

### Steps to do
- Create a free account with postman.com
- Download the Desktop application based on your OS
- Run the downloaded executable file, postman will ask you either to sign in or create an account
- Since you have already created your account, sign in till you land on the home dashboard.
- From the home page, click "Create New"
![Postman Home Dashboard](repo-assets/postman01-home.jpg)

- From the popup menu, select "HTTP Request":
![Postman http building block option](repo-assets/postman02-http.jpg)

- Change "GET" option for input box to be "POST" by just clicking the "GET" button and select the wanted method from the dropdown list which is "POST". Then enter your local URL with route value (the path) that you specified in your code<br>. Finally, click "Send" button and you will see the results based on what you have sent using res.send() method. Example, for "create", we used "localhost:3000/create":
![Postman Create using POST Request](repo-assets/postman03-post-create.jpg)

- Now within the same page, you can repeat the same logic the following changes:
  - PUT => localhost:3000/create
  - DELETE => localhost:3000/delete
  - GET => localhost:3000/users

For the scope of this course, two things to consider:
- We will get the data from a JSON file as we are focusing on ExpressJs. When using Express with node.js to build a full application that talks to the database, we use MongoDB or MySQL database.
- Although we can have multiple handlers (callback) but it's a rare case, so we will focus on one handler but I put one simple example about how to work with multiple handlers using .next() function.

 |***:computer: Code Reference: index2.js***|
 |:---:|

 # Working with route chaining
 You can create [chainable route handlers](https://expressjs.com/en/guide/routing.html#app-route) for a route path by using app.route(). Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. 

 |***:computer: Code Reference: index3.js***|
 |:---:|

 # About Express Middleware
 Express is a [routing and middleware web framework](https://expressjs.com/en/guide/using-middleware.html) that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. Middleware is simply a function or piece of code that it's is run in the middle of getting a request from the client and sending a response from the server.

 Based on Express Docs, middleware functions are functions that have access to:
 - the request object (req)
 - the response object (res)
 - the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

 # Route Parameters
Passing data with [Route Parameters](https://expressjs.com/en/guide/routing.html) with Route, passing data through the URL for searching or accessing specify data, like passing the user_id, emp_id, user_name, or member_name etc. Notice that accessing the route parameter is also done and implemented by middleware.

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
```
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
```
In above example from "Express", we are passing two different parameters starting with :
- :userId
- :bookId

The route path (in our code)=> Route path: /users/:userId/books/:bookId
The actual requested URL example => http://localhost:3000/users/34/books/8989
To capture the values of Route Parameters, we use request => req.params: { "userId": "34", "bookId": "8989" }
req.params => returns an object with keys/values pairs

 |***:computer: Code Reference: index4.js***|
 |:---:|

# Express Built-in Middleware Functions:
- Express has the following [built-in middleware functions](https://expressjs.com/en/guide/using-middleware.html):
- express.static serves static assets such as HTML files, images, and so on.
- express.json parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
- express.urlencoded parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+

 # Working with Static Files [express.static()]:
 [Static files](https://expressjs.com/en/starter/static-files.html) are files that client can download them from the sever as they are without any changes these include images, html, css, JavaScript, PDFs, multimedia files and etc... To serve static files, use the "express.static" built-in middleware function in Express. Notice 

Based on the Express auto generated skelton (boilerplate), a folder named "public" is the main folder that contains the static files immediately or the other sub-folders for the static files:
- public:
  - images
  - javascripts
  - stylesheets

Let's create the "public" folder and add inside it another folder "img" for images. placing some images inside it.

The signature of the built-in middleware function in Express :
express.static(root, [options])

 |***:computer: Code Reference: index5.js***|
 |:---:|

# Working with JSON Files [express.json() and express.urlencoded()]:
(https://expressjs.com/en/4x/api.html#express.json)
- express.json() for parsing incoming request data to be sent in JSON format. VS Code can show you this tip/hint when we hover our mouse over this middleware: **"Returns middleware that only parses json and only looks at requests where the --"Content-Type"-- header matches the type option."**

  ```
  {
    "prop": "Our JSON Object Property Value"
  }
  ```
- express.urlencoded() for parsing incoming request data to be sent encoded in the URL. VS Code can show you this tip/hint when we hover our mouse over this middleware: **Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option**
  ```
  {
    "prop": " \"Our JSON Object Property Value\""
  }
  ```

We put them on action by writing our code then using Postman to test the .post() http method:

 |***:computer: Code Reference: index6.js***|
 |:---:|

## Postman Settings for testing express.json and express.urlencoded
After writing our code. Pay attention to the ["Content-Type"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and check ["The Media Type on Wikipedia"](https://en.wikipedia.org/wiki/Media_type) as we will use it in the "Headers" section. based on the [types' values examples in Wikipedia](https://en.wikipedia.org/wiki/Media_type#Common_examples_[10]), the two types that we use with Express Middleware:
- application/json => to be used as the value for the key "Content-Type" with express.json()
- application/x-www-form-urlencoded => to be used as the value for the key "Content-Type" with express.urlencoded()

Also we want to the value to be in JSON: 

- In our code file "index6.js" => we used => app.use(express.json());
  Then change the following in Postman:
  -Below are the first change(s) to make
  ![JSON Step1 on Postman](repo-assets/json-post-step1.jpg)

  - Below are the second/last change(s) to make in the "body" section by clicking "row"
  ![JSON Step2 on Postman](repo-assets/json-post-step2.jpg)

- Finally, in our code file "index6.js" => we used => app.use(express.urlencoded({ extended: true }));
  Then change the following in Postman:
  -Below are the first change(s) to make. If we click the "VALUE" box and start typing "url", Postman should give us the URL that we need to use:
  ![JSON URL Step1 on Postman](repo-assets/json-url-post-step1.jpg)

  - Below are the second/last change(s) to make in the "body" section by clicking "row"
  ![JSON URL Step2 on Postman](repo-assets/json-url-post-step2.jpg)

# Error Handling
[Error Handling](https://expressjs.com/en/guide/error-handling.html#error-handling) refers to how Express catches and processes errors that occur both synchronously and asynchronously. Express comes with a default error handler so you don't need to write your own to get started.
```
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
```
## Writing error handlers
Define [error-handling middleware functions](https://expressjs.com/en/guide/error-handling.html#error-handling) in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next). 
The reason for creating a custom error handler is to hide the technical error list/details (The stack trace of errors) and provide a simple brief message to the client when an error occurred in our application:

For example:
```
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});
```

 |***:computer: Code Reference: index7.js***|
 |:---:|

 # Debugging Express
 Express uses the [debug module](https://expressjs.com/en/guide/debugging.html#debugging-express) internally to log information about route matches, middleware functions that are in use, application mode, and the flow of the request-response cycle.

 To see all the internal logs used in Express, set the **"DEBUG environment variable"** to express:
 * when launching your app.
- On any OS:
  > DEBUG=express:* node index.js
- On Windows:
  > set DEBUG=express:* & node index.js

To practice the command above, don't forget the file name, in my case it's index8.js, also don't forget that we changed the value of the **property "start"** for the script in the **package.json** file to be:
```
"nodemon --experimental-json-modules"
```
And finally since I am using windows:
  - in CMD Window:
    > set DEBUG=express:* & node --experimental-json-modules index8.js
  - in GitBash:
    > DEBUG=express:* node --experimental-json-modules index8.js

  No new code or topic in this last code file, it's just to practice the DEBUG command
 |***:computer: Code Reference: index8.js***|
 |:---:|

 NOTE: Instead of running the DEBUG command every time you run your app, you can add it to your package.json file.
 The JSON file "package.json" looks like this:
```
  "scripts": {
    "start": "nodemon --experimental-json-modules"
  },
``` 
We can add one more property named "debug", I will use the syntax of GitBash:
```
  "scripts": {
    "start": "nodemon --experimental-json-modules",
    "debug": "DEBUG=express:* nodemon --experimental-json-modules"
  },
```

# Resources, References, and Credits:
- [Jamie Pittman](https://github.com/jlp0328): Full-Stack Software Engineer III
- [Dave Gray](https://github.com/gitdagray): Solutions Architect / Software Engineer / Web Developer / Instructor / PhD in Information Systems Candidate
- [ExpressJS.com](https://expressjs.com/)
- [Express web framework (Node.js/JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [Modules: ECMAScript modules](https://nodejs.org/api/esm.html)
- [nodemon npm](https://www.npmjs.com/package/nodemon)
- [nodemon.io](https://nodemon.io/)
- ["Mockaroo.com"](https://www.mockaroo.com/)
- [Postman](https://www.postman.com/)
- [Express Tutorial: The Local Library website](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
- [Computer Hope - Website with Node.js and Express](https://www.computerhope.com/issues/ch002070.htm#menu.js)
- [FreeCodeCamp News](https://www.freecodecamp.org/news/)