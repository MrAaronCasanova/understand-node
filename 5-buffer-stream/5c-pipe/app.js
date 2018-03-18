var fs = require('fs');
var zlib = require('zlib'); // part of Node core
// allows us to implement a gzip file (zip file)

// creates reabable stream connected to greet.txt
var readable = fs.createReadStream(__dirname + '/greet.txt');

// creates writable stream connected to greetcopy.txt
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// creates another writable stream connected to greet.txt.gz
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// creates a transform stream (readable/writable)
// transform streams can manipulate data - e.g. compress data
var gzip = zlib.createGzip(); // compresses each chunk sent to it
// the stream creates a compressed file one chunk at a time

// excuting copy - (can't chain pipe methods because 'writable' stream is only writable (must be both readable & writable))
readable.pipe(writable);

// pipe(gzip) does nothing but manipulate the contents of the stream - reads as chunks come in and adjusts content - as the compressed chunks go out of gzip they are piped 'pipe(compressed)' into the compressed file
readable.pipe(gzip).pipe(compressed);
// readable chunks are piped to gzip lib and compressed
// compressed gzip chunks are piped and written to compressed file
