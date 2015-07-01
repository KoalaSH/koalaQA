// app/models/koala.js
// import the mongoose module
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;


/* DEFINE THE MODELS */
// module.exports allow this file to pass the content to other files when called
var ProjetoSchema = new Schema({
	nome			: {type : String, required : true}, 
	participantes	: [{type:ObjectId, ref:'Participante'}],
	fases			: [{type:ObjectId, ref:'Fase'}]
});

module.exports = mongoose.model('Projeto', ProjetoSchema);