var express = require('express');
var router = express.Router();
var clientCtrl = require('../controllers/clients')

router.get('/', clientCtrl.index);

module.exports = router;
