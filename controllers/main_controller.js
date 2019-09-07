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
    const a = req.query.id = 23;
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