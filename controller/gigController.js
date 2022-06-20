const gigService = require('../service/gigService');

var gigController = {
    addGig: addGig,
    findGigs: findGigs,
    findGigById: findGigById,
    updateGig: updateGig,
    deleteById: deleteById 
}

function addGig(req, res){
    let gig = req.body;
    gigService.create(gig)
    .then((data)=> {
        res.send(data);
    }).catch(err => console.log('Error:', err));
}

function findGigById(req, res){
    gigService.findById(req.params.id)
    .then((data) => { res.send(data)})
    .catch(err => console.log('Error: ',err));
}

function deleteById(req, res){
    gigService.deleteById(req.params.id)
    .then((data)=> { res.status(200).json({
        message: "Gig successfully deleted",
        gig: data
    })})
    .catch(err => console.log('Error: ', err));

}

function updateGig (req, res){
    gigService.updateGig(req.body, req.params.id)
    .then((data)=> {
        res.status(200).json({
            message: "Gig successfully updated",
            gig: data
        })
    })
    .catch(err => console.log('Error: ', err));

}

function findGigs(req, res){
    gigService.findAll().then((data)=>{
        res.send(data);
    }).catch(err => console.log('Error: ', err));
}

module.exports = gigController;