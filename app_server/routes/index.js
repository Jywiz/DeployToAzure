const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain'); //Controller for the Home page
const ctrlGuitar = require('../controllers/ctrlGuitar'); // for the list of guitars
const ctrlEguitar = require('../controllers/ctrlEguitar'); // for the list of electric guitars

router.get('/', ctrlMain.index); //Get Home page
router.get('/guitar', ctrlGuitar.guitarslist); //Get list of acoustic guitars
router.get('/eguitar', ctrlEguitar.guitarslist); //Get list of electir guitars

router
    .route('/guitar/add')
    .get(ctrlGuitar.showForm) //display the form
    .post(ctrlGuitar.addData); //makes the call to the API and gets the form data
    
module.exports = router;
