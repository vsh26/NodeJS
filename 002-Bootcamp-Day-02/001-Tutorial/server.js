console.log("Server file is running, with nodemon");

// Some core modules in NodeJS
const fs = require('fs');
const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(user.username);

// params - file-destination, string, callback fn
fs.appendFile('greetings.txt', "Hello " + user.username + "!", ()=>{
    console.log("File is created");
});


// Import files in NodeJS
const notes = require('./notes');

const age = notes.age;
console.log(age);

const result = notes.addNumber(age, 5);
console.log(age);


// lodash
const _ = require('lodash');

const data = ["person", "person", 1, 2, 1, 2, "name", "age", 2];
const filteredData = _.uniq(data);
console.log(filteredData);

console.log(_.isString("Hello"));