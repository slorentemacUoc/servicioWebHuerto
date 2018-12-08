const express = require('express');
const CultivoUsuario = require('../models/cultivoUsuarioObj');

const app = express();

//Devuelve el cultivoUsuario cuyo id sea el proporcionado en la consulta
app.get('/cultivoUsuario', function(req, res){
    
    let id = req.query.id || ''

    CultivoUsuario.find({idUsuario: id}).exec((err, cultivoUsuario) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            cultivoUsuario
        });
    });
});

//Guarda un objeto cultivoUsuario proporcionado en el body
app.post('/cultivoUsuario', function(req, res){
    
    let body = req.body;
    //Creacción del objeto cultivoUsuario
    let cultivoUsuario = new CultivoUsuario({
        idCultivoUsuario: body.idCultivoUsuario,
        idCultivo: body.idCultivo,
        idUsuario: body.idUsuario,
        nombre: body.nombre,
        imgCultivo: body.imgCultivo
    });
    //Guardado del objeto cultivoUsuario
    cultivoUsuario.save((err, cultivoUsuarioBD) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        else{
            res.json({
                ok:true,
                cultivoUsuario: cultivoUsuarioBD
            });
        }
    });

   
    
});

//Borrado del objeto cultivoUsuario cuyo identificador es el proporcionado
app.delete('/cultivoUsuario/:id', function(req,res){
    let id = req.params.id;
    let body = req.body;
    CultivoUsuario.findByIdAndDelete(id,(err,resp) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
        })
    });
});


module.exports = app;