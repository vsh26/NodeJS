const _ = require('lodash');

// Arrays
console.log(_.chunk([1,2,3,4,5], 2));     // [[1,2],[3,4],[5]]
console.log(_.compact([0, 1, false, 2, "", 3])); // [1,2,3]
console.log(_.uniq([1,2,2,3,4,4]));       // [1,2,3,4]
console.log(_.flattenDeep([1, [2, [3, [4]]]])); // [1,2,3,4]
console.log(_.difference([1,2,3], [2,4]));   // [1,3]

// Objects
const user = { name: "Vishal", age: 25 };
console.log(_.get(user, "name"));           // "Vishal"
console.log(_.get(user, "address.city", "Not Found")); // "Not Found"
console.log(_.pick(user, ["name"]));        // { name: "Vishal" }
console.log(_.omit(user, ["age"]));         // { name: "Vishal" }
// _.clonedeep
// _.merge

// Strings
console.log(_.camelCase("Hello World"));    // "helloWorld"
console.log(_.kebabCase("Hello World"));    // "hello-world"
console.log(_.capitalize("nodejs"));        // "Nodejs"


// Functions
const hello = () => console.log("Hello!");
const debounced = _.debounce(hello, 1000);

debounced(); // Will run after 1s, no matter how many times called


// Utilities
console.log(_.random(1, 100));   // Random number between 1 and 100
console.log(_.cloneDeep({ a: { b: 2 } }));  // Deep clone object


// Modern JavaScript (ES6+) already covers many Lodash features (map, filter, find, includes, Object.assign, structuredClone, etc.).
// Lodash is still useful, but you might not always need it.