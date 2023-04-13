const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const data = require('./data');
const port = 3000;

server.use(express.static('public'));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get('/', function (req, res) {
    return res.render("index", { items: data });
});

server.listen(port, function (){
    console.log('Server is running on port ' + port);
})