const Client = require ('../models/client');
const Car = require('../models/car')
const Request = require('../models/request')
// const Request = require('../models/request');

module.exports = {
    index
}


function index(req, res) {
    Car.find({client: req.user}, function(err, cars){
        Request.find({}, function(err, requests){
            res.render('client/index', {
                cars,
                user: req.user,
                requests
            })

        })
    })
}