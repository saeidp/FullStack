const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);

// in node you had to use this
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("Hello World from nodejs");
//   res.end();
// });

// server.listen("3000");
