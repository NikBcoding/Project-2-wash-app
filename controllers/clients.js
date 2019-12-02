const Client = require ('../models/client');
const Car = require('../models/request');

module.exports = {
    create,
    new: newCar,
    delete: deleteCar,
    show
}

function create(req, res) {
    var car = new Car(req, res);
    car.save(function(err) {
        if (err) return res.render('client/new');
        res.redirect('/client');
    });
}

function newCar(req, res, next) {
    res.render('client/new')
} 

function show(req, res) {
    Client.findById(req.params.id, function(err, client) {
        Car.find({client: client._id}, function(err, cars) {
            res.render('clients/show', { title: 'Your Vehicle', client, cars});
        })
    })
}