const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
  text: String
}, {
  timestamps: true,
})


module.exports = mongoose.model("Test", testSchema)                         