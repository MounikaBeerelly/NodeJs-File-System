const fs = require('fs');

let readStream = fs.createReadStream('test.mp4');

readStream.on('data', function (data) {
    console.log('------------------------------------------------------------')
    console.log(data)
})
