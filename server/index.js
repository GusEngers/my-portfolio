// Dependecias:
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// Variables de entorno
const URL_DB = process.env.URL_DB;
const PORT = process.env.PORT;

// Codigo
// Conexion con base de datos
mongoose.connect(URL_DB);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log('Error connecting to database: ', error);
});
database.once('connected', () => {
  console.log('Database connected!');
});

// Rutas y middlewares
const app = express();
const routes = require('./src/routes/index.js');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server connected on port: ${PORT}`);
});
