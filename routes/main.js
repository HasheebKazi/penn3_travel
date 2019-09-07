const express = require('express');

const mainController = require('../controllers/main_controller');

const router = express.Router();

router.post('/', mainController.getTest);

module.exports = router;