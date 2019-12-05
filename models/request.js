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
    wash: {
        type: Boolean,
        default:false
    },
    intVac: {
        type: Boolean,
        default:false 
    },
    upholDet: {
        type: Boolean,
        default:false
    },
    engineBayDet: {
        type: Boolean,
        default:false
    },
    rimDet: {
        type: Boolean,
        default:false
    },
    trunkVac: {
        type: Boolean,
        default:false
    },
    extraComments: {
        type: String
    },
    timestamps: true
});

module.exports = mongoose.model('Request', requestSchema)