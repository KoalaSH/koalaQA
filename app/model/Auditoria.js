// app/models/koala.js
// import the mongoose module
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;
var ObjectId 	= Schema.Types.ObjectId;

/* DEFINE THE MODELS */
// module.exports allow this file to pass the content to other files when called
var AuditoriaSchema = new Schema({
	nome		: {type:String, required:true},
	data		: Date,
	tipo		: String,
	auditavel	: {type:ObjectId, type:'ItemAuditavel'},
	situacao	: String
});

module.exports = mongoose.model('Auditoria', AuditoriaSchema);