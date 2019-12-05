const Car = require('../models/car');
const Client = require('../models/client')
// const Request = require('../models/request');

module.exports = {
  new: newCar,
  create,
  index,
  editCar
}


function newCar(req, res) {
  res.render('cars/new')
}

function create(req, res) {
  var car = new Car(req.body);
  car.client = req.user._id
  car.save(function(err) {
      if (err) return res.redirect('/cars/new');
      res.redirect('/client')
  })
}

function index(req, res) {
  Car.find({client: req.user}, function(err, cars){
    res.redirect("/client")
  })
}

function editCar(req, res) {
  Car.findById(req.params.id, function(err, car) {
    client.car.push(req.user._id);
    client.save(function(err) {
      res.redirect('/cars/:id/new');
    })
  })
}
