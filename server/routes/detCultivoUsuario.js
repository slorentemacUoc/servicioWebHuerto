const express = require('express');
const DetCultivoUsuario = require('../models/detCultivoUsuarioObj');

const app = express();


app.get('/detCultivoUsuario', function(req, res){
    
    let id = req.query.id || ''

    DetCultivoUsuario.find({_id: id}).exec((err, detCultivoUsuario) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            detCultivoUsuario
        });
    });
});

app.post('/detCultivoUsuario', function(req, res){
    
    let body = req.body;

    let detCultivoUsuario = new DetCultivoUsuario({
        fechaInicio: body.fechaInicio,
        cosecha: body.cosecha,
        siembra: body.siembra,
        crecimiento: body.crecimiento,
        transplantar: body.transplantar,
        notificarRegar: body.notificarRegar,
        notificarPoda: body.notificarPoda,
        notificarTrasplantar: body.notificarTrasplantar,
        descSiembra: body.descSiembra,
        descCosecha: body.descCosecha,
        descTransplantar: body.descTransplantar,
        descCrecimiento: body.descCrecimiento

    });

    detCultivoUsuario.save((err, detCultivoUsuarioBD) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        else{
            res.json({
                ok:true,
                detCultivoUsuario: detCultivoUsuarioBD
            });
        }
    });

   
    
});

app.put('/detCultivoUsuario/:id', function(req, res){
    let id = req.params.id;
    let body = req.body;
    DetCultivoUsuario.findByIdAndUpdate(id,body,{new:true, runValidators:true}, (err, detCultivoUsuarioBD) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
            detCultivoUsuario: detCultivoUsuarioBD
        })
    });
});


app.delete('/detCultivoUsuario/:id', function(req,res){
    let id = req.params.id;
    let body = req.body;
    DetCultivoUsuario.findByIdAndDelete(id,(err,resp) =>{
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