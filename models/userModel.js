const { boolean } = require('joi')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    phone_number:{
        type: String,
        required: [true, 'Add your phone number'],
    },
    gender:{
        type: String,
        required: [true, 'Please select your gender'],
    },
    country:{
        type: String,
        required:[true, 'Please add your country'],
    },
    last_name:{
        type: String,
        required: [true, 'Enter your address'],
    },
    isAdmin:{
      type: Boolean,
    },
    services:[{
      service_id:{
          type: String,
      },
      modules:[{
          module_id:{
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

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Users', userSchema)
