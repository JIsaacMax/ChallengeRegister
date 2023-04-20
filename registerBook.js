const fs = require('fs');
const data = require('./data');

//Route by ID
exports.show = function(req, res) {
    const { id } = req.params;

    const foundBook = data.books.find(function(book) {
        return book.id == id;
    });

    if(!foundBook) return res.send("Book not found!");

    const book = {
        ...foundBook,
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundBook.created_at)
    }

    return res.render("book", { book });
}

//Create new book
exports.post = function(req, res) {

    const keys = Object.keys(req.body);

    for(key of keys) {
        if(req.body[key] == "")
            res.send('Please, fill all fields');
    }

    req.body.created_at = Date.now();
    req.body.id = Number(data.books.length + 1);
    data.books.push(req.body);

    fs.writeFile("data.json", JSON.stringify(data,null, 4), function(err) {
        if(err) return res.send("Write file error!");
        return res.redirect("/");
    });
}