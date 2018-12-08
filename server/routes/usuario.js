const express = require('express');
const _ = require('underscore');
const Usuario = require('../models/usuarioObj');

const app = express();

//Obtención del objeto usuario para el email y la contraseña proporcionados
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

//Guardado de un objeto usuario con los campos proporcionados en el body
app.post('/usuarios', function(req, res){
    
    let body = req.body;
    //Creacción del objeto
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        contrasena: body.contrasena,
        permiteGps: body.permiteGps,
        permiteNotificaciones: body.permiteNotificaciones,
        permiteSonido: body.permiteSonido
    });
    //Guardado del objeto
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

//Actualización del objeto Usuario cuyo id es proporcionado 
app.put('/usuarios/:id', function(req, res){
    let id = req.params.id;
    //Sólo actualizamos del body los campos que son modificables
    let body = _.pick(req.body, ['permiteGps', 'permiteNotificaciones', 'permiteSonido']);
    //Realiza la actualización del usuario
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