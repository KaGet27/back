const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');
const multer = require('../middleware/multer-config');



router.post('/', auth, multer, stuffCtrl.createThing);

router.get('/:id', auth, stuffCtrl.getOneThings);

router.delete('/:id', auth, stuffCtrl.deleteThing);

router.put('/:id', auth, multer, stuffCtrl.modifyThing);

router.get('/', auth, stuffCtrl.getAllThings);

module.exports= router;
