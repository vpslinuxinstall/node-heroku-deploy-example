const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer();

server.on("request", function(req, res) {
  res.end("hello worldhello worldhello worldhello worldhello world");
});

server.listen(port, function() {
  console.log("Listen on port " + port);
});
