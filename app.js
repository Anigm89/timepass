const express = require('express');
const app = express();


const rutas = require('./routes/index.js');
const obtenerhora = require('./middlewares/horaMiddleware.js');

app.use('/', obtenerhora, rutas);

app.use((req,res) => {
    res.status(404).send('<h1>Página no encontrada</h1><a href="/">Home </a>')
})

app.listen(3000, () => {
    console.log('Express está escuchando en el puerto 3000');
    console.log('http://localhost:3000');
})