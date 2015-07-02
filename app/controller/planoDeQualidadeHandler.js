var PlanoDeQualidade = rootRequire('app/model/PlanoDeQualidade');
var mongoose = require('mongoose');

	// nome		: { type : String },
	// descricao	: { type : String },
	// auditorias	: [{type:ObjectId, ref:'Auditoria'}],
	// resultado	: String 

module.exports = {
	listAll : function(response) {
		PlanoDeQualidade.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createPlanoDeQualidade : function( requestBody, response ) {
		var newPlanoDeQualidade 		= new PlanoDeQualidade();
		newPlanoDeQualidade.nome 	= requestBody.nome;
		
		if (requestBody.descricao) {
			newPlanoDeQualidade.descricao = requestBody.descricao;
		}
		if (requestBody.auditorias) {
			newPlanoDeQualidade.auditorias = requestBody.auditorias;
		}
		if (requestBody.resultado) {
			newPlanoDeQualidade.resultado = requestBody.resultado;
		};

		newPlanoDeQualidade.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'PlanoDeQualidade salvo com sucesso!'});
			};
		});
	},
	
	getPlanoDeQualidade : function( idPlanoDeQualidade, response ) {
		PlanoDeQualidade.findById(idPlanoDeQualidade, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'PlanoDeQualidade não encontrado.'}});
				}
			};
		})
	},

	updatePlanoDeQualidade : function( idPlanoDeQualidade, requestBody, response )  {
		console.log(requestBody);
		PlanoDeQualidade.findById(idPlanoDeQualidade, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.descricao != result.descricao) {
					result.descricao = requestBody.descricao;
				}
				if (requestBody.auditorias != result.auditorias) {
					result.auditorias = requestBody.auditorias;
				}
				if (requestBody.resultado != result.resultado) {
					result.resultado = requestBody.resultado;
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"PlanoDeQualidade alterado com sucesso!"});
					};
				});
			};
		});
	},

	deletePlanoDeQualidade : function (idPlanoDeQualidade, response) {
		PlanoDeQualidade.findById( idPlanoDeQualidade ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'PlanoDeQualidade removido com sucesso!'});
			};
		})
	}
}