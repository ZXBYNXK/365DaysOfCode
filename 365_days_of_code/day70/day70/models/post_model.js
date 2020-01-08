const mongoose = require('mongoose'),


// Create skeleton


    PostSchema = mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
        
    });


  



//Export Schema
    module.exports = mongoose.model('Post', PostSchema)
                    //Use the 'model()' mongoose method in order to export a specific model