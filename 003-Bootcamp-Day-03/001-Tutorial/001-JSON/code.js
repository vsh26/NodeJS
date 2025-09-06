// JSON string to object
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(typeof obj);

// object to JSON string
const objToConvert = { name: "Alice", age: 25 };
const convertedStr = JSON.stringify(objToConvert);
console.log(convertedStr);
console.log(typeof convertedStr);

