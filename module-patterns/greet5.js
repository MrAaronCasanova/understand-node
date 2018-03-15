// Revealing Module Pattern

var greeting = 'Hello World!!!!';

function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
};

// var greeting is not exposed/accessible outside the mod
// we can take advantage of private properties and methods
// only export what you want to be accesible outside the file
