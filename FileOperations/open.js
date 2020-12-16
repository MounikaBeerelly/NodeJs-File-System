var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('text files/sample.txt', 'r+', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});


// synchronous - Opening File
console.log("Going to open file!");
fs.openSync('text files/sample.txt', 'r+');
console.log("File opened successfully!");
