/*

Problem-05:
    Create a Node.js program that uses the os module to display the following system
    information:

    - Total memory available (in bytes)
    - Free memory available (in bytes)
    - Operating system platform
    - Number of CPU cores

*/

const os = require('os');

console.log("Total memory available: ", os.totalmem());
console.log("Free memory available: ", os.freemem());
console.log("OS Platform: ", os.platform());
console.log("No. of CPU cores: ", os.cpus().length);