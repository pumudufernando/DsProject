const mongoose = require('mongoose');
const Schema1 = mongoose.Schema;

// Define database field for user details
let User = new Schema1({
    nic: {
        type: String
    }

}, {
        collection: 'user'
    });

//create the user collection
module.exports = mongoose.model('User', User);