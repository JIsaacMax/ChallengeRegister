const express = require("express");
const routes = express.Router();
const data = require("./data");
const validBook = require("./registerBook");

routes.get("/", (req, res) => {
  return res.render("index", { items: data });
});

routes.get("/listing", (req, res) => {
  return res.render("listing", { items: data });
});

routes.post("/listing", validBook.post);

module.exports = routes;
