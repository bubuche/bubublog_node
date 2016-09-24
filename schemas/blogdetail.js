var mongoose = require('mongoose')

var BlogdetailSchema = new mongoose.Schema({
	title:String,
	date:String,
	content:String,
})


module.exports = BlogdetailSchema
