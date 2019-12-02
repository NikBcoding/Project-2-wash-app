const Request = require('../models/request');
const Client = require('../models/client');

module.exports = {
    create,
    new: newRequest,
    update,
    delete: deleteRequest
};