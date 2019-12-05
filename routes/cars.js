var express = require('express');
var router = express.Router();
var carsCtrl = require('../controllers/cars')

// router.post('/:id', carsCtrl.create)
// router.get('/:id/cars/new', carsCtrl.new);

router.get('/new', carsCtrl.new)
router.get('/', carsCtrl.index)
router.post('/', carsCtrl.create)
router.post('cars/:id/new', carsCtrl.editCar)


module.exports = router;


