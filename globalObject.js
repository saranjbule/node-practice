console.log(this); // `this` refers to module.exports, which is {} by default

console.log(global); // global object

console.log(globalThis); // global object

// global and globalThis are part of node and not V8

// globalThis is a standard way to access global object in Node or web browser
