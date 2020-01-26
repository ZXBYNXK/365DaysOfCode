
const mongoose = require('mongoose'),
Post = mongoose.Schema({


 //   Got rid of this for now, trying to add a user object instead from the 'User.js' Schema File file
    name: {
        type: String,
        required: true
    },


    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Posts', Post)
