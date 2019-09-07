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