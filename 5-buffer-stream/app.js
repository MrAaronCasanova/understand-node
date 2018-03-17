var buf = new Buffer('Casanova', 'utf8');

console.log(buf); // <Buffer 43 61 73 61 6e 6f 76 61>

console.log('-------------------------');

console.log(buf.toString()); // Casanova

console.log('-------------------------');

console.log(buf.toJSON()); // { type: 'Buffer', data: [ 67, 97, 115, 97, 110, 111, 118, 97 ] }

console.log('-------------------------');

console.log(buf[2]); // 115

console.log('-------------------------');

buf.write('Waz');
console.log(buf.toString());
