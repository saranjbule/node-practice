const fs = require('fs');

const a = 10;

setImmediate(() => console.log('setImmediate log'));

Promise.resolve().then(() => console.log('Promise log'));

fs.readFile('./demo.txt', 'utf8', () => {
  console.log('fs log');
});

setTimeout(() => console.log('setTimeout log'));

process.nextTick(() => console.log('process log'));

function printA() {
  console.log(a);
}

printA();

console.log('main file last log');

/**
 * op -
 * 10
 * main file last log
 * process log
 * Promise log
 * setTimeout log
 * setImmediate log
 * fs log
 */
