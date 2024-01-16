const express = require('express');
const app = express();


const rutas = require('./routes/index.js');
const obtenerhora = require('./middlewares/horaMiddleware.js');

app.use('/', obtenerhora, rutas);


app.listen(3000, () => {
    console.log('Express está escuchando en el puerto 3000');
    console.log('http://localhost:3000');
})