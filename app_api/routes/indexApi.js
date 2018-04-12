const express = require('express');
const router = express.Router();

const ctrlApiAguitar = require('../controllers/ctrlApiAguitar');
const ctrlApiEguitar = require('../controllers/ctrlApiEguitar');

//guitar (list of acoustic guitars)
router
    .route('/guitar')
    .get(ctrlApiAguitar.guitarslist)
    .post(ctrlApiAguitar.addGuitar);

//eguitar (list of electric guitars)
router
    .route('/eguitar')
    .get(ctrlApiEguitar.guitarslist)
    .post(ctrlApiEguitar.addGuitar);

module.exports = router;
