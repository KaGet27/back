const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes.user');

mongoose.connect('mongodb+srv://KaGet27:Bnp2849.@cluster0.m5tzg.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
const app = express();

//Gestion du CORS = Cross Origin Resource Sharing quand back et front n'ont pas la même origine
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// Middleware qui recoit une requetes et qui le gere avec une réponse

app.use(bodyParser.json());
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
module.exports = app;
