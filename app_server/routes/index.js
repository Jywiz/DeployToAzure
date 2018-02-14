const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain'); //Controller for the Home page
const ctrlGuitar = require('../controllers/ctrlGuitar'); // for the list of guitars
const ctrlEguitar = require('../controllers/ctrlEguitar'); // for the list of electric guitars

router.get('/', ctrlMain.index); //Get Home page
router.get('/guitar', ctrlGuitar.guitarslist); //Get list of acoustic guitars
router.get('/eguitar', ctrlEguitar.guitarslist); //Get list of electir guitars

module.exports = router;
