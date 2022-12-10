const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    event_id:{
        type: String,
    },
    title:{
        type: String,
        require: true
    },
    description:{
        type:String,
        require: true
    },
    amount:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    content:{
        type: String,
    }
},{timestamps:true})

module.exports = mongoose.model('events', eventsSchema);