/**
 * Node.js uses libuv; browsers use Web APIs for async operations.
 */

const https = require("https"); // synchronous operation
const fs = require("fs"); // synchronous operation
const crypto = require("crypto"); // synchronous operation
// can be written as node:crypto or node:https

/**
 * Variables a and b are stored in the stack (within the local memory of the execution context).
 * Objects and functions are stored in the heap, with references to them on the stack
 */
const a = 34253;
const b = 423982;

// asynchronous operation handled by libuv
https.get("https://dummyjson.com/test", (res) => {
  console.log("API resolved", res?.statusMessage);
});

// synchronous operation
console.log("first log");

// The greet function is stored in the heap, and a reference to it is stored in the stack.
const greet = () => {
  return "hello from greet";
};

// pbkdf2 = password based key derivation function 2
// Synchronous function - block main thread (not handle by libuv)
const key = crypto.pbkdf2Sync("demo-password", "salt", 50000, 50, "sha512");
console.log("first key generated", key);
// async function - (handle by libuv)
crypto.pbkdf2("demo-password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second key generated", err, key);
});

// multiply function get stored into heap memory
const multiply = (a, b) => {
  return a * b;
};

// asynchronous operation handled by libuv
fs.readFile("./demo.txt", "utf8", (err, data) => {
  console.log("file data processed", data);
});

// asynchronous operation handled by libuv (timer)
setTimeout(() => console.log("setTimeout log after 5sec"), 5000);
setTimeout(() => console.log("setTimeout log after 0sec"), 0); // it get called only when call stack | main thread is empty

// synchronous operation (local execution context is created for greet)
console.log(greet());

// synchronous operation (local execution context is created for multiply and computed result is sotred into c i.e., stack)
const c = multiply(a, b);
console.log(c);

// synchronous operation
console.log("last log");
