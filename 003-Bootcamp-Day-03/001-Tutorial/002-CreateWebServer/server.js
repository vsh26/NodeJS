// Import Express library
const express = require('express');

// Create an Express application
const app = express();


/*

- Each route listens for an HTTP request (like GET, POST, etc.) and sends back a response.

- Here,
    - Routes (URL paths)            -> /, /chicken, /roll
    - Route definitions             -> app.get(path, handler)
    - API Endpoints (Method + path) -> GET /, GET /chicken, GET /roll
    - APIs                          -> Collection of all endpoints

- So: defining routes = writing the code (route definitions) that implement API endpoints.

*/

// Defining routes

// Route definition for GET /
app.get('/', function(req, res){
    res.send('Hello, welcome to the restaurant... How can I serve you?');
});

// Route definition for GET /chicken
app.get('/chicken', function(req, res){
    res.send('Sure sir! I would love to serve chicken');
});

// Route definition for GET /roll
app.get('/roll', function(req, res){

    const customizedRoll = {
        name: 'Chicken Roll',
        base: 'Wheat',
        chutney: 'Mint chutney',
        addExtraFilling: true,
    }

    res.send(customizedRoll);
});

/*

STARTING THE SERVER

- app.listen() starts the server and makes it listen for incoming requests on the given port.
- Here, the port is 3000 -> so the server will run at http://localhost:3000

*/

app.listen(3000, () => {
    console.log("Listening on port 3000");
});