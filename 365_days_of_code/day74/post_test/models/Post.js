const mongoose = require('mongoose'),
Post = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Posts', Post)
