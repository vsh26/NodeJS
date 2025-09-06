/*

Problem-04

a) Explain what the HTTP GET method is used for in the context of web development.
b) Write the code to create a simple Express.js route that responds with "Hello, World!",
    when a user visits the root URL ("/").

*/

// The HTTP GET method is used to request data from a server. It's often used to retrieve information or resources from a specified URL.

const express = require("express");
const app = express();

app.get('/', function(req, res){
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});