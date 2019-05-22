const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the collection and schema for schedules

let Schedule = new Schema({
    sname: {
        type: String
    },
    sstart: {
        type: String
    },
    send: {
        type: String
    },
    sdate: {
        type: String
    },
    stickets: {
        type: String
    }
},{
    collection: 'trainDetails'
});

module.exports = mongoose.model('Schedule', Schedule);