const User = require('../models/User');
const bcrypt = require('bcrypt')

exports.signup = (req, res, next ) =>{
//premièrement on h le mot de passe
    // la méthode hash nous permet de H le mdp, on lui applique un nombre de tour 10 bien
    bcrypt.hash(req.body.password, 10)
        .then(hash =>{
            const User = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(()=> res.status(201).json({ message: 'User Créer'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}))
};

//Le mdp étant crypter 
exports.login = (req, res, next ) =>{

};