var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2.js');
greet2.greet(); //'Hello from Krishna'

greet2.name = 'New Krishna';

var greet2a = require('./greet2');
greet2a.greet(); //The change in name property, reflect here and prints 'Hello from New Krishna'


var greet3 = require('./greet3.js');
greet3.greet();//'Hello from Srikanth'

greet3.name = 'New Srikanth';
greet3.greet();

var greet3a = require('./greet3.js');
greet3a.greet(); //The change in name property, reflect here and prints 'Hello from New Srikanth'

var greet4 = require('./greet4');
var myGreeting = new greet4();
myGreeting.greet();
myGreeting.name = 'unique Srikanth';
myGreeting.greet();


var greet5 = require('./greet4');
var myNewGreeting = new greet5();
myNewGreeting.greet();
myNewGreeting.name = 'new unique Srikanth';
myNewGreeting.greet();