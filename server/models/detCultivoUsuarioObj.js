const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let detCultivoUsuarioSchema = new Schema({
    fechaInicio:{
        type:String
    },

    cosecha:{
        type:Boolean
    },

    siembra:{
        type:Boolean
    },

    crecimiento:{
        type:Boolean
    },

    transplantar:{
        type:Boolean
    },

    notificarRegar:{
        type:Boolean
    },

    notificarPoda:{
        type:Boolean
    },

    notificarTransplantar:{
        type:Boolean
    },

    descSiembra:{
        type:String
    },

    descCosecha:{
        type:String
    },

    descCrecimiento:{
        type:String
    },

    descTrasplantar:{
        type:String
    },

    numMesesSiembra:{
        type:Number
    },

    numMesesCrecimiento:{
        type:Number
    }

});

module.exports = mongoose.model('detCultivoUsuario', detCultivoUsuarioSchema);