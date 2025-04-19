const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello world");
  }

  if (req.url === "/profile") {
    res.end("saranj");
  }

  if (req.url === "/owner") {
    res.end("demon");
  }
});

server.listen(8080);
