/**
 * By default libuv thread pool size is 4
 * 
 * Use of thread pool comes when using crypto, dns lookup or fs
 * 
 * process.env.UV_THREADPOOL_SIZE = <number>, to update thread pool size
 */

const crypto = require("crypto");

crypto.pbkdf2("password-hello-world", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1");
});

crypto.pbkdf2("password-hello-world", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("2");
});

crypto.pbkdf2("password-hello-world", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("3");
});

crypto.pbkdf2("password-hello-world", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("4");
});

crypto.pbkdf2("password-hello-world", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("5");
})