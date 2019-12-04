const Request = require('../models/request');
// const Client = require('../models/client');

module.exports = {
    show,
    index,
    create,
    new: newRequest,
    update,
    delete: deleteRequest
};

function index(req,res) {
    Request.find({}, function(err, requests) {
        res.render('requests/index', {requests});
    });
}

