// acaoHandler.js
var Acao	= rootRequire('app/model/Acao');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = {
	listAll : function(response) {
		Acao.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createAcao : function( requestBody, response ) {
		var newAcao = new Acao();
		newAcao.nome = requestBody.nome;
		if (requestBody.responsavel) {
			newAcao.responsavel = requestBody.responsavel;
		}
		if (requestBody.dataEntrega) {
			newAcao.dataEntrega = new Date(requestBody.dataEntrega);
		}
		if (requestBody.situacao) {
			newAcao.situacao = requestBody.situacao;
		}

		newAcao.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'Acao salvo com sucesso!'});
			};
		});
	},
	
	getAcao : function( idAcao, response ) {
		Acao.findById(idAcao, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'Acao não encontrado.'}});
				}
			};
		})
	},

	updateAcao : function( idAcao, requestBody, response )  {
		console.log(requestBody);
		Acao.findById(idAcao, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.responsavel != result.responsavel) {
					result.responsavel = requestBody.responsavel;
				}
				if (requestBody.dataEntrega != result.dataEntrega) {
					result.dataEntrega = new Date(requestBody.dataEntrega);
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"Acao alterado com sucesso!"});
					};
				});
			};
		});
	},

	deleteAcao : function (idAcao, response) {
		Acao.findById( idAcao ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'Acao removido com sucesso!'});
			};
		})
	}
};