const fs = require('fs');

// Creates new file and writes the content into file


fs.writeFile('text files/ex1.txt', 'Writing a file in Asynchronous way.', 'utf8', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('write operation complete');
    }
});

fs.writeFileSync('text files/ex2.txt', 'Writing file in synchronous way.', 'utf8');
console.log('Write operation complete in sync way');