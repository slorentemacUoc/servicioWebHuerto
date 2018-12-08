const express = require('express');
const DetCultivoUsuario = require('../models/detCultivoUsuarioObj');

const app = express();

//Devuelve un objeto detCultivoUsuario cuyo id sea el proporcionado en la consulta
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

//Guarda un objteo cultivo usuario cuyos campos son proporcionados en el body de la consulta
app.post('/detCultivoUsuario', function(req, res){
    
    let body = req.body;
    //Creacción del objeto
    let detCultivoUsuario = new DetCultivoUsuario({
        fechaInicio: body.fechaInicio,
        cosecha: body.cosecha,
        siembra: body.siembra,
        crecimiento: body.crecimiento,
        transplantar: body.transplantar,
        notificarRegar: body.notificarRegar,
        notificarPoda: body.notificarPoda,
        notificarTransplantar: body.notificarTransplantar,

    });
    //Guardado del objeto
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
//Actualización del objeto detCultivoUsuario cuyo id es el proporcionado, los campos a actualizar
//se encuentran en el body de la consulta
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

//Se borra el objeto detCultivoUsuario cuyo id es proporcionado
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