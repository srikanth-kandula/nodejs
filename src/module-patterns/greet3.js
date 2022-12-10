/**
 * Even though a new object is supposed to be created, upon requiring this module in other modules,
 * changes done in module reflect in all others, as node.js returns the cached version of the module
 * and all the objects generated will point to same address as objects are of reference type.
 */

function GreetMe () {
  this.name = 'Srikanth';
  this.plainGreet = `Hi from ${this.name}`; //this seems to be evaluated only once i.e. even if name is changed,
  //this.plainGreet still logs Hi from Srikanth. Need to check on this.
  this.greet = function () {
    console.log(`Hi from ${this.name}`);
  }
};

module.exports = new GreetMe();