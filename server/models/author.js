var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');
mongoose.Promise = global.Promise;
console.log('mongo file')

var AuthorSchema = new mongoose.Schema({
    name: String,
    createdAt : Date,
    updatedAt : Date
})
mongoose.model('Author', AuthorSchema);
console.log('models file')

module.exports = {
    author : mongoose.model('Author') 
}
