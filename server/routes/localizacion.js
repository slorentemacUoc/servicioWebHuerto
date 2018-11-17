const express = require('express');
const _ = require('underscore');
const Localizacion = require('../models/localizacionObj');

const app = express();


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

app.post('/localizacion', function(req, res){
    
    let body = req.body;

    let localizacion = new Localizacion({
        nombre : body.nombre,
        altitudMin: body.altitudMin,
        altitudMax: body.altitudMax,
        latitudMin : body.latitudMin,
        latitudMax : body.latitudMax
    });

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