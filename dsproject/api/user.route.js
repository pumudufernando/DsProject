const express = require('express');
const employeeRoutes = express.Router();

// Require Business model in our routes module
let Employee = require('./user.model');

//government employee details will be added to the system
employeeRoutes.route('/addEmp').post(function (req, res) {
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({'business': 'User  added successfully to the database'});
        })
        .catch(err => {
            res.status(400).send("unable to save user to database");
        });
});

//get the user details from the id service
employeeRoutes.route('/getEmp/:id').get(function (req, res) {
     let sstation1= req.params.sstation;

    Employee.findOne({nic:req.params.id}, function (err, employee){
        res.json(employee);
    });
});
module.exports =employeeRoutes ;
