/*

- fs lets you work with the file system directly (read, write, update, delete files/folders).

- It has two sets of functions:

    - Synchronous (blocking) → e.g. fs.readFileSync()
    - Asynchronous (non-blocking) → e.g. fs.readFile()

*/

const fs = require('fs')


// ---------- Write a file ----------
// Create a new file or overwrite an existing file

// fs.writeFile (async)
fs.writeFile('./greetings-01.txt', 'Hello NodeJS!', (err) => {
    if(err){
        throw err;
    }
    console.log("File written successfully! (async)");
});

// fs.writeFileSync (sync)
fs.writeFileSync('./greetings-02.txt', 'Hello NodeJS!');
console.log("File written successfully! (sync)");


// ---------- Read a file ----------

// fs.readFile (async)
fs.readFile('./note.txt', 'utf-8', (err, data) => {
    if(err){
        throw err;
    }
    console.log("File content (async): ", data);
})

// fs.readFileSync (sync)
const dataSync = fs.readFileSync('./note.txt', 'utf-8');
console.log("File content (sync): ", dataSync);


// ---------- Append data ----------

// fs.appendFile (async)
fs.appendFile('./note.txt', 'Appended line (async)', (err) => {
    if(err){
        throw err;
    }
    console.log("File appended (async)!");
});

// fs.appendFileSync (sync)
fs.appendFileSync('./note.txt', 'Appended line (sync)');
console.log("File appended (sync)!");


// ---------- Delete a file ----------

// fs.unlink (async)
fs.unlink('file-01.txt', (err) => {
    if (err){
        throw err;
    }
    console.log("File deleted (async)");
});

// fs.unlinkSync (sync)
fs.unlinkSync('file-02.txt');
console.log("File deleted (sync)");


// ---------- Create a directory ----------
// only if directory does not exist

// fs.mkdir (async)
fs.mkdir('dir-01', (err) => {
    if(err){
        throw err;
    }
    console.log("Directory created (async)");
});

// fs.mkdirSync (sync)
fs.mkdirSync('dir-02');
console.log("Directory created (sync)");


// ---------- Read folder contents ----------

// fs.readdir (async)
fs.readdir('.', (err, files) => {
    if(err){
        throw err;
    }
    console.log("Dir contents (async): ", files);
});

// fs.readdirSync (sync)
const filesSync = fs.readdirSync('.');
console.log("Dir contents (sync): ", filesSync);


// ---------- File Information ----------

// fs.stat (async)
fs.stat("note.txt", (err, stats) => {
  if (err) throw err;
  console.log("Async stats:", stats);
  console.log("Is file?", stats.isFile());
  console.log("Is directory?", stats.isDirectory());
});

// fs.statSync (sync)
const statsSync = fs.statSync("note.txt");
console.log("Sync stats:", statsSync);
console.log("Is file?", statsSync.isFile());
console.log("Is directory?", statsSync.isDirectory());