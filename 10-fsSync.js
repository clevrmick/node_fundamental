// FileSystem: we have 2 flavours to it. Asychronous(non-blocking) and sychronous (blocking);
const {readFileSync, writeFileSync} = require('fs'); // destructuring on the go

// let read a file in our system
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// let create a file in our file system
// the way it works is that we provide two agument again. the first will be the path and file name and
// the second will be the value that we will want to pass. when creating a file and the file is not there 
// node will create that file automatically and if the file is there node will replace the value with the new one.

writeFileSync('./content/result-sync.txt', 'Troubleshoot the writeFile');
