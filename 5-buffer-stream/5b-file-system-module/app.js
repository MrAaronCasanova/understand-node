var fs = require('fs');

// Synchronous - read hello.txt on file system
// analyze binary data to utf8 encoding format
var greet = fs.readFileSync(__dirname + '/hello.txt', 'utf8');
console.log(greet);

// Asynchronous - read hello.txt on file system
// analyze binary data to utf8 encoding format
// run callback when file successfully read
var greet2 = fs.readFile(__dirname + '/hello.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log('Done');
