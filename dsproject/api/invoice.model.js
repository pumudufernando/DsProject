const mongoose = require('mongoose');
const Schema2 = mongoose.Schema;

// define the entities for the bill according to the user
let Invoice = new Schema2({

        person_name:{

            type:String
        },

        business_name: {
            type: String
        },

        business_gst_number: {
            type: String
        }
    },

    {
        collection: 'invoice'
    });

module.exports = mongoose.model('Invoice', Invoice);