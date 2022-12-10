var greet = require('./greet');
var wishes = require('./grant-wish'); // looks for grant-wish.js, if not found, looks for index.js under grant-wish folder
var items = require('./items.json'); //the require would create a JS object equivalent to json object and returns it, instead of module.exports.

greet();
wishes.firstWish();
wishes.secondwish();
console.log(items.pant)