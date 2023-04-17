const express = require('express');
const routes = express.Router();
const data = require('./data');

routes.get('/', (req,res)=>{
    return res.render("index", { items: data });
})

module.exports = routes;