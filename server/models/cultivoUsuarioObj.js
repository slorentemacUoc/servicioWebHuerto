const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cultivoUsuarioSchema = new Schema({
    idCultivo:{
        type:String
    },

    idUsuario:{
        type:String
    },

    idCultivoUsuario:{
        type:String
    },

    nombre:{
        type:String
    },

    imgCultivo:{
        type:String
    }

});

module.exports = mongoose.model('cultivoUsuario', cultivoUsuarioSchema);