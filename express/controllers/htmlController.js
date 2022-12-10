module.exports = function(app) {

  app.get('/', (req, res) => {
    // res.writeHead(200, { 'content-type': 'text/plain' });
    // res.end('a plain text response from the server');

    //there is no need to specify content type with express, it automatically figures it out.
    //res is a wrapper over the original responce stream provided by the http module of node
    res.send('<html><head></head><body> <h1>Hello world</ha> </body></html>');
  });

  app.get('/json', (req, res) => {
    //the javascrip object is automatically converted to json by the express
    res.json({ firstName: 'srikanth', lastName: 'kandula' })
  });

  //Middleware
  //whenever the url is 'myassets', use this middleware i.e., express.static - this searches the directory
  //passed as argument for the file that has the same name mentioned at /myassets/<filename>

  app.get('/myassets', (req, res) => {
    // res.writeHead(200, { 'content-type': 'text/plain' });
    // res.end('a plain text response from the server');

    //there is no need to specify content type with express, it automatically figures it out.
    //res is a wrapper over the original responce stream provided by the http module of node
    res.send(`<html><head></head>
  <body> 
  <h1>Hello world</ha>
  <img src=public/image.jpeg alt="image">
  </body></html>`);

  });

  //informs Express to set the view engine to ejs and use files with ejs extention for rendering
  app.set('view engine', 'ejs');
  app.get('/usingejs/:someParam', (req, res) => {
    res.render('index', { someValue: req.params.someParam })
  });

}