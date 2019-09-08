const User = require('../models/user');
const Trip = require('../models/trips'); 
const Event = require('../models/events');
const mongoose = require('mongoose');

exports.getTest = (req, res, next) => {
    res.json({
        name: 'Max',
        id: 123,
        startDate: {
            month: 1,
            day: 20,
            year: 2019
        }
    });
};

exports.getUser = (req, res, next) => {
    // const email = 'test2@mail.com';
    const email = req.query.email;
    User.findOne({ email: email})
    .then(user => {
        if(!user) {
            return res.json({
                error: 'user not found',
                format: 'use format e.g: http://localhost:3000/get_user?email=test@mail.com'
            });
        } else {
            return res.json({
                id: user._id.toString(),
                email: user.email,
                description: user.description,
                activities: user.activities
            });
        }
    })
    .catch(err => {
        console.log(err);
        throw 'server err failed to find user';
    });
};

exports.postCreateTrip = (req, res, next) => {
    console.log('enter route')
    const email = req.body.email;
    const starting_time = req.body.start_time;
    const ending_time = req.body.ending_time;
    const city = req.body.city;
    let keyWord = req.body.key_words.split(',');
    // console.log('================================')
    // console.log(keyWord);
    let array1 = [];
    keyWord.forEach(p => {

        array1.push(p.trimStart());
    })

    let XXuser;


    User.findOne({ email: email})
    .then((user) => {
        XXuser = user;
        const trip = new Trip({
            email: email,
            userId: user._id,
            starting_time: starting_time,
            ending_time: ending_time,
            city: city,
            key_words: array1
        });
    
        return trip.save()
    })
    // .then(result => {
    //     console.log(result);
    //     res.status(200).json({
    //         success: '200 success found',
    //     })
    // })

    .then(result => {
        return Trip.find({
            start_time: starting_time,
            city: city
        })
    })
    .then(trip => {
        const event = new Event({
            ownerEmail: email,
            ownerId: XXuser._id,
            participantList: [
                trip.email, XXuser
            ],
            starting_time: trip.starting_time,
            ending_time: trip.ending_time,
            city: 'Orlando, FL',
            commonActivities: ['nice times', 'feels good']
        });
        return event.save();
    })
    .then(event => {
        console.log('created event ==========================')
        console.log(event);
        res.status(200).json({
            event: event,
            success: '200 success'
        })
    })
    .catch(err => console.log(err));
};

exports.getUserActivities = (req, res, next) => {

    console.log('get user activities route reached')
    const email = req.query.email;
    User.findOne({ email: email })
    .then(user => {
        if(!user) {
            return res.json({
                error: 'user not found',
                format: 'use format e.g: http://localhost:3000/get_user?email=test@mail.com'
            });
        } else {
        // console.log('get a request');;
        console.log('====================');
        console.log(user)

            return res.json({
                activities: user.activities,
                id: user._id,
                email: user.email,
                description: user.description,
                pnum: user.pnum
            });
        }
    })
    .catch(err => {
        console.log(err);
        throw 'server err failed to find user';
    });
};

exports.findInnocentPrey = (req, res, next) => {

}

exports.getUserTrips = (req, res, next) => {
    const email = req.query.email;
    User.findOne({ email: email})
    .then(user => {
        if(!user) {
            return res.json({
                error: 'user not found',
                format: 'use format e.g: http://localhost:3000/get_user?email=test@mail.com'
            });
        } else {
            console.log(user)
            return Trip.find({ userId: user._id})
        }
    })
    .then(trips => {
        console.log(trips);
        return res.json({
            trip: trips
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.createEvent = (req, res, next) => {
    console.log('enter route')
    const email = req.body.email;
    const starting_time = req.body.start_time;
    const ending_time = req.body.ending_time;
    const city = req.body.city;
    const participants = req.body.participants;


    User.findOne({ email: email})
    .then((user) => {
        const event = new Event({
            ownerEmail: email,
            ownerId: user._id,
            starting_time: starting_time,
            ending_time: ending_time,
            city: city,
            participantList: participants,
            commonActivities: user.activities
        });
    
        return event.save()
    })
    .then(result => {
        // console.log(result);
        // res.status(200).json({
        //     success: '200 success found',
        // })
        return Trip.find({
            start_time: starting_time,
            city: city
        })
        .toArray()
    })
    .then(trips => {
        res.status(200).json({
            success: '200 success found',
        })
    })
    .catch(err => console.log(err));
};

exports.getEvent = (req, res, next) => {
// const email = 'test2@mail.com';
    const email = req.query.email;
    Trip.findOne({ email: email})
    .then(trip => {
        if(!trip) {
            return res.status(404).json({
                error: 'event not found',
                format: '==============='
            });
        } else {
            return res.status(200).json({
                trip: trip
            });
        }
    })
    .catch(err => {
        console.log(err);
    });
};