// app/models/koala.js
// import the mongoose module
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;

/* DEFINE THE MODELS */
// module.exports allow this file to pass the content to other files when called
var AcaoSchema = new Schema({
	nome		: String,
	responsavel	: {type:ObjectId, ref:'Participante'},
	dataEntrega	: Date,
	situacao	: String,
	planoDeAcao	: {type:ObjectId, ref:'PlanoDeAcao'}
});

module.exports = mongoose.model('Acao', AcaoSchema);