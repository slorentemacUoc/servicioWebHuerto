const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cultivoLocalizacionSchema = new Schema({
    //Objetos de la tabla cultivoLocalización
    idCultivo:{
        type:String
    },

    idLocalizacion:{
        type:String
    }
});

module.exports = mongoose.model('cultivoLocalizacion', cultivoLocalizacionSchema);