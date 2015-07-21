// app/models/koala.js
// import the mongoose module
var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;

/* DEFINE THE MODELS */
// module.exports allow this file to pass the content to other files when called
var ItemAuditavelSchema = new Schema ({
	nome		: {type:String, unique:true},
	descricao	: String,
	versao		: String,
	produtos	: [{type:ObjectId, ref:'ItemAuditavel'}]
});

module.exports = mongoose.model('ItemAuditavel', ItemAuditavelSchema);