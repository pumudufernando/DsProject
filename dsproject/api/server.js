const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const trainRoute = require('./train.route')
const userRoute = require('./user.route');
const invoiceRoute = require('./invoice.route');


// use Mongoose for the database
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected with mongo db') },
    err => { console.log('Can not connect to the mongo db database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', trainRoute);
app.use('/employee', userRoute);
app.use('/bill', invoiceRoute);



app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});