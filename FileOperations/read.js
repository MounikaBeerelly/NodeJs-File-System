// import fs module
const fs = require('fs');

//Asynchronous way
fs.readFile('text files/sample.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log('Asynchronous way..');

/*

// Synchronous way
let syncData = fs.readFileSync('text files/test.txt', 'utf8');
console.log(syncData);

console.log('Synchronous way');

*/