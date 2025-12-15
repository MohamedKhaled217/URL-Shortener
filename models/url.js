const mongoose = require('mongoose')
const schema = mongoose.Schema

// create the schema
const urlSchema = new schema({
    longurl: { type: String, required: true },
    shorturl: { type: String, required: true },
    alias: { type: String, required: true }
}, { timestamps: true })


// create the model
const Url = mongoose.model('URL', urlSchema) // the collection name will be "urls"


module.exports = Url


