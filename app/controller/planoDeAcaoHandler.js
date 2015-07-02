var PlanoDeAcao = rootRequire('app/model/PlanoDeAcao');
var mongoose = require('mongoose');

	// nome		: String,
	// descricao	: String,
	// inicio		: Date,
	// fim 		: Date,
	// acoes 		: [{type:ObjectId, ref:'Acao'}]

module.exports = {
	listAll : function(response) {
		PlanoDeAcao.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createPlanoDeAcao : function( requestBody, response ) {
		var newPlanoDeAcao 		= new PlanoDeAcao();
		newPlanoDeAcao.nome 	= requestBody.nome;
		
		if (requestBody.descricao) {
			newPlanoDeAcao.descricao = requestBody.descricao;
		}
		if (requestBody.inicio) {
			newPlanoDeAcao.inicio = new Date(requestBody.inicio);
		}
		if (requestBody.fim) {
			newPlanoDeAcao.fim = new Date(requestBody.fim);
		}
		if (requestBody.acoes) {
			newPlanoDeAcao.acoes = requestBody.acoes;
		};

		newPlanoDeAcao.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'PlanoDeAcao salvo com sucesso!'});
			};
		});
	},
	
	getPlanoDeAcao : function( idPlanoDeAcao, response ) {
		PlanoDeAcao.findById(idPlanoDeAcao, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'PlanoDeAcao não encontrado.'}});
				}
			};
		})
	},

	updatePlanoDeAcao : function( idPlanoDeAcao, requestBody, response )  {
		console.log(requestBody);
		PlanoDeAcao.findById(idPlanoDeAcao, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.descricao != result.descricao) {
					result.descricao = requestBody.descricao;
				}
				if (requestBody.inicio != result.inicio) {
					result.inicio = new Date(requestBody.inicio);
				}
				if (requestBody.fim != result.fim) {
					result.fim = new Date(requestBody.fim);
				}
				if (requestBody.acoes != result.acoes) {
					result.acoes = requestBody.acoes;
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"PlanoDeAcao alterado com sucesso!"});
					};
				});
			};
		});
	},

	deletePlanoDeAcao : function (idPlanoDeAcao, response) {
		PlanoDeAcao.findById( idPlanoDeAcao ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'PlanoDeAcao removido com sucesso!'});
			};
		})
	}
}