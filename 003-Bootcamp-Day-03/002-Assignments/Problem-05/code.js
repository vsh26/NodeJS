/*

a) Given a JSON data string: {"product": "Laptop", "price": 999.99}, explain how you would
parse it into a JavaScript object.
b) You have an object: { "name": "Bob", "age": 30 }. How would you convert it into a JSON data
string?

*/

const str = '{"product": "Laptop", "price": 999.99}';
const strToObj = JSON.parse(str);
console.log(strToObj);
console.log(typeof strToObj);


const obj = { "name": "Bob", "age": 30 };
const objToStr = JSON.stringify(obj);
console.log(objToStr);
console.log(typeof objToStr);