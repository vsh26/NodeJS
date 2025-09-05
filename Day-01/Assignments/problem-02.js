/*

Problem-02:

    Create a JavaScript program to calculate the area of a rectangle.
    Ask the user for the length and width of the rectangle and store them in variables.
    Calculate and display the area using the formula: `area = length * width`.

*/

const prompt = require('prompt-sync')();

function displayArea(l, w){
    console.log("Area: ", l*w);
}

const length = prompt("Enter length: ");
const width = prompt("Enter width: ");

displayArea(length, width);