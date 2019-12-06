var express = require('express');
var router = express.Router();
var carsCtrl = require('../controllers/cars')


router.get('/new', carsCtrl.new)
router.get('/', carsCtrl.index)
router.post('/:id', carsCtrl.update)
router.post('/', carsCtrl.create)
router.get('/:id/edit', carsCtrl.editCar)
router.delete('/:id', carsCtrl.delete)

module.exports = router;


