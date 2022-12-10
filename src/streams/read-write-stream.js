//require node file system
const fs = require('fs');

//create a readable stream
const readableStream = fs.createReadStream(`${__dirname}/short-message.txt`, {
  encoding: 'utf-8', highWaterMark: 1
});

//create a writable stream
let writableStream = fs.createWriteStream(`${__dirname}/short-message1.txt`);

//listen to data event and invoke the listener to write data to write stream
readableStream.on('data', function(chunk) {
  console.log('data received');
  console.log(chunk);
  writableStream.write(chunk);
});

