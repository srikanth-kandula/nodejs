const fs = require('fs');
const zlib = require('zlib'); //a node module that helps to create a compressed .gz files

const readable = fs.createReadStream(`${__dirname}/greet.txt`);
let writable = fs.createWriteStream(`${__dirname}/greet copy.txt`);
let writable1 = fs.createWriteStream(`${__dirname}/greet.txt.gz`);

/**
 * By default, stream.end() is called on the destination Writable stream when the source Readable stream emits 'end', so that the destination is no longer writable. To disable this default behavior, the end option can be passed as false, causing the destination stream to remain open:
 */
readable.pipe(writable);

let gzip = zlib.createGzip(); //creates a transform stream

readable.pipe(gzip).pipe(writable1);
