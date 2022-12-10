const mongoose = require("mongoose")

const servSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    services:[{
        service_id:{
            type: String,
        },
        modules:[{
            module_id:{
                type: String,
            },
            title:{
                type: String,
            },
            image:{
                type: String,
            },
            units:[{
                unit_id:{
                    type: String,
                },
                title:{
                    type: String,
                },
                image:{
                    type: String,
                },
                unit_time_spent:{
                    type: String,
                },
                unit_score:{
                    type: String,
                },
                questions_answered:{
                    type: String,
                }
            }]
        }]
    }]
}, {timestamps: true})

module.exports  = mongoose.model('serv', servSchema)