// app/controller/projetoHandler.js
var Projeto = rootRequire('app/model/Projeto');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
/*module.exports = mongoose.model('Projeto', {
	nome			: {type : String, required : true}, 
	participantes	: [ObjectId],
	fases			: [{
		nome	: String,
		inicio	: {type : Date, default : Date.now },
		fim		: Date
	}]
});*/
module.exports = {
	listAll : function(response) {
		Projeto.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	createProjeto : function( reqBody, response ) {
		var newProjeto 		= new Projeto();
		newProjeto.nome 	= reqBody.nome;
		if (reqBody.participantes) {
			newProjeto.participantes = reqBody.participantes;
		}
		if (reqBody.fases) {
			newProjeto.fases = reqBody.fases;
		};

		newProjeto.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'Projeto salvo com sucesso!'});
			};
		});
	}
};