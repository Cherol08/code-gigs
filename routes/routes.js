const  express = require('express');
const router = express.Router();
const gigController = require('../controller/gigController')

router.post('/', gigController.addGig)
    .get('/', gigController.findGigs)
    .get('/:id', gigController.findGigById)
    .put('/:id', gigController.updateGig)
    .delete('/:id', gigController.deleteById);

module.exports = router;