const trainerTypes = require('./trainerTypes');

const trainersStreet = [
    {
        id: 10,
        name: 'mkw street high-top',
        desc: 'Zapatillas estilo botín con un diseño urbano en colores llamativos para destacar en la calle.',
        stock: new Map([
            [37, 4],
            ['39', 6],
            ['42', 3],
            ['44', 7],
            ['46', 0]
        ]),
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
        stock: new Map([
            [36, 5],
            ['38', 7],
            ['41', 2],
            ['43', 0],
            ['45', 6]
        ]),
        colors: [['#FF5733', '#33FF57', '#3357FF', '#FFFF00', '#800080']], 
    },
    {
        id: 12,
        name: 'mkw street heavy',
        desc: 'Zapatillas urbanas con un diseño alternativo y oscuro, perfectas para un estilo más underground.',
        stock: new Map([
            [37, 3],
            ['40', 0],
            ['42', 5],
            ['45', 6],
            ['48', 4]
        ]),
        colors: ['#000000', '#696969'],
        type: trainerTypes.STREET
    }
];

module.exports = trainersStreet;
