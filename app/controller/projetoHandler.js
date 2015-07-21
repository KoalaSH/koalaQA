// app/controller/projetoHandler.js
var Projeto = rootRequire('app/model/Projeto');
var Fase 	= rootRequire('app/model/Fase');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId; 

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
	
	createProjeto : function( requestBody, response ) {
		var newProjeto 		= new Projeto();
		newProjeto.nome 	= requestBody.nome;
		if (requestBody.participantes) {
			newProjeto.participantes = requestBody.participantes;
		}
		if (requestBody.fases) {
			newProjeto.fases = requestBody.fases;
		};

		newProjeto.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, idProjeto : newProjeto._id});
			};
		});
	},
	
	getProjeto : function( idProjeto, response ) {
		Projeto.findById(idProjeto, function(err, projeto) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (projeto) {
					Fase.find({
							'_id' : { $in : projeto.fases}}, 
						function( err, result) {
							if (err) {
								response.json({success:false, error:err});
							} else{
								projeto.fases = result;
								response.json({success:true, resultado:projeto});
							};
						});
				} else {
					response.json({success:false, error:err});
				}
			};
		})
	},

	updateProjeto : function( idProjeto, requestBody, response )  {
		Projeto.findById(idProjeto, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.participantes) {
					result.participantes = requestBody.participantes;
				}
				if (requestBody.fases) {
					result.fases = requestBody.fases;
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"Projeto alterado com sucesso!"});
					};
				});
			};
		});
	},

	deleteProjeto : function (idProjeto, response) {
		Projeto.findById( idProjeto ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'Projeto removido com sucesso!'});
			};
		})
	}
};