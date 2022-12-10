var fs = require('fs');

var message = fs.readFileSync(`${__dirname}/message.txt`);
console.log('binary output when character encoding is not specified: ');
console.log(message);

var message = fs.readFileSync(`${__dirname}/message.txt`, 'utf-8');
console.log('synchronous file read: ' + message);

fs.readFile(`${__dirname}/message.txt`, 'utf-8', function(error, data) {
  console.log('asynchronous file read: ');

  if(error) console.log(error);
  else console.log(data);
});

console.log('reached end of the program'); //this will be executed without waiting for the asynchronous file read to complete