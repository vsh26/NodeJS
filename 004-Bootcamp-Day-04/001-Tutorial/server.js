const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello, welcome to the restaurant... How can I serve you?');
});

app.get('/chicken', function(req, res){
    res.send('Sure sir! I would love to serve chicken');
});

app.get('/roll', function(req, res){

    const customizedRoll = {
        name: 'Chicken Roll',
        base: 'Wheat',
        chutney: 'Mint chutney',
        addExtraFilling: true,
    }

    res.send(customizedRoll);
});

// Check in Postman
app.post('/items', function(req, res){
    // For now we are jsut sending response to client
    // and not saving any data in database
    res.send('Data is saved');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});