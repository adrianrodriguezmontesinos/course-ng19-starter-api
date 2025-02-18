const images = require('../models/images');

exports.getImageById = (req, res) => {
    let id = req.params.id;

    if (!id) {
        return res.status(400).json({ message: '[MKW API] ID no proporcionado.' });
    }

    const image = images.get(id);
    
    return image 
        ? res.json({ id, image })
        : res.status(400).json({ message: `[MKW API] zapatilla con id ${id} no encontrada.`});
};
