/**
 * Without exports
 * Modules protects their variables and functions from leaking, from one module to another
 *
 * when require() function is called for this module
 * only console get printed, variable and function remains scoped to this module
 * i.e., code of this module get executed but variable and function are private to this module and not get exposed by default
 *
 * require('./path/module')
 * all code of the module get wrapped inside the function (IIFE)
 *
 * An IIFE (Immediately Invoked Function Expression),
 * executed function immediately after its definition.
 * This creates a private scope, preventing variables from polluting the global scope and promoting modularity.
 *
 * This way variable & function are private to the module
 *
 * (function (module, require, exports, __filename, __dirname, ...) {
 *   ...
 * })( module.exports={} );
 *
 * module & require is pass by node hence it can get access outside of the module
 */

console.log("module log");

function sum(a, b) {
  return a + b;
}

// esmodule (mjs | esm) pattern
// export const m1 = 1;
const m1 = 1;

console.log(module.exports); // {}

// commonjs (cjs) pattern
// module.exports = sum;
module.exports = { sum, m1 };

console.log(module, "MODULE");
console.log(exports, "EXPORTS");
console.log(require, "REQUIRE");
console.log(__filename, "FILENAME");
console.log(__dirname, "DIRNAME");
