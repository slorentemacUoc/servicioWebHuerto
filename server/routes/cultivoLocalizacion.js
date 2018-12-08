const express = require('express');
const _ = require('underscore');
const CultivoLocalizacion = require('../models/cultivoLocalizacionObj');

const app = express();
//Devuelve el cultivolocalización cuyo id sea el indicado en la consulta
app.get('/cultivolocalizacion', function(req, res){
    
    let id = req.query.id || ''

    CultivoLocalizacion.find({idCultivo: id}).exec((err, cultivoLocalizacion) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            cultivoLocalizacion
        });
    });
});

//Guarda un objeto cultivoLocalización
app.post('/cultivoLocalizacion', function(req, res){
    
    let body = req.body;
    //Objeto cultivoLocalización
    let cultivoLocalizacion = new CultivoLocalizacion({
        idCultivo : body.idCultivo,
        idLocalizacion: body.idLocalizacion
    });
    //Guardado del objeto
    cultivoLocalizacion.save((err, cultivoLocalizacionBD) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        else{
            res.json({
                ok:true,
                cultivoLocalizacion: cultivoLocalizacionBD
            });
        }
    });

   
    
});



module.exports = app;