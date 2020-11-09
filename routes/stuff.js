const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const stuffCtrl = require('../controllers/stuff');



router.post('/', auth, stuffCtrl.createThing);

router.get('/:id', auth, stuffCtrl.modifyThing);

router.delete('/:id', auth, stuffCtrl.deleteThing);

router.put('/:id', auth, stuffCtrl.getOneThings);

router.get('/', auth, stuffCtrl.getAllThings);

module.exports= router;
