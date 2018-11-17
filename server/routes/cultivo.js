const express = require('express');
const _ = require('underscore');
const Cultivo = require('../models/cultivoObj');

const app = express();


app.get('/cultivos', function(req, res){
    

    Cultivo.find({}).exec((err, cultivo) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            cultivo
        });
    });
});

app.post('/cultivos', function(req, res){
    
    let body = req.body;

    let cultivo = new Cultivo({
        nombre : body.nombre,
        descripcion : body.descripcion,
        mesesSiembra : body.mesesSiembra,
        mesesCosecha : body.mesesCosecha,
        tipoTierra : body.tipoTierra,
        espacioEntrePlantas : body.espacioEntrePlantas,
        necesitaPoda : body.necesitaPoda,
        frecuenciaRiego : body.frecuenciaRiego,
        abonos : body.abonos,
        solsombra : body.solsombra,
        tempMax : body.tempMax,
        tempMin : body.tempMin,
        numMesesSiembra : body.numMesesSiembra,
        numMesesCrecimiento : body.numMesesCrecimiento,
        descCosechar : body.descCosechar,
        descSiembra : body.descSiembra,
        descCrecimiento : body.descCrecimiento,
        descTransplantar : body.descTransplantar,
        imgCultivo : body.imgCultivo,
        imgMeses : body.imgMeses
    });

    cultivo.save((err, cultivoDB) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        else{
            res.json({
                ok:true,
                cultivo: cultivoDB
            });
        }
    });

   
    
});



module.exports = app;