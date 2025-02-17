const types = require('../models/trainerTypes');

exports.getTrainersTypes = (_, res) => {
    return res.json(types);
};
