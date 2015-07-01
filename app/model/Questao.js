'use strict';

var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;

var QuestaoSchema = new Schema({
	nome			: {type:String, required:true},
	resultado		: String,
	justificativa	: String
});

module.exports = mongoose.model('Questao', QuestaoSchema);