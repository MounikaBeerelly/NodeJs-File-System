const fs = require('fs');

// Append File: append the content to an existing file

fs.appendFile('text files/ex1.txt', ' Appended content.', "utf8", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Appended successfully!')
    }
});

// Append File: append the content to an existing file

fs.appendFileSync('text files/ex2.txt', ' Appended content', "utf8");
console.log('Append file successfully in sync way');