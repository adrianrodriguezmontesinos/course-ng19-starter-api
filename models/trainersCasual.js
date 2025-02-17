const trainerTypes = require('./trainerTypes');

const trainersCasual = [
    {
        id: 6,
        name: 'mkw casual warm',
        desc: 'Zapatillas casuales pero elegantes para tu día a día, Cómodas y ergonómicas.',
        stock: new Map([
            ['39', 5],
            ['41', 0],
            ['44', 7],
            ['45', 9],
            ['47', 3]
        ]),
        colors: ['#ccab65', '#796e57', '#506363'],
        type: trainerTypes.CASUAL
    }, {
        id: 7,
        name: 'mkw casual pure',
        desc: 'Zapatillas casuales en tonos neutros, ideales para cualquier ocasión. Comodidad y estilo combinados.',
        stock: new Map([
            ['39', 6],
            ['41', 0],
            ['43', 8],
            ['46', 5],
            ['47', 4]
        ]),
        colors: ['#ffffff', '#d3d3d3'], 
        type: trainerTypes.CASUAL
    },
    {
        id: 8,
        name: 'mkw leather classic',
        desc: 'Zapatillas casuales de cuero genuino, elegancia y resistencia para el día a día.',
        stock: new Map([
            ['39', 3],
            ['41', 7],
            ['42', 4],
            ['43', 6],
            ['47', 2]
        ]),
        colors: ['#000000', '#654321'], 
        type: trainerTypes.CASUAL
    },
    {
        id: 9,
        name: 'mkw casual street',
        desc: 'Diseño urbano con colores pastel, combinando frescura y versatilidad en cada paso.',
        stock: new Map([
            ['38', 4],
            ['40', 0],
            ['44', 3],
            ['45', 0],
            ['47', 5]
        ]),
        colors: ['#AEC6CF', '#FFB6C1', '#F4A460'],
    }
];

module.exports = trainersCasual;
