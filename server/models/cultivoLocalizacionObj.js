const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Objetos de la tabla cultivoLocalización
let cultivoLocalizacionSchema = new Schema({
    
    idCultivo:{
        type:String
    },

    idLocalizacion:{
        type:String
    }
});

module.exports = mongoose.model('cultivoLocalizacion', cultivoLocalizacionSchema);