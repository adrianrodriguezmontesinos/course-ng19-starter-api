const streets = require('../models/trainersStreet');
const casuals = require('../models/trainersCasual');
const sports = require('../models/trainersSport');
const types = require('../models/trainerTypes');

exports.getTrainersByType = (req, res) => {
    const type = req.params.type?.toLowerCase();

    if (!type) {
        return res.status(400).json({ message: '[MKW API] Tipo de zapatilla no proporcionado.' });
    }
    switch (type) {
        case types.CASUAL:
            return res.json(casuals); 
        case types.SPORT:
            return res.json(sports); 
        case types.STREET:
            return res.json(streets); 
        default:
            return res.status(404).json({ message: '[MKW API] Tipo de zapatilla no encontrado.' });
    }
};
