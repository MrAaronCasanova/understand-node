'use strict';

var EventEmitter = require('events');

// class expression
module.exports = class Greetr2 extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello ';
  }

  greet(name) {
    console.log(this.greeting + name);
    this.emit('greet', name); // magic string, not ideal
    // able to use .emit via reference to EventEmitter's prototype
  }
};
