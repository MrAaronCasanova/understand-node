var greet1 = require('./greet1');
greet1(); // Hello World

var greet2 = require('./greet2').greet();
greet2; // Hello World!

var greet3A = require('./greet3');
greet3A.greet(); // Hello World!!
greet3A.greeting = 'Changed Hello World!!';

var greet3B = require('./greet3');
greet3B.greet(); // Changed Hello World!
// greet3 does not get called twice
// require will call the module once, and store the value in cache
// any time its required again it will reference that cache (even across files)

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet(); // Hello World!!!

var greet5 = require('./greet5').greet;
greet5();
