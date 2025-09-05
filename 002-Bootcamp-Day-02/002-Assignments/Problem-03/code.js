/*

Problem-03:
    Create a function named performOperation that takes two numbers and a callback
    function as parameters. The callback function should determine the operation to be performed
    (addition, subtraction, multiplication, or division) on the two numbers. Call the
    performOperation function with different numbers and callback functions for each
    mathematical operation.

*/

function performOperation(a, b, cb){
    const result = cb(a,b);
    console.log(result);
}

function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

performOperation(10, 5, add);
performOperation(10, 5, subtract);
performOperation(10, 5, multiply);
performOperation(10, 5, divide);