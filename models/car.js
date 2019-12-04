var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var carSchema = new Schema({
    userId: String,
    year: String,
    make: {
        type: String,
        // require: true
    },
    model: {
        type: String,
        // require: true
    },
    color: {
        type: String
    },
    typeOfVehicle: {
        type: String,
        enum: ['Coupe', 'Sedan', 'SUV', 'Truck', 'Van'],
        // require: true
    },
});

module.exports = mongoose.model('Car',carSchema)