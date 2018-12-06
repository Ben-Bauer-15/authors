var Author  = require('../models/author').author
var validator = require('./validator')

module.exports = {
    getAllAuthors : function(req, res){
        Author.find({}, function(err, authors){
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                res.json({message : "Success", data : authors})
            }
        })
    },

    makeNewAuthor : function(req, res){
        let errors = validator.validateForm(req.body)
        console.log(errors)
        if (errors.count > 0){
            res.json({message : "Failure", data : errors})
        }
        else {
            let newAuthor = new Author({name : req.body.name, createdAt : new Date(), updatedAt : new Date()})
            newAuthor.save(function(err){
                if (err){
                    console.log("Something went wrong: ", err)
                }
                else {
                    res.json({message : "Success", data : newAuthor})
                }
            })
        }
    },
    
    getAuthor : function(req, res){
        Author.find({_id : Object(req.params.id)}, function(err, author){
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                res.json({message : "Success", data : author})
            }
        })
    },

    updateAuthor : function(req, res){
        console.log(req.body)
        let errors = validator.validateForm(req.body)
        if (errors.count > 0){
            console.log("You have errors in your form ", errors)
            res.json({message : "Failure", data : errors})
        }
        else {
            Author.updateOne({_id : Object(req.body._id)}, {$set : {name : req.body.name, updatedAt : new Date()}}, function(err, author){
                if (err){
                    console.log("Something went wrong: ", err)
                }
                else {
                    res.json({message : "Success", data : author})
                }
            })
        }
    },

    deleteAuthor : function(req, res){
        Author.remove({_id : Object(req.params.id)}, function(err){
            if (err){
                console.log("Something went wrong: ", err)
            }
            else {
                res.json({message : "Success"})
            }
        })
    }

}