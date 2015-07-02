// app/controller/projetoHandler.js
var Projeto = rootRequire('app/model/Projeto');
var mongoose = require('mongoose');

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
				response.json({ success : true, message : 'Projeto salvo com sucesso!'});
			};
		});
	},
	
	getProjeto : function( idProjeto, response ) {
		Projeto.findById(idProjeto, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'Projeto não encontrado.'}});
				}
			};
		})
	},

	updateProjeto : function( idProjeto, requestBody, response )  {
		console.log(requestBody);
		Projeto.findById(idProjeto, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.participantes != result.participantes) {
					result.participantes = requestBody.participantes;
				}
				if (requestBody.fases != result.fases) {
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