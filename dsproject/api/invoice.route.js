const express = require('express');

const billRoutes = express.Router();


// Require invoice details for create bill
let Bill = require('./invoice.model');


//service to add bill for the database
billRoutes.route('/addbill').post(function (req, res) {
    let bill = new Bill(req.body);
    bill.save()
        .then(bill => {
            res.status(200).json({'business': 'Bill is added to database successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save bill details to database");
        });
});

//service to get bill details
billRoutes.route('/getBill').get(function (req, res) {


    Bill.findOne({}, {}, { sort: { '_id' : -1 } }, function (err, bill){
        res.json(bill);
    });
});


module.exports =billRoutes ;
