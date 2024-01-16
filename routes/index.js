const express = require('express');
const ruta = express.Router();


const endroute = require('./endroute.js');
const validar = require('../middlewares/validarHora.js');


ruta.get('/', (req, res) => {
   // res.send(`<h1> Bienvenido a la Home </h1><p> ${req.dateType}</p><br> <button>Entrar</button `);
   res.send(`${req.dateType}`)
})
ruta.use('/endroute',validar, endroute);

ruta.use((req,res) => {
    res.status(404).send('<h1>Página no encontrada</h1><a href="/">Home </a>')
})

module.exports = ruta