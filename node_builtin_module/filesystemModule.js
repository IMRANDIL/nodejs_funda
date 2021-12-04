// file system module...
const { readFileSync, writeFileSync, read } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

const writefile = writeFileSync('./content/result.txt', `Hey this my first writefile: ${first + second}`, { flag: 'a' })
console.log('done with this task');
console.log('starting the next one');
// flag is to append the items...