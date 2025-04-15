// app.js is entry point of node js application it can be main.js or index.js
// need to specify in package.json file as "main" = "app.js" 

console.log("app 1");

// commonjs (cjs) | default | "type" = "commonjs"
// old way | synchronous | runs in non-strict mode
const { sum, m1 } = require("./modules"); // op: module log
// require work without extension (.js)

// esmodule (esm | mjs) | "type" = "module"
// new way | async | runs in strict mode by default
// import { sum, m1 } from "./modules.js";

console.log("hello Node");

const a = 10,
  b = 20;

console.log(sum, m1); // function 1
console.log(sum(a, b)); // 30

const { add, subtract } = require("./calculator"); // index file is not needed as by default pick from index

console.log("calculator", add(a, b), add);
console.log("calculator", subtract(b, a), subtract);
