# Express-Basics
A quick introduction to "Express", the minimalist web framework for Node.js 

Quick Demonstration for creating a web server and it's completely based on the Express JS "Getting Started" and "Guide" :-)

- expressjs.com

# Installation:
The installation steps were taken form [ExpressJS](https://expressjs.com/en/starter/installing.html)
1. You have already installed Node.js, create a directory/folder to hold your application, and make that your working directory. In my case it's the same as its remote repo name "express-basics"
    - Open VS Code Terminal, You can click the arrow to choose your favourite CLI:
        - GitBash (the cross-platform CLI)
        - Powershell (Only for Windows users)
    - You can check if you have node.js by running this command to check its version:
        - node -v

2. Use the npm init command to create a "package.json" file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

> npm init

You can add -y to skip all the questions:

> npm init -y

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
You will have the following content:


3. Enter app.js, sever.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name which will be "index.js".

Now install Express in your working directory and save it in the dependencies list. For example:
> npm install express
Or just using "i" for install:
> npm i express

To install Express temporarily and not add it to the dependencies list:
> npm install express --no-save

After installing "express", your folder will have these two new content:
- node_modules
- package-lock.json

Plus modifying the "package.json" file. After install "express", you will have the dependencies package:
```
"dependencies": {
    "express": "^4.18.1"
}
```
4. Create your starting point JS file like: index.js, app.js, or...
refer to my code file: index.js

5. Another optional package but very important is called "nodemon". Based on what they say in nodemon official website: Nodemon is a utility that will monitor for any changes in your source code and automatically restart your server. In other word, it will restart your server automatically every time you save your file.
- [nodemon npm](https://www.npmjs.com/package/nodemon)
- [nodemon.io](https://nodemon.io/)
- You can install nodemon as a dependency:
> npm install nodemon
- Or installing nodemon as a development dependency: [npm install <package-name> --save-dev]
> npm install nodemon --save-dev  

The differences between dependency and development dependency:
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
> npm install express nodmon

6. Modify the package.json file manually by replacing the property "test" of the script below:
```
- The default initial code:
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```
- the new updated code:
```
   "scripts": {
    "start": "nodemon"
  },
```
Tip: since your application entry point file named "index", so you can exclude the file name:
    - You can just write:
        > "start": "nodemon"
But remember that if your entry point js file has different name, you will have to specify

Finally, one more last change, if you are planning to load JSON files, you will have to specify this also:
    - add a separate flag "--experimental-json-modules" to enable experimental support for import of JSON files. 
 You can read more about this topic in this old article about ["--experimental-modules"](https://nodejs.medium.com/announcing-a-new-experimental-modules-1be8d2d6c2ff)
```
 "scripts": {
    "start": "nodemon --experimental-json-modules"
  },
```
Swap nodemon instead of node to run your code, and now your process will automatically restart when your code changes."

7. One more optional but good change, remember that in node.js we used require() function to include other modules as it's the original way to import/embed modules since the first versions of node.js and still working with the new versions. However, we can also use the "import" with "exports" command going with the new versions to import modules. This technique has been introduced in ES6. So if you like to go with this option, you will need to modify the "package,json" file by adding the property and value ["type": "module"]:<br>
You can add it anywhere at the beginning:
```
{
  "type": "module",
  "name": "express-basics",
  "version": "1.0.0",
  "description": "The basics of Express.JS",
  "main": "index.js",
```

8. Now, you can create your entry point js file "index.js"

9. to run the app:
- The default command:
    > node index
- The command after installing nodemon:
    > npm run dev
    <br>OR just:<br>
    > npm start
   
# Response methods
The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

Method => Description
res.download() => Prompt a file to be downloaded.
res.end() =>	End the response process.
res.json() =>	Send a JSON response.
res.jsonp() =>	Send a JSON response with JSONP support.
res.redirect() =>	Redirect a request.
res.render() =>	Render a view template.
res.send() =>	Send a response of various types.
res.sendFile() =>	Send a file as an octet stream.
res.sendStatus() =>	Set the response status code and send its string representation as the response body.

You can install another package named "nodemon server" which is a very useful tool to start your server. This will restart our server automatically for every change we make 
