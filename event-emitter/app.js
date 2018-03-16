// Custom Event Emitter

var Emitter = require('./emitter');

emtr = new Emitter();

emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occured!');
});

console.log('Hello');

emtr.emit('greet');

console.log('---------------------------------------');

// Built-In Node Event Emitter

var NodeEmitter = require('events');
var eventConfig = require('./config').events; // setup to avoid magic string issues

nodeEmtr = new NodeEmitter();

nodeEmtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello.');
});

nodeEmtr.on(eventConfig.GREET, function() {
  console.log('A greeting occured!');
});

console.log('Hello');

nodeEmtr.emit(eventConfig.GREET);
