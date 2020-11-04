const mongoose = require('mongoose');

//npm i mongoose ajoute une dépendance pour créer et manipuler des schémas plus facilement sur MongoDB
//mongoose.Schema création du schéma
const thingSchema  = mongoose.Schema({
    title: {type: String, required:true},
    description: {type: String, required:true},
    imageUrl: {type: String, required:true},
    userId: {type: String, required:true},
    price: {type: Number, required:true},
});

//module.export permet d'exploiter le schéma comme modèle

module.exports = mongoose.model('Thing', thingSchema);
