/*

Problem-02:
    Write a JavaScript function named calculateCircleArea that takes the radius of a circle
    as a parameter and returns the area of the circle. You can use the formula area = π *
    radius^2. Test the function with a few different radii.

*/

function calculateCircleArea(radius){
    return Math.PI * radius *radius;
}

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(10.5));