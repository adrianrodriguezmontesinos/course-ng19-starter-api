const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

router.get('/:type', trainerController.getTrainersByType);

module.exports = router;
