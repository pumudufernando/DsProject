// const express = require('express');
// const scheduleRoutes = express.Router();
//
// //require business model in our routes
//
// let Schedule = require('./schedule.model');
//
// //defined store route
//
// scheduleRoutes.route('/add').post(function (req, res) {
//     let schedule = new Schedule(req.body);
//     schedule.save()
//         .then(schedule => {
//             res.status(200).json({'schedule': 'User Register Successfully'});
//         })
//         .catch(err => {
//             res.status(400).send("unable to save database");
//         });
//
// });
//
// scheduleRoutes.route('/').get(function (req, res) {
//     Schedule.find(function(err, schedule){
//         if(err){
//             console.log(err);
//         }
//         else {
//             res.json(schedule);
//         }
//     });
// });
//
// // Defined edit route
// scheduleRoutes.route('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Schedule.findById(id, function (err, schedule){
//         res.json(schedule);
//     });
// });
//
// //  Defined update route
// scheduleRoutes.route('/update/:id').post(function (req, res) {
//     Schedule.findById(req.params.id, function(err, schedule) {
//         if (!schedule)
//             res.status(404).send("data is not found");
//         else {
//             // business.person_name = req.body.person_name;
//             // business.business_name = req.body.business_name;
//             // business.business_gst_number = req.body.business_gst_number;
//
//             schedule.sname = req.body.sname;
//             schedule.sstart = req.body.sstart;
//             schedule.send = req.body.send;
//             schedule.sdate = req.body.sdate;
//             schedule.stickets = req.body.stickets;
//             schedule.save().then(schedule => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });
//
// // Defined delete | remove | destroy route
// scheduleRoutes.route('/delete/:id').get(function (req, res) {
//     Schedule.findByIdAndRemove({_id: req.params.id}, function(err, schedule){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });
//
// module.exports = scheduleRoutes;



const express = require('express');
const businessRoutes = express.Router();

//require business model in our routes

let Business = require('./schedule.model');

//defined store route

businessRoutes.route('/add').post(function (req, res) {
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'User Register Successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save database");
        });

});

businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
        if(err){
            console.log(err);
        }
        else {
            res.json(businesses);
        }
    });
});

// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business){
        res.json(business);
    });
});

//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
        if (!business)
            res.status(404).send("data is not found");
        else {
            // business.person_name = req.body.person_name;
            // business.business_name = req.body.business_name;
            // business.business_gst_number = req.body.business_gst_number;

            business.name = req.body.name;
            business.email = req.body.email;
            business.passwrd = req.body.passwrd;
            business.pass = req.body.pass;
            business.addrs = req.body.addrs;
            business.save().then(business => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;