const express = require("express");
const nunjucks = require("nunjucks");
const server = express();
const routes = require("./routes");
const data = require("./data");
const port = 3000;

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(port, function () {
  console.log("Server is running on port " + port);
});
