// const Client = require ('../models/client');
// const Request = require('../models/request');

module.exports = {
    index
}


function index(req, res) {
    res.render('client', {
        name: req.user.name, 
        user: req.user,
        client: req.user,
    })
}
    