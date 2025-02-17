const trainerTypes = require('./trainerTypes');

const trainersSport = [
    {
        id: 1,
        name: 'mkw sport basic',
        desc: 'Zapatillas deportivas básicas en color blanco, ideales para entrenamientos o uso diario.',
        stock: new Map([
            [36, 4],
            ['38', 0],
            ['40', 7],
            ['42', 5],
            ['45', 2]
        ]),
        colors: ['#ffffff'], 
        type: trainerTypes.SPORT
    },
    {
        id: 2,
        name: 'mkw sport multicolor',
        desc: 'Zapatillas deportivas con colores vibrantes para destacar en cualquier actividad.',
        stock: new Map([
            [35, 6],
            [37, 3],
            ['40', 5],
            ['43', 0],
            ['46', 4]
        ]),
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
        stock: new Map([
            [37, 5],
            ['39', 7],
            ['42', 0],
            ['44', 6],
            ['48', 3]
        ]),
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
        stock: new Map([
            [36, 2],
            ['38', 4],
            ['41', 6],
            ['43', 0],
            ['47', 5]
        ]),
        colors: ['#6B8E23', '#F5F5DC'], 
        type: trainerTypes.SPORT
    }, {
        id: 5,
        name: 'mkw sport black',
        desc: 'Zapatillas deportivas negras, minimalistas y versátiles para cualquier actividad.',
        stock: new Map([
            [36, 5],
            ['38', 3],
            ['41', 0],
            ['44', 6],
            ['46', 4]
        ]),
        colors: ['#000000'], 
        type: trainerTypes.SPORT
    }
];

module.exports = trainersSport;
