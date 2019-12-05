var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema({
    userId: String,

    name: String,
    email: String,
    phoneNum: Number,
    googleId: String,
    // cars: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Cars'
    // }]
}, {
    timestamps: true 
});

module.exports = mongoose.model('Client',clientSchema)