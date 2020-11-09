const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');



router.post('/', stuffCtrl.createThing);

router.get('/:id', stuffCtrl.modifyThing);

router.delete('/:id', stuffCtrl.deleteThing);

router.put('/:id', stuffCtrl.getOneThings);

router.get('/', stuffCtrl.getAllThings);

module.exports= router;