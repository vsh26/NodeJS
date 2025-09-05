/*

Problem-04:

    You're organizing a party and want to keep track of the guest list. Create an array called
    "guestList" and add the names of at least five guests. Then, write a program that checks if a
    given name is on the guest list. If the name is found, display "Welcome to the party, [name]!";
    otherwise, display "Sorry, you're not on the guest list."
    
*/

const guestList = ["Iron-Man", "Hulk", "Thor", "Ant-Man", "Black-Widow"];

const prompt = require('prompt-sync')();

const guestName = prompt("Enter guest name: ");

function checkGuestList(guestName){
    if(guestList.includes(guestName)){
        console.log("Welcome to the party, ", guestName);
    } else {
        console.log("Sorry, you're not on the guest list");
    }
}

checkGuestList(guestName);