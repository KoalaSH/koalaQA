// app/models/koala.js
// import the mongoose module
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;

/* DEFINE THE MODELS */
// module.exports allow this file to pass the content to other files when called
var PlanoDeAcaoSchema = new Schema({
	nome		: String,
	descricao	: String,
	inicio		: Date,
	fim 		: Date,
	acao 		: {type:ObjectId, ref:'Acao'}
});

module.exports = mongoose.model('PlanoDeAcao', PlanoDeAcaoSchema);