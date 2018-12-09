const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
//Campos de la tabla usuario, los campos nombre, contrasena y email son obligatorios, 
    //así mismo el email debe ser único
let usuarioSchema = new Schema({
    
    nombre:{
        type: String,
        required: [true, 'El nombre debe ser introducido']
    },

    contrasena:{
        type: String,
        required: [true, 'La contraseña debe ser introducida']
    },

    email:{
        type: String,
        unique: true,
        required:[true, 'El email debe ser introducido']
    },

    permiteGps:{
        type: Boolean,
        default: true
    },

    permiteNotificaciones:{
        type:Boolean,
        default:true
    },

    permiteSonido:{
        type:Boolean,
        default:true
    }

});

//usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único'});

module.exports = mongoose.model('Usuario', usuarioSchema);