const { Schema, model } = require('mongoose')

const phoneSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'The name is mandatory.']
        },
        manufacturer: {
            type: String,
            required: [true, 'The manufacturer is mandatory.']
        },
        description: {
            type: String,
            required: [true, 'The description is mandatory.']
        },
        color: {
            type: String,
            required: [true, 'The color is mandatory.']
        },
        price: {
            type: Number,
            required: [true, 'The price is mandatory.']
        },
        imageFileName: {
            type: String,
            required: [true, 'The imageFileName is mandatory.']
        },
        screen: {
            type: String,
            required: [true, 'The screen is mandatory.']
        },
        processor: {
            type: String,
            required: [true, 'The processor is mandatory.']
        },
        ram: {
            type: Number,
            required: [true, 'The ram is mandatory.']
        }
    }
)

const Phone = model('Phone', phoneSchema)
module.exports = Phone