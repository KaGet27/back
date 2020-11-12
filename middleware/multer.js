const multer = require('multer');

//après npm i multer. Multer nous permet de gérer les imports de fichier par les users telle que les images ... etc

const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jepg' : 'jepg',
    'image/png' : 'png'
}

const storage = multer.diskStorage({
    //Destination
   destination: (req, file, callback) => {
       callback(null, 'images')
   },
    filename: (req, file, callback) => {
       const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimeType];
        //Définition du nom du fichier nom + date actuelle + . + extensions défini dans notre Mime_Types
        callback(null, name + Date.now() + '.' + extension);
    }
});


module.exports = multer({storage}).single('image');
