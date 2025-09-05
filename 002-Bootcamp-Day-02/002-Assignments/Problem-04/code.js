/*

Problem-04:
    Write a Node.js program that uses the fs module to read the contents of a text file named
    "notes.txt" and display them in the console.

*/

const fs = require('fs');

fs.readFile('./notes.txt', 'utf-8', (err,data) => {
    if(err){
        console.log("Error in reading file: ", err);
        return;
    }
    console.log(data);
});