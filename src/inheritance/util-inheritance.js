/**
 * inherting using Util module is discouranged, instead use class extends...
 */
var Util = require('util');
let EventEmitter = require('events');

function MyCnstrFunc() {
  EventEmitter.call(this); //it ensures, all the properties/functions defined inside EventEmitter class object are added on the empty 'this' created and passed during invokation of this constructor function using the 'new' keyword. Thus along with inheriting prototype using .inherits of Util module, this line of code ensures, the inheritance is complete.
  this.greeting = 'Hey there'
}

Util.inherits(MyCnstrFunc, EventEmitter); //MyCnstrFunc prototype is set to the prototype of EventEmitter
MyCnstrFunc.prototype.greet = function(name) {
  console.log(`${this.greeting} ${name}`)
}

let greeter = new MyCnstrFunc();

//below methods are available because of the prototypal inheritance
greeter.on('speak', greeter.greet);
greeter.emit('speak', 'Srikanth');