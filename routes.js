const express = require("express");
const routes = express.Router();
const data = require("./data");
const validBook = require("./registerBook");

routes.get("/", (req, res) => {
  return res.render("index", { items: data });
});

routes.get("/singup", (req, res) => {
  return res.render("singup", { items: data });
});

routes.get("/listing/:id", validBook.show);

routes.post("/listing", validBook.post);

module.exports = routes;
