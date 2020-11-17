const multer = require('multer');

//après npm i multer. Multer nous permet de gérer les imports de fichier par les users telle que les images ... etc

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    //Destination
   destination: (req, file, callback) => {
       callback(null, 'images')
   },
    filename: (req, file, callback) => {
       //On nettoie le nom de fichier en remplacant les espaces par des _
       const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        //Définition du nom du fichier nom + date actuelle + . + extensions défini dans notre Mime_Types
        callback(null, name + Date.now() + '.' + extension);
    }
});



module.exports = multer({storage}).single('image');
