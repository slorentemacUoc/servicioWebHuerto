const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Campos de la tabla detCultivoUsuario
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
    }

});

module.exports = mongoose.model('detCultivoUsuario', detCultivoUsuarioSchema);