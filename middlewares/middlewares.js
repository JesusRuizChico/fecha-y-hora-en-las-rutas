function saludar(req,res,next) {
    console.log("Hola");
    next();
    
}


function obtenerFechaYHora() {
    const ahora = new Date();

    const año = ahora.getFullYear();
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0'); 
    const día = ahora.getDate().toString().padStart(2, '0');

    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');

    const fechaHora = `${año}-${mes}-${día} ${horas}:${minutos}:${segundos}`;
    
    console.log(fechaHora); // Muestra la fecha y hora en la consola
    return fechaHora; // Devuelve la fecha y hora
}

module.exports = { saludar, obtenerFechaYHora };