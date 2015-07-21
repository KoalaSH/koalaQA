var Auditoria = rootRequire('app/model/Auditoria');
var mongoose = require('mongoose');

module.exports = {
	listAll : function(response) {
		Auditoria.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createAuditoria : function( requestBody, response ) {
		var newAuditoria = new Auditoria();

		newAuditoria.nome = requestBody.nome;

		if (requestBody.data) {
			newAuditoria.data = new Date(requestBody.data);
		}
		if (requestBody.tipo) {
			newAuditoria.tipo = requestBody.tipo;
		}
		if (requestBody.auditavel) {
			newAuditoria.auditavel = requestBody.auditavel;
		}
		if (requestBody.situacao) {
			newAuditoria.situacao = requestBody.situacao;
		};

		newAuditoria.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, idAuditoria : newAuditoria._id});
			};
		});
	},
	
	getAuditoria : function( idAuditoria, response ) {
		Auditoria.findById(idAuditoria, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'Auditoria não encontrado.'}});
				}
			};
		})
	},

	updateAuditoria : function( idAuditoria, requestBody, response )  {
		console.log(requestBody);
		Auditoria.findById(idAuditoria, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.data != requestBody.data) {
					newAuditoria.data = new Date(requestBody.data);
				}
				if (requestBody.tipo != requestBody.tipo) {
					newAuditoria.tipo = requestBody.tipo;
				}
				if (requestBody.auditavel != requestBody.auditavel) {
					newAuditoria.auditavel = requestBody.auditavel;
				}
				if (requestBody.situacao != requestBody.situacao) {
					newAuditoria.situacao = requestBody.situacao;
				};

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"Auditoria alterado com sucesso!"});
					};
				});
			};
		});
	},

	deleteAuditoria : function (idAuditoria, response) {
		Auditoria.findById( idAuditoria ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'Auditoria removido com sucesso!'});
			};
		})
	}
}