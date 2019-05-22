const nodemailer = require('nodemailer');

const express = require('express');
const trainRoutes = express.Router();


let Train = require('./train.model');


// Train details should be add from this service
trainRoutes.route('/add').post(function (req, res) {
    let business = new Train(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': ' Train Details added successfully to database'});
        })
        .catch(err => {
            res.status(400).send("unable to save train details to database");
        });
});


// All the trains can be search by giving the start station and end station get service
trainRoutes.route('/:sstation/:estation').get(function (req, res) {


    Train.find({sstation:req.params.sstation, estation:req.params.estation}, function (err, business){
        res.json(business);
    });
});

//Selected trains will be dispaly by id get service
trainRoutes.route('/:id').get(function (req, res) {

    Train.findById(req.params.id, function (err, business){
        res.json(business);
    });
});

//train details can be updated from this service
trainRoutes.route('/update/:id').post(function (req, res) {
    Train.findById(req.params.id, function(err, business) {
        if (!business)
            res.status(404).send("data is not found");
        else {
            business.qty = req.body.qty;



            business.save().then(business => {
                res.json('Update the train Details complete');

            })
                .catch(err => {
                    res.status(400).send("unable to update the train details");
                });
        }
    });
})



// Defined delete | remove | destroy route
trainRoutes.route('/delete/:id').get(function (req, res) {
    Train.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed the train from databse');
    });
});


var smtpTransport = nodemailer.createTransport({

    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    auth:{
        user:'fernandopumudu@gmail.com',
        pass:'0112616997'
    },
    tls:{rejectUnauthorized:false},
    debug:true
});


trainRoutes.route('/send1').post(function(req,res) {
    const Nexmo = require('nexmo');
    const nexmo = new Nexmo({
        apiKey: 'd2c61738',
        apiSecret: 'dfhpTogHHrQnJ366'
    })


    const from = 'Nexmo';
    const to = req.body.person_name;
    const text = 'Hello Your Train Tickets Payment have been confirmed please bring this to verify';


    nexmo.message.sendSms(from, to, text)

});

trainRoutes.route('/send').post(function(req,res) {
    console.log("start");


    var mailOptions = {
        to: req.body.person_name,
        subject: "Train Ticket Reservation Confirmation",
        text: "Your Reservation Completed Please Bring this as the confirmation"

    }


//check whether mail is working
    console.log(mailOptions);

    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error+"not working");

        } else {
            console.log("Message sent Succesfully : " + response.message);

        }
    });

});

module.exports = trainRoutes;
