var express = require('express');
var router = express.Router();
var requestsCtrl = require('../controllers/requests')


router.get('/cars/:id/requests/new', requestsCtrl.new)
router.post('/requests/:id', requestsCtrl.update)
router.post('/cars/:id/requests', requestsCtrl.create)
router.get('/requests/:id/edit', requestsCtrl.editRequest)
router.delete('/requests/:id', requestsCtrl.delete)



module.exports = router;
