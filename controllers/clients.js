const Client = require ('../models/client');
const Car = require('../models/car')
// const Request = require('../models/request');

module.exports = {
    index
}


function index(req, res) {
    Car.find({client: req.user}, function(err, cars){
        res.render('client', {
            cars,
            user: req.user
        })
    })
}