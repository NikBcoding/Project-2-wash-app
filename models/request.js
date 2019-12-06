var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema ({
    serviceLocation: {
        type: String,
        require: true
    },
    serviceDate: {
        type: Date,
        require: true
    },
    time: {
        type: String,
        enum: ['8:00 A.M.','9:00 A.M.',
               '10:00 A.M.', '11:00 A.M.', 
               '12:00 P.M.', '1:00 P.M.', 
               '2:00 P.M.', '3:00 P.M.', 
               '4:00 P.M.', '5:00 P.M.'],
        required: true
    },
    wash: {
        type: String,
        enum: ['Yes', 'No'],
        require: true
    },
    intVac: {
        type: String,
        enum: ['Yes', 'No'],
        require: true
    },
    upholDet: {
        type: String,
        enum: ['Yes', 'No'],
        require: true
    },
    engineBayDet: {
        type: String,
        enum: ['Yes', 'No'],
        require: true
    },
    rimDet: {
        type: String,
        enum: ['Yes', 'No'],
        require: true
    },
    trunkVac: {
        type: String,
        enum: ['Yes', 'No'],
        require: true
    },
    comments: {
        type: String
    },
   car: {
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Request', requestSchema)