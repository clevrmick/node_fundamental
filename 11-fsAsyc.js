// FileSystem: we have 2 flavours to it. Asychronous(non-blocking) and sychronous (blocking);
// this is the Asychronous Version of the readfile system  
const {readFile, writeFile, read} = require('fs'); // destructuring on the go
// the way the asychronous works is that we need to provide a callback function
// readFile('./content/result-sync.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log('Something Went Wrong');
//         return
//     };
//     console.log(result)
// });

// Now let read the both file and write a file to it

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('please check the first file');
        return;
    };
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log('please check the second file');
            return;
        }
        const second = result;

        writeFile('./content/result-ansyc.txt',
        'this is the asychronous version to read and write txt', (err, result) => {
            if (err) {
                console.log('something went wrong on the write file');
                return;
            }
            console.log(result)
        });

    })
})