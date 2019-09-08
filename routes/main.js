const express = require('express');

const mainController = require('../controllers/main_controller');

const router = express.Router();

router.get('/get_user', mainController.getUser);

router.post('/put_trip', mainController.postCreateTrip);

router.get('/get_user_activities', mainController.getUserActivities);

router.get('/events', mainController.getEvent)
router.post('/event', mainController.createEvent);

router.get('/get_user_trips', mainController.getUserTrips);

router.post('/', mainController.getTest);



module.exports = router;