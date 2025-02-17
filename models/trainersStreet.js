const trainerTypes = require('./trainerTypes');

const trainersStreet = [
    {
        id: 10,
        name: 'mkw street high-top',
        desc: 'Zapatillas estilo botín con un diseño urbano en colores llamativos para destacar en la calle.',
        stock: {
            39: 2,
            41: 0,
            42: 7,
            43: 7,
            44: 8
        },
        colors: [
            ['#FF0000', '#000000', '#0000FF'], 
            ['#FFFFFF', '#000000', '#0000FF']
        ], 
        type: trainerTypes.STREET
    },
    {
        id: 11,
        name: 'mkw street skate',
        desc: 'Diseño inspirado en el skateboarding, con un look fresco y atrevido en tonos multicolor.',
        stock: {
            38: 8,
            40: 0,
            41: 7,
            43: 2,
            45: 6,
            48: 2
        },
        colors: [['#FF5733', '#33FF57', '#3357FF', '#FFFF00', '#800080']], 
    },
    {
        id: 12,
        name: 'mkw street heavy',
        desc: 'Zapatillas urbanas con un diseño alternativo y oscuro, perfectas para un estilo más underground.',
        stock: {
            39: 2,
            41: 0,
            42: 7,
            43: 7,
            44: 8
        },
        colors: ['#000000', '#696969'],
        type: trainerTypes.STREET
    }
];

module.exports = trainersStreet;
