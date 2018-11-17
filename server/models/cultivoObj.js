const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let cultivoSchema = new Schema({
    nombre:{
        type: String,
        unique: true,
        required: [true, 'El nombre debe ser introducido']
    },

    descripcion:{
        type: String
    },

    mesesSiembra:{
        type: String
    },

    mesesCosecha:{
        type: String
    },

    tipoTierra:{
        type:String
    },

    espacioEntrePlantas:{
        type:String
    },

    necesitaPoda:{
        type:String
    },

    frecuenciaRiego:{
        type:String
    },

    abonos:{
        type:String
    },

    solSombra:{
        type:String
    },

    tempMax:{
        type: Number
    },

    tempMin:{
        type: Number
    },

    numMesesSiembra:{
        type:Number
    },

    numMesesCrecimiento:{
        type:Number
    },

    descCosechar:{
        type:String
    },

    descCrecimiento:{
        type:String
    },

    descrTransplantar:{
        type:String
    },

    imgCultivo:{
        type:String
    },

    imgMeses:{
        type:String
    }

});


module.exports = mongoose.model('Cultivo', cultivoSchema);