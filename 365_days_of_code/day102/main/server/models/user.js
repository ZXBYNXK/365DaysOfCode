const mongoose = require('mongoose'),
UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            minlength: 2,
            maxlength: 14,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 24
        },
        online: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            all: {}            
        },
        registerDate: {
            type: Date,
            date: Date.now
        }

    }
)

module.exports = mongoose.model('User', UserSchema);