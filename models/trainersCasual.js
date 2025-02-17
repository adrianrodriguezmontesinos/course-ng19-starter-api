const trainerTypes = require('./trainerTypes');

const trainersCasual = [
    {
        id: 6,
        name: 'mkw casual warm',
        desc: 'Zapatillas casuales pero elegantes para tu día a día, Cómodas y ergonómicas.',
        stock: {
            39: 1,
            41: 3,
            44: 8,
            46: 5,
            48: 4
        },
        colors: ['#ccab65', '#796e57', '#506363'],
        type: trainerTypes.CASUAL
    }, {
        id: 7,
        name: 'mkw casual pure',
        desc: 'Zapatillas casuales en tonos neutros, ideales para cualquier ocasión. Comodidad y estilo combinados.',
        stock: {
            39: 6,
            41: 5,
            43: 8,
            46: 5,
            47: 4
        },
        colors: ['#ffffff', '#d3d3d3'], 
        type: trainerTypes.CASUAL
    },
    {
        id: 8,
        name: 'mkw leather classic',
        desc: 'Zapatillas casuales de cuero genuino, elegancia y resistencia para el día a día.',
        stock: {
            39: 2,
            41: 0,
            42: 7,
            43: 7,
            44: 8
        },
        colors: ['#000000', '#654321'], 
        type: trainerTypes.CASUAL
    },
    {
        id: 9,
        name: 'mkw casual street',
        desc: 'Diseño urbano con colores pastel, combinando frescura y versatilidad en cada paso.',
        stock: {
            38: 2,
            39: 6,
            43: 12,
            45: 0,
            46: 7
        },
        colors: ['#AEC6CF', '#FFB6C1', '#F4A460'],
    }
];

module.exports = trainersCasual;
