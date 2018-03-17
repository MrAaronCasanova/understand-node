'use strict';

// Ex. 1

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

// Ex. 2

var EventEmitter = require('events'); // require node event emitter
var util = require('util'); // require util to use .inherits

// set up Greetr function constructor
function Greetr() {
  EventEmitter.call(this); // invokes the EventEmitter constructor pointing 'this' to the new object
  // like calling super() - util.inherits will only reference/connect EventEmitter's prototype (below)
  // so we need to .call(this) to point the properties and methods of the EventEmitter constructor to the new object created by the Greetr constructor

  this.greeting = 'Hello ';
}

util.inherits(Greetr, EventEmitter); // Points the Greetr prototype to the EventEmitter's prototype

// adds greet method to Greetr prototype
Greetr.prototype.greet = function(name) {
  console.log(this.greeting + name);
  this.emit('greet', name); // magic string, not ideal
  // able to use .emit via reference to EventEmitter's prototype
};

var greeter1 = new Greetr(); // creates new object from Greetr constructor

greeter1.on('greet', function(name) {
  // greeter1 has access to .on
  // via its reference to the EventEmitter's prototype

  console.log('Someone greeted ' + name);
});

greeter1.greet('Aaron'); // calling method on Greetr prototype

console.log('------------------------------------');

// Ex. 3

class Person {
  // constuctor is run every time an new obj is created via Person constructor function
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // syntactic sugar for adding method to Person.prototype
  greet() {
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
  }
}

var casy = new Person('Aaron', 'Casanova');

casy.greet(); // invoking Person.prototype method

console.log(casy.__proto__); // Person {}
console.log(Person.prototype); // Person {}
console.log(casy.__proto__ === Person.prototype); // true

console.log('------------------------------------');

// Ex. 4 - class constructor refactor of Ex. 2

var Greetr2 = require('./greetr2');

var greeter2 = new Greetr2(); // creates new object from Greetr constructor

greeter2.on('greet', function(name) {
  // greeter2 has access to .on
  // via its reference to the EventEmitter's prototype

  console.log('Someone greeted ' + name);
});

greeter2.greet('Casy'); // calling method on Greetr prototype
