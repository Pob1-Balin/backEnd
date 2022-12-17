const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    amount:{
        type: String,
        required: true
    },
    subscribe:{
        type: String,
    },
    modules:{
        type: [Object],
    },
    resource_description:{
        type: String,
        required: true
    },
    resource_image:{
        type: String,
        required: true
    },
    resource_file:{
        type: String,
        required: true
    },
}, {timestamps: true})

module.exports  = mongoose.model('service', serviceSchema)