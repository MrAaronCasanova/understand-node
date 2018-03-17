var greeting = require('./greeting.json');

function greet() {
  console.log(greeting.en);
}
module.exports = greet;
