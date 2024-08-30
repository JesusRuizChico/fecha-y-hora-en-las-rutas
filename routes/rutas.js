const ruta = require("express").Router();
const { saludar } = require('../middlewares/middlewares');


ruta.get("/",saludar,(req,res)=>{
    res.send("Hola mundo con express");

});

ruta.get("/home",saludar,(req,res)=>{
    res.send("Estas en Home");

});





module.exports=ruta;