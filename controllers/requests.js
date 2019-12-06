const Request = require('../models/request');
const Client = require('../models/client');
const Car = require('../models/car');

module.exports = {
    new: newRequest,
    create,
    index,
    editRequest,
    update,
    delete: deleteRequest
};

// function index(req,res) {
//     Request.find({}, function(err, requests) {
//         res.render('requests/index', {requests});
//     });
// }
function newRequest(req, res) {
    Car.findById(req.params.id, function(err, car){
        res.render('requests/new', {
            car,
            user: req.user
        })
    })
}
function create(req, res) {
    var request = new Request(req.body);
    request.car = req.user._id
    request.save(function(err) {
        if (err) return res.redirect(`/cars/${req.params.id}/requests/new`);
        res.redirect('/client')
        
    })
}

function index(req, res) {
    Request.find({request: req.user}, function(err, cars){
      res.redirect("/client")
    })
}

function editRequest(req, res) {
    Request.findById(req.params.id, function(err, request) {
      res.render('requests/edit', {
        request
      });
    })
}

function update(req, res) {
    Request.findByIdAndUpdate(req.params.id, req.body)
    .then(res.redirect('/client'))
}

function deleteRequest(req, res) {
    Request.deleteOne({'_id':req.params.id}, function(err, request) {
      res.redirect('/client')
    })
}