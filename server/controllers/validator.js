var validator = require('validator')

module.exports = {
    validateForm : function(postData){
        var errors = {}
        if (postData.name.length == 0){
            errors.name = 'Name cannot be empty'
        }
        else if (postData.name.length < 3) {
            errors.name = 'Name must be greater than 3 characters'
        }
        else if (!validator.isAlpha(postData.name)) {
            errors.name = 'Name must only contain letters'
        }

        var count = 0
        for (key in errors){
            count++
        }

        errors.count = count
        return errors

    }
}