const User = require('../models/user'); 

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
    const email = 'test@mail.com';
    // const email = req.query.email;
    User.findOne({ email: email})
    .then(user => {
        if(!user) {
            console.log('user not found');
            return null;
        } else {
            return res.json({
                id: user._id.toString(),
                email: user.email,
                description: user.description
            });
        }
    })
    .catch(err => {
        console.log(err);
        throw 'server err failed to find user';
    })

    res.json({
        name: 'Max',
        id: a,
        startDate: {
            month: 1,
            day: 20,
            year: 2019
        }
    });
};