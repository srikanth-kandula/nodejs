const express = require('express');
const app = express();

let htmlCtrl = require('./controllers/htmlController');
let inputCtrl = require('./controllers/inputController')

let port = process.env.PORT || 2002;

app.use('/myassets', express.static(`${__dirname}/public`));


htmlCtrl(app);
inputCtrl(app);

app.listen(port, '127.0.0.1');