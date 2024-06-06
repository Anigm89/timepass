const obtenerhora = (req, res, next) =>{
 //let horaactual = new Date().toLocaleTimeString('es-ES');
 let hora = new Date().getHours();
 let minutos = (new Date().getMinutes()< 10 ? '0' : '') + new Date().getMinutes() ;

 const horaactual= `${hora}:${minutos}`;
 
 req.hora = hora;  //para luego validar
//console.log(horaactual);

req.horaActual = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> Bienvenido a la Home </h1>
        <p> Son las ${horaactual}</p>
        <a href="/endroute"><button>Entrar</button> </a>
        
    </body>
</html>`;

 next();
}


module.exports = obtenerhora;
 