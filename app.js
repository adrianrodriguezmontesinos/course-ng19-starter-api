const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const endpoints = require('./config/endpoints');

const trainerRoutes = require('./routes/trainerRoutes');
const typesRoutes = require('./routes/typeRoutes');
const imageRoutes = require('./routes/imageRoutes');

app.use(endpoints.TRAINERS, trainerRoutes);
app.use(endpoints.TYPES, typesRoutes);
app.use(endpoints.IMAGE, imageRoutes);

const PORT = 3030;
const BASE_URL = `http://localhost:${PORT}/`;

app.listen(PORT, () => {
    console.log(`Server MKV API running at ${BASE_URL}`);
});
