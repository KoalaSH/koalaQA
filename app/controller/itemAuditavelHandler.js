var ItemAuditavel = rootRequire('app/model/ItemAuditavel');
var mongoose = require('mongoose');

	// nome		: String,
	// descricao	: String,
	// versao		: String

module.exports = {
	listAll : function(response) {
		ItemAuditavel.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createItemAuditavel : function( requestBody, response ) {
		var newItemAuditavel 		= new ItemAuditavel();
		newItemAuditavel.nome 	= requestBody.nome;

		if (requestBody.descricao) {
			newItemAuditavel.descricao = requestBody.descricao;
		}
		if (requestBody.versao) {
			newItemAuditavel.versao = requestBody.versao;
		};

		newItemAuditavel.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'ItemAuditavel salvo com sucesso!'});
			};
		});
	},
	
	getItemAuditavel : function( idItemAuditavel, response ) {
		ItemAuditavel.findById(idItemAuditavel, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'ItemAuditavel não encontrado.'}});
				}
			};
		})
	},

	updateItemAuditavel : function( idItemAuditavel, requestBody, response )  {
		console.log(requestBody);
		ItemAuditavel.findById(idItemAuditavel, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.descricao != result.descricao) {
					result.descricao = requestBody.descricao;
				}
				if (requestBody.versao != result.versao) {
					result.versao = requestBody.versao;
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"ItemAuditavel alterado com sucesso!"});
					};
				});
			};
		});
	},

	deleteItemAuditavel : function (idItemAuditavel, response) {
		ItemAuditavel.findById( idItemAuditavel ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'ItemAuditavel removido com sucesso!'});
			};
		})
	}
}