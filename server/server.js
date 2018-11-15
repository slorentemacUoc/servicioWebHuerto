require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Pasamos a json los valores que recibimos
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/usuarios/:id', function(req, res){
    
    let id = req.params.id;

    res.json({
        id
    });
});

app.post('/usuarios', function(req, res){
    
    let body = req.body;

    if (body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }else{
        res.json({
            body
        });
    }
    
});

app.put('/usuarios', function(req, res){
    res.json('put usuario')
});

app.delete('/usuarios', function(req, res){
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Lisening port: ', process.env.PORT);
});