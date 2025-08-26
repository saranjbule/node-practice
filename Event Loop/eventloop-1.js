/**
 * Event loop consist of 4 main phases
 * each phase has different callback queues
 * (libuv have multiple callback queues)
 *
 * the run sequence of the phases are as follows
 *
 * 1. Timer (used for setTimeout, setInterval callbacks)
 *
 * 2. Poll (used for I/O callbacks, incoming connections, data, fs, crypto, http.get...)
 *    - it handles majority of callbacks
 *
 * 3. Check (used for setImmediate callbacks)
 *
 * 4. Close (used for closing callbacks such as socket callback)
 *
 * before each phase,
 * event loop check for
 *
 * 1. process.nextTick() callbacks
 *
 * 2. promise callbacks
 *
 * process & promise also have separate callback queues in each phase | 4 * 2 = 8
 *
 * Event loop wait at Poll phase
 */

const fs = require('fs');

const a = 10;

setImmediate(() => console.log('setImmediate log'));

fs.readFile('./demo.txt', 'utf8', () => {
  console.log('fs log');
});

setTimeout(() => console.log('setTimeout log'));

function printA() {
  console.log(a);
}

printA();

console.log('main file last log');

/**
 * op -
 * 10
 * main file last log
 * setTimeout log
 * setImmediate log
 * fs log | file reading take some time not an immediate task
 */
