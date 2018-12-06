var controller = require('../controllers/authors')
var path = require('path')

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname + 'index.html')
    })
    
    app.get('/authors', function(req, res){
        controller.getAllAuthors(req, res)
    })

    app.post('/new', function(req, res){
        controller.makeNewAuthor(req, res)
    })

    app.get('/getAuthor/:id', function(req, res){
        controller.getAuthor(req, res)
    })

    app.post('/update', function(req, res){
        controller.updateAuthor(req, res)
    })

    app.get('/delete/:id', function(req, res){
        controller.deleteAuthor(req, res)
    })

    app.all('*', function(req, res){
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })

}