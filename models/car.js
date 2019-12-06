var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var carSchema = new Schema({
    userId: String,
    year: String,
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    typeOfVehicle: {
        type: String,
        enum: ['Coupe', 'Sedan', 'SUV', 'Truck', 'Van'],
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Client"
    },

});

module.exports = mongoose.model('Car',carSchema)