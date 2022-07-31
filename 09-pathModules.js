// path: has a lot of built in properties and method that tells us path to current directory 

const path = require('path');

console.log(path.sep); // returns my platform specific seperator

//lets look at the join property. which joins sequence of path segments using the platform specific saperator
const filePath = path.join('/folder', 'subfolder', 'test.txt');
console.log(filePath);

const basePath = path.basename(filePath); // returns the last path not the directories path
console.log(basePath);

// resolving an Absolute path 
const absolute = path.resolve(__dirname, '/content', 'folder', 'test.txt');
console.log(absolute);