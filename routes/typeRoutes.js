const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController');

router.get('/', typeController.getTrainersTypes);

module.exports = router;
