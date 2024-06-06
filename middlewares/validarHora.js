const validar = (req, res, next) => {
    let hora = new Date().getHours();
    let minutos = (new Date().getMinutes()< 10 ? '0' : '') + new Date().getMinutes() ;
    const horaactual= `${hora}:${minutos}`;
    
    if(hora >= 12 && hora <=23){
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1> Bienvenido a la ruta final!! </h1>
                <p> Ahora puedes entrar porque son las ${horaactual}</p>
                <a href="/">Home </a>
                
            </body>
        </html>`
        );
    }
    else{        
        res.send( `<p>Son las ${horaactual}, Aún no es la hora, solo puedes entrar entre las 12 y las 00 horas</p><a href="/">Home </a>`);
        
    }
    next();
}
module.exports = validar;

/*
//solucion:
const validar = (req, res, next) => {
    if(req.hora <12){
        res.locals.mensaje = `Aún no es la hora, espera hasta las 14:00 para entrar`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next()
}
*/