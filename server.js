const http = require('http');
const server = http.createServer((req,res) =>{
    res.end('voila la reponse du  premier serveur !');
});

// par défaut 3000 en dev et sinon on utilise une variable d'environnement
server.listen(process.env.PORT || 3000);
