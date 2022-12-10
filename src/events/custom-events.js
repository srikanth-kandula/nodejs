/**
 * A simpler version of nodejs implementation of the event emitter
 */

function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function (type, listener) {
  if (!this.events[type]) {
    this.events[type] = [];
    this.events[type].push(listener);
  } else {
    this.events[type].push(listener);
  }
};

Emitter.prototype.emit = function(type) {
  if(this.events[type]) {
    for(let listener of this.events[type]) {
      listener();
    }
  } else {
    console.log('There is no event listener for ' + type);
  }
}

module.exports = Emitter;