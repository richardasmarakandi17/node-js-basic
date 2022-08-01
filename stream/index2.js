const fs = require('fs');
 
const readableStream = fs.createReadStream('./input.txt', {
    highWaterMark: 10
});

const writableStream = fs.createWriteStream('./output.txt');
 
readableStream.on('readable', () => {
    try {
        writableStream.write(readableStream.read())
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});