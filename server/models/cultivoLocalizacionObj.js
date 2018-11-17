const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cultivoLocalizacionSchema = new Schema({
    idCultivo:{
        type:String
    },

    idLocalizacion:{
        type:String
    }
});

module.exports = mongoose.model('cultivoLocalizacion', cultivoLocalizacionSchema);