// Create Directory
var fs = require("fs");

console.log("Going to create directory /tmp/test");
fs.mkdir('tmp', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
});

// Read directory


console.log("Going to read directory /tmp");
fs.readdir("FileOperations", function (err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function (file) {
        console.log(file);
    });
});

console.log("Going to delete directory tmp");
fs.rmdir("tmp", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("deleted directory tmp");
});