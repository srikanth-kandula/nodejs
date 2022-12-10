var Emitter = require('./custom-events');

var eventEmitter = new Emitter();

eventEmitter.on('greet', function() {
  console.log('Event greet occurered, and is listened');
});

eventEmitter.on('greet', function () {
  console.log('Event greet occurered, and is listened by another listener');
});

eventEmitter.emit('greet');