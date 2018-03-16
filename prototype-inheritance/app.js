var person = {
  firstname: '',
  lastname: '',
  greet() {
    console.log(`${this.firstname} ${this.lastname}`);
  }
};

var aaron = Object.create(person); // creates new obj and points to person prototype
aaron.firstname = 'Aaron';
aaron.lastname = 'Casanova';
aaron.greet();

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
john.greet();

// Object.create - simple and clean way to setup
// a sequence of objects that inherit from one another
// (via the protoype chain)

console.log('------------------------------------');

var EventEmitter = require('events'); // require node event emitter
var util = require('util'); // require util to use .inherits

function Greetr() {
  // set up Greetr function constructor
  this.greeting = 'Hello ';
}

util.inherits(Greetr, EventEmitter); // Points the Greetr prototype to the EventEmitter's prototype

Greetr.prototype.greet = function(name) {
  // adding method to Greetr prototype
  console.log(this.greeting + name);
  this.emit('greet', name); // magic string, not ideal
  // able to use .emit via reference to EventEmitter's prototype
};

var greeter1 = new Greetr(); // created new object from Greetr constructor

greeter1.on('greet', function(name) {
  // greeter1 has access to .on
  // via its reference to the EventEmitter's prototype
  console.log('Someone greeted ' + name);
});

greeter1.greet('Aaron'); // calling method on Greetr prototype
