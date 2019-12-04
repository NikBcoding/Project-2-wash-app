var express = require('express');
var router = express.Router();
var carsCtrl = require('../controllers/cars')

// router.post('/:id', carsCtrl.create)
// router.get('/:id/cars/new', carsCtrl.new);

router.get('/new', carsCtrl.showTheFormPage)
router.post('/', carsCtrl.create)



module.exports = router;


