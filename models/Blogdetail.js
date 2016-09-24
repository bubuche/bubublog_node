var mongoose = require('mongoose')
var BlogdetailSchema = require('../schemas/blogdetail')
var Blogdetail = mongoose.model('Blogdetail',BlogdetailSchema)

module.exports = Blogdetail