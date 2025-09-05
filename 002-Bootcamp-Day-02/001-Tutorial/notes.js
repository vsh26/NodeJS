console.log("notes package loaded");

const age = 25;

function addNumber(a, b){
    return a+b;
}

// module exports
module.exports = {
    age,
    addNumber
}