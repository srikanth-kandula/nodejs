const bodyParser = require('body-parser');
let urlEncodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

module.exports = function(app) {

  //accessing parameters passed via an endpoint or route
  app.get('/name/:myName/:sex', (req, res) => {
    res.send(`<html>
  <head></head>
  <body>
  <h1>Hello ${req.params.myName}, you are ${req.params.sex}</h1> 
  </body>
  </html>`);
  })

  //query parameters - express req object already has access to it
  app.get('/myurl/:name', (req, res) => {
    res.render('querystringexample', { NAME: req.params.name, ID: req.query.ID })
  });

  app.get('/myurl1/inputform', (req, res) => {
    res.render('user-input-form');
  });

  //when a post request is sent to this url, urlEcondedParser callback function parses the request and adds
  //the input details to the req.body
  app.post('/myurl1/inputform', urlEncodedParser, (req, res) => {
    console.log('inside the submitform url');
    console.log(req.body)
    console.log(`firstName: ${req.body.Firstname}`);
    console.log(`lastname: ${req.body.LastName}`)
  });

  app.get('/myurl1/jsoninput', (req, res) => {
    res.render('json-input');
  });

  app.post('/myurl1/jsoninput', jsonParser, (req, res) => {
    console.log('inside the submitform url');
    console.log(req.body)
    console.log(`firstName: ${req.body.JSONFirstName}`);
    console.log(`lastname: ${req.body.JSONLastName}`)
  });
};