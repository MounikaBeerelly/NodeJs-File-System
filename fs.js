/* 
    ---------------------------
    Syntax for file operations
    ---------------------------
*/

// Read File
fs.readFile(filename, [options], callback);
fs.readFileSync(filename, options);

// Write File
fs.writeFile(filename, data, [options], callback);
fs, writeFileSync(filename, data, [options]);

// Append File
fs.appendFile(filename, data, [options], callback);
fs.appendFileSync(filename, data, [options]);

// Open file
fs.open(path, flags, [mode], callback);

//Get file information
fs.stat(path, callback);

// Delete a file
fs.unlink(path, callback);

// Create directory
fs.mkdir(path, [mode], callback);

// Read directory
fs.readdir(path, callback);

// Remove directory
fs.rmdir(path, callback);






