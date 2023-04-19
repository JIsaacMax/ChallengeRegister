const fs = require('fs');
const data = require('./data');

//Create new book
exports.post = function(req, res) {

    const keys = Object.keys(req.body);

    for(key of keys) {
        if(req.body[key] == "")
            res.send('Please, fill all fields');
        else
            res.send(req.body);
    }

    data.push(req.body);

    fs.writeFile(data, JSON.stringify(data,null, 4), function(err) {
        if(err) return res.send("Write file error!");
        return res.redirect("/");
    });
}