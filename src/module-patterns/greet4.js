/**
 * returning function ensures, a new object can be created for each require
 */

function GreetMe() {
  this.name = 'Srikanth';
  this.greet = function () {
    console.log(`Hi from ${this.name}`);
  }
};

module.exports = GreetMe;