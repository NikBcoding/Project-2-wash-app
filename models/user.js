var mongoose = require('mongoose');

var Schema = mongoose.Schema;



var carSchema = new Schema({
    year: {
        type: Number
    },
    make: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    color: {
        type: String
    },
    typeOfVehicle: {
        type: String,
        enum: ['Coupe', 'Sedan', 'SUV', 'Truck', 'Van'],
        require: true
    }

});

var userSchema = new Schema({
    name: String,
    email: String,
    phoneNum: Number,
    googleId: String
}, {
    timestamps: true 
}, {
    cars: [carSchema]
});

module.exports = mongoose.model('User',userSchema)