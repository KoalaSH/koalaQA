var Fase = rootRequire('app/model/Fase');
var mongoose = require('mongoose');

module.exports = {
	listAll : function(response) {
		Fase.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createFase : function( requestBody, response ) {
		var newFase = new Fase();
		newFase.nome = requestBody.nome;
		if (requestBody.inicio) {
			newFase.participantes = new Date(requestBody.participantes);
		}
		if (requestBody.fim) {
			newFase.fases = new Date(requestBody.fases);
		}

		if (requestBody.items) {
			newFase.items = requestBody.fases;
		};

		newFase.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'Fase salva com sucesso!'});
			};
		});
	},
	
	getFase : function( idFase, response ) {
		Fase.findById(idFase, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'Fase não encontrada.'}});
				}
			};
		})
	},

	updateFase : function( idFase, requestBody, response )  {
		console.log(requestBody);
		Fase.findById(idFase, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.inicio != result.inicio) {
					result.inicio = requestBody.inicio;
				}
				if (requestBody.fim != result.fim) {
					result.fim = requestBody.fim;
				}
				if (requestBody.items != result.items) {
					result.items = requestBody.items;
				};

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"Fase alterada com sucesso!"});
					};
				});
			};
		});
	},

	deleteFase : function (idFase, response) {
		Fase.findById( idFase ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'Fase removida com sucesso!'});
			};
		})
	}
}