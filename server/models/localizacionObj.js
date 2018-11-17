const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let localizacionSchema = new Schema({

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