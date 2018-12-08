const express = require('express');
const _ = require('underscore');
const Localizacion = require('../models/localizacionObj');

//Se obtiene el objeto localización cuyo id es proporcionado
app.get('/localizacion', function(req, res){
    
    let id = req.query.id || ''

    Localizacion.find({_id: id}).exec((err, localizacion) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            localizacion
        });
    });
});

//Guardado del objeto localización proporcionado en el body
app.post('/localizacion', function(req, res){
    
    let body = req.body;
    //Creacción del objeto localización
    let localizacion = new Localizacion({
        nombre : body.nombre,
        altitudMin: body.altitudMin,
        altitudMax: body.altitudMax,
        latitudMin : body.latitudMin,
        latitudMax : body.latitudMax
    });
    //Guardado del objeto localización
    localizacion.save((err, localizacionBD) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        else{
            res.json({
                ok:true,
                localizacion: localizacionBD
            });
        }
    });

   
    
});



module.exports = app;