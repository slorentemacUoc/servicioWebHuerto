const express = require('express');
const _ = require('underscore');
const Usuario = require('../models/usuarioObj');

const app = express();


app.get('/usuarios', function(req, res){
    
    let email = req.query.email || ''
    let contrasena = req.query.contrasena || ''

    Usuario.find({email: email, contrasena:contrasena}).exec((err, usuario) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        res.json({
            ok:true,
            usuario
        });
    });
});

app.post('/usuarios', function(req, res){
    
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        contrasena: body.contrasena,
        permiteGps: body.permiteGps,
        permiteNotificaciones: body.permiteNotificaciones,
        permiteSonido: body.permiteSonido
    });

    usuario.save((err, usuarioDB) =>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            })
        }
        else{
            res.json({
                ok:true,
                usuario: usuarioDB
            });
        }
    });

   
    
});

app.put('/usuarios/:id', function(req, res){
    let id = req.params.id;
    //let body = req.body;
    let body = _.pick(req.body, ['permiteGps', 'permiteNotificaciones', 'permiteSonido']);
    Usuario.findByIdAndUpdate(id,body,{new:true, runValidators:true}, (err, usuarioBD) => {
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioBD
        })
    });
});



module.exports = app;