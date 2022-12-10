let Util = require('util');

function Person () {
  this.name = 'myname';
  this.gender = 'mygender';
};

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
}

function Police() {
  Person.call(this);
  this.badgeNumber = 1235;
}

Util.inherits(Police, Person);

let police = new Police();
police.greet(); //outputs 'Hello undefined' if not for the line 13
