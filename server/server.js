require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//Pasamos a json los valores que recibimos
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//LLamadas a las diferentes rutas del servicio
app.use(require('./routes/usuario'));
app.use(require('./routes/cultivo'));
app.use(require('./routes/localizacion'));
app.use(require('./routes/cultivoLocalizacion'));
app.use(require('./routes/detCultivoUsuario'));
app.use(require('./routes/cultivoUsuario'));


mongoose.connect(process.env.URLDB,   { useNewUrlParser: true }, (err,res) =>{
    if(err) throw err;
    console.log("Base de datos online");
} );
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


app.listen(process.env.PORT, () => {
    console.log('Listening port: ', process.env.PORT);
});