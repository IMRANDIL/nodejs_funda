// file system module...
const { readFileSync, writeFileSync, read } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

const writefile = writeFileSync('./content/result.txt', `Hey this my first writefile: ${first + second}`, { flag: 'a' })

// flag is to append the items...