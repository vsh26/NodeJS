/*

Problem-05:

    You're working on a weather app. Create a JSON object representing the weather forecast for
    a specific day. Include properties like "date," "temperature," "conditions," and "humidity."
    Display the information using console.log.
    
*/

const weatherForecast = {
    date: "2025-09-05",
    temperature: 35,
    conditions: "Sunny",
    humidity: 40,
    aqi: 20
};

for(prop in weatherForecast){
    console.log(prop, " : ", weatherForecast[prop]);
}