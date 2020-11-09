const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
   email: {type: String, required:true, unique:true},
   password: {type: String, required: true},
});

//On installe le package mongoose-unique-validator pour pouvoir gérer automatiquement le fait qu'il peut y avoir une email/user
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);
