const fs = require("fs");

setImmediate(() => console.log("immediate"));

setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => console.log("promise"));

fs.readFile("./demo.txt", "utf8", () => {
  console.log("file");
});

process.nextTick(() => {
  process.nextTick(() => {
    console.log("inner tick");
  });
  console.log("nextTick");
});

console.log("file log");

/**
 * Op
 * - main thread
 *   file log
 * 
 * - Event loop
 *   - Priority
 *     nextTick
 *     inner tick
 *     promise
 * 
 *    - timer phases
 *      timeout
 * 
 *    - poll phase | fs under execution
 *
 *    - check phase
 *      immediate
 * 
 *    - file
 */
