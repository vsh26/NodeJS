const os = require("os");

console.log(os.userInfo());

console.log("---------- OS Information ----------");
console.log("Platform:", os.platform());
console.log("Type:", os.type());
console.log("Release:", os.release());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());

console.log("\n---------- CPU & Memory ----------");
console.log("CPUs:", os.cpus().length);
console.log("Total Memory (in bytes):", os.totalmem());
console.log("Free Memory (in bytes):", os.freemem());

console.log("\n---------- Network ----------");
console.log(os.networkInterfaces());

console.log("\n---------- Uptime ----------");
console.log("System uptime (hrs):", (os.uptime() / 3600).toFixed(2));