let http = require('http');

http.createServer((req, res) => {

  res.writeHead(200, { 'content-type': 'text/plain'});
  res.end('This content is sent as response for request at 1337 port from the http server\n');

}).listen(1337, '127.0.0.1');


http.createServer((req, res) => {
  let status = 200, header, message;
  console.log(req.url)
  if (req.url === '/json') {
    header = { 'content-type': 'application/json' };
    message = {
      firstname: 'srikanth',
      lastname: 'kandula'
    }
    message = JSON.stringify(message);
  }
  else if(req.url === '/images') {
    header = { 'content-type': 'text/html' }
    message = '<html> <head></head> <body> <h1>This html content is the response from server</h1> </body> </html>'
  } else {
    header = { 'content-type': 'text/plain' };
    message = '1338 port: default content is sent as response from the http server\n';
  }

  res.writeHead(status, header)
  res.end(message);

}).listen(1338, '127.0.0.1');