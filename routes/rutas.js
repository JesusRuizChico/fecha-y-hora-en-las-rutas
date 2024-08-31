const ruta = require("express").Router();
const { saludar } = require('../middlewares/middlewares');
const { obtenerFechaYHora } = require('../middlewares/middlewares');


ruta.get("/",saludar,obtenerFechaYHora,(req,res)=>{
    res.send("Hola mundo con express");

});

ruta.get("/home",saludar,obtenerFechaYHora,(req,res)=>{
    res.send("Estas en Home");

});





module.exports=ruta;