'use strict';

var mongoose 		= require('mongoose');
var Schema 			= mongoose.Schema;
var ObjectId 		= Schema.Types.ObjectId;

var FaseSchema	= new Schema({
	nome	: String,
	inicio	: Date,
	fim		: Date,
	items	: [{type:ObjectId, ref:'ItemAuditavel'}]
});

module.exports = mongoose.model('Fase', FaseSchema);