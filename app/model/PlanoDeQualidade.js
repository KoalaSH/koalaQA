// app/models/koala.js
// import the mongoose module
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;

/* DEFINE THE MODELS */
// module.exports allow this file to pass the content to other files when called
var PlanoDeQualidadeSchema = new Schema({
	nome		: { type : String },
	descricao	: { type : String },
	auditorias	: [{type:ObjectId, ref:'Auditoria'}],
	resultado	: String 
});

module.exports = mongoose.model('PlanoDeQualidade', PlanoDeQualidadeSchema);