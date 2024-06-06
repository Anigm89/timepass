const express = require('express');
const ruta = express.Router();


const endroute = require('./endroute.js');
const validar = require('../middlewares/validarHora.js');


ruta.get('/', (req, res) => {
   // res.send(`<h1> Bienvenido a la Home </h1><p> ${req.dateType}</p><br> <button>Entrar</button `);
   //const mensaje = req.query.mensaje || '';
   res.send(`${req.horaActual}`)
})
ruta.use('/endroute',validar, endroute);


module.exports = ruta