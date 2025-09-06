/* 
Problem-01:
Explain in your own words what a server is in the context of Node.js.
Then, write step-by-step instructions on how to create a basic server using Express.js.

*/

/*

A server in Node.js is a computer program that receives and responds to requests from clients (like
web browsers or mobile apps) over a network. It processes requests and sends back appropriate
responses.

*/

// Creating a simple web-server using Express.js

// Import Express library
const express = require('express');

// Create an Express application instance
const app = express();

// Route definition for GET /
app.get('/', function(req, res){
    res.send("Hello!");
});


// start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});