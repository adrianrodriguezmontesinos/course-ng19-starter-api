const trainerTypes = require('./trainerTypes');

const trainersSport = [
    {
        id: 1,
        name: 'mkw sport basic',
        desc: 'Zapatillas deportivas básicas en color blanco, ideales para entrenamientos o uso diario.',
        stock: {
            39: 2,
            41: 3,
            42: 7,
            43: 3,
            44: 8
        },
        colors: ['#ffffff'], 
        type: trainerTypes.SPORT
    },
    {
        id: 2,
        name: 'mkw sport multicolor',
        desc: 'Zapatillas deportivas con colores vibrantes para destacar en cualquier actividad.',
        stock: {
            38: 8,
            41: 9,
            43: 5,
            45: 6,
            48: 0
        },
        colors: [
            ['#FF5733', '#33FF57', '#3357FF', '#FFD700'], 
            ['#FF5733', '#DD33FF', '#33FCFF', '#FFD700']
        ], 
        type: trainerTypes.SPORT
    },
    {
        id: 3,
        name: 'mkw sport ergonomic',
        desc: 'Diseño ergonómico que brinda soporte y comodidad en cada paso.',
        stock: {
            38: 8,
            40: 6,
            43: 3,
            45: 0,
            46: 3
        },
        colors: [
            ['#808080', '#5F9EA0', '#0000FF'],
            ['#808080', '#5F9EA0', '#FF0000'], 
            ['#808080', '#5F9EA0', '#FFA500']
        ], 
        type: trainerTypes.SPORT
    },
    {
        id: 4,
        name: 'mkw sport urban',
        desc: 'Un modelo sport con un toque elegante, ideal para combinar con cualquier outfit urbano.',
        stock: {
            39: 7,
            39: 10,
            43: 11,
            46: 0,
            48: 12
        },
        colors: ['#6B8E23', '#F5F5DC'], 
        type: trainerTypes.SPORT
    }, {
        id: 5,
        name: 'mkw sport black',
        desc: 'Zapatillas deportivas negras, minimalistas y versátiles para cualquier actividad.',
        stock: {
            38: 0,
            40: 6,
            44: 4,
            47: 8,
            48: 2
        },
        colors: ['#000000'], 
        type: trainerTypes.SPORT
    }
];

module.exports = trainersSport;
