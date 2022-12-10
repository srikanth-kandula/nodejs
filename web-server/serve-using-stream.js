let http = require('http');
let fs = require('fs');

http.createServer((req,res) => {

  res.writeHead(200, { 'content-type': 'text/html' })
  let htmlPage = fs.readFileSync(`${__dirname}/display.html`);
  res.end(htmlPage);

}).listen(1440, '127.0.0.1');

//replacing a template
http.createServer((req, res) => {

  res.writeHead(200, { 'content-type': 'text/html' })
  let htmlPage = fs.readFileSync(`${__dirname}/display.html`, 'utf8');
  htmlPage = htmlPage.replace('{templateToReplace}', 'First whatever');
  htmlPage = htmlPage.replace('{newTemplateToReplace}', 'second replacement');
  res.end(htmlPage);

}).listen(2000, '127.0.0.1');


//stream the content for better performance results
//as content is streamed as chunks, less buffer size is needed for each request to server and even if multiple simultaneous requests
//are made to the server, memory consumption will still be less
http.createServer((req, res) => {

  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream(`${__dirname}/display.html`, { highWaterMark: 1 }).pipe(res);
  /**
   * By default, stream.end() is called on the destination Writable stream when the source Readable stream emits 'end', so that the destination is no longer writable. To disable this default behavior, the end option can be passed as false, causing the destination stream to remain open:
   */

}).listen(2002, '127.0.0.1');