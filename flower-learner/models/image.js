const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
  link: String,
  fileName: String
}, {
  timestamps: true,
})

let imageModel = mongoose.model('Image', imageSchema)
module.exports = imageModel                          