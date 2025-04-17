const fs = require('fs');

setImmediate(() => console.log('setImmediate log'));

setTimeout(() => console.log('setTimeout log'));

Promise.resolve().then(() => console.log('Promise log'));

fs.readFile('./demo.txt', 'utf8', () => {
  setTimeout(() => console.log('fs setTimeout log'));

  process.nextTick(() => console.log('fs process log'));

  setImmediate(() => console.log('fs setImmediate log'));

  console.log('fs console log');
});

process.nextTick(() => console.log('process log'));

console.log('main file log');

/**
 * op -
 * - Main Thread | sync
 *   - main file log
 *
 * - Event loop | async | libuv
 *   - Priority queue
 *     - process log
 *     - promise log
 *
 *   - Phases queue
 *     - setTimeout log
 *     - setImmediate log
 *
 *   - fs callback | event loop wait at poll phase
 *     - Main thread
 *       - fs console log
 *
 *     - Event loop
 *       - Priority
 *         - fs process log
 *
 *       - Phases
 *         - fs setImmediate log
 *         - fs setTimeout log
 */
