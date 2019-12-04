const Car = require('../models/car');
// const Request = require('../models/request');

module.exports = {
    showTheFormPage,
    create
}


function showTheFormPage(req, res) {
    res.render('cars/new')
}

function create(req, res) {
    var car = new Car(req.body);
    car.userId = (req.user._id)
    car.save(function(err) {
        if (err) return res.render('cars/new');
        res.redirect('/client')
    })
}

