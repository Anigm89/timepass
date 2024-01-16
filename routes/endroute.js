const express = require('express');
const endroute = express.Router();

endroute.get('/', (req,res) => {
    //res.send(`<h1> Bienvenido a la ruta final!! </h1> <p>No ha sido fácil llegar hasta aquí</p>`);
});
endroute.use((req, res) => {
    res.status(404).send('<h1>Página no encontradaaa</h1><a href="/">Home </a>')
})
module.exports = endroute;