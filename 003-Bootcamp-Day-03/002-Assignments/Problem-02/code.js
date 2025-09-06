/*

Problem-02:

a) Define JSON and explain its importance in web development.

b) Given a JSON data string: {"name": "Alice", "age": 25, "hobbies": ["reading","painting"]},
    explain how you would extract the value of the "age" key.

c) How would you convert the following object into a JSON data string? {"title": "Book", "pages":200}

*/


//2a
/*

JSON (JavaScript Object Notation) is a lightweight data interchange format used to exchange data between
a server and a client. It's easy for humans to read and write, and it's easy for machines to parse and generate.

*/

// 2b
const jsonString = '{"name": "Alice", "age": 25, "hobbies": ["reading","painting"]}';
const convertedToObj = JSON.parse(jsonString);
console.log(convertedToObj.age);


//2c
const obj = {"title": "Book", "pages":200};
const convertedToStr = JSON.stringify(obj);
console.log(convertedToStr)
