const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let localizacionSchema = new Schema({
    //Campos de la tabla localización
    nombre:{
        type:String
    },

    altitudMin:{
        type: Number
    },

    altitudMax:{
        type:Number
    },

    latitudMin:{
        type:Number
    },

    latitudMax:{
        type:Number
    }
});

module.exports = mongoose.model('Local', localizacionSchema);