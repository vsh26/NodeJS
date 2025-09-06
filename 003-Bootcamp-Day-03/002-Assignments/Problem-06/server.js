/*

Imagine you're building an API for a weather app. Your API needs an endpoint to retrieve the current weather.
Create an Express.js route that responds with a JSON object containing the current temperature, conditions,
and city.

*/

const express = require('express');
const app = express();

app.get('/weather', function(req, res){
    
    const currentWeather = {
        temperature: 35,
        conditions: "Sunny",
        city: "Nagpur",
        aqi: 30
    };

    res.send(currentWeather);
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});