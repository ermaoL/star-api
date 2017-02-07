var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var starSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    url: {
        type: String,
    },
    private: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


module.exports = mongoose.model("Star", starSchema);