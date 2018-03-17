console.log('-------------------------');

// Buffer Basics

var buf = new Buffer('Casanova', 'utf8');

console.log(buf); // <Buffer 43 61 73 61 6e 6f 76 61>
// outputs binary data (in hexadecimal notation)

console.log('-------------------------');

console.log(buf.toString()); // Casanova

console.log('-------------------------');

console.log(buf.toJSON()); // { type: 'Buffer', data: [ 67, 97, 115, 97, 110, 111, 118, 97 ] }

console.log('-------------------------');

console.log(buf[2]); // 115

console.log('-------------------------');

buf.write('Waz');

console.log(buf.toString()); // Wazanova

// ---------------------------------------------------------------

console.log('-------------------------');

// ES6 Typed Array

var buffer = new ArrayBuffer(8); // aka. 64 bits
// ArrayBuffer wants an argument of the size in bytes (or 8 bits)
// ArrayBuffer is not part of node, but rather a feature of ES6

// We create a 'view' which is a typed array
// useful for dealing with binary data in a buffer
var view = new Int32Array(buffer);
// Int32Array - refers to how many bits we will use to store each number - in this case we would only be able to store 2 32bit numbers

view[0] = 9; // adds 32bit encoding of 9 to buffer
view[1] = 23; // adds 32bit encoding of 23 to buffer
view[2] = 923; // nothing - no room left in buffer (64bit limit)
console.log(view); // Int32Array [9, 23]
