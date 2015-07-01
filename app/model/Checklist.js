// app/models/koala.js
// import the mongoose module
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;

/* DEFINE THE MODELS */
// module.exports allow this file to pass the content to other files when called
var ChecklistSchema = new Schema({
	nome		: {type:String, required:true},
	descricao	: String,
	questoes	: [{type:ObjectId, ref:'Questao'}]
});

module.exports = mongoose.model('Checklist', ChecklistSchema);