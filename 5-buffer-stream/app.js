console.log('-------------------------');

// Buffer Basics

var buf = new Buffer('Casanova', 'utf8'); // 8bit encoding (states each character should be encoded in bytes)

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

// --------------------------------------

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

// --------------------------------------

// Streams in Node

console.log('-------------------------');
console.log('-------------------------');

// core node file system module
var fs = require('fs');

// createReadStream returns on object
// reads the specified file and fills a buffer
var readable = fs.createReadStream(__dirname + '/greet.txt');
// if file is bigger than buffer the data will be split into chunks - default buffer is 64KB

// event emitted by the read stream is 'data'
readable.on('data', function(chunk) {
  // .on methods is available to createReadStream as it inherits from the EventEmitter
  console.log(chunk);
  console.log('-------------------------');
});

// specifying option to get strings instead of buffers
var readableString = fs.createReadStream(__dirname + '/greet.txt', {
  // encodes binary data in the stream
  encoding: 'utf8',
  // specifies the number of bytes we want our buffer size to be (chunk size)
  highWaterMark: 1024 // 1KB
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

module.exports = readableString.on('data', function(chunk) {
  console.log(chunk); // chunk of utf8 encoded string
  console.log(chunk.length + 'based on highWaterMark');
  console.log('****************************');
  writable.write(chunk);
});
